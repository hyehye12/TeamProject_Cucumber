import { create } from "zustand";
import type { LocationData, RandomLocationGroup } from "@/types/location";
import { sgisService } from "@/services/sgisService";

// Store 내부에서 사용할 확장 타입
interface ExtendedLocationData extends LocationData {
  parentName?: string;
}

interface LocationStore {
  // 상태
  allLocations: ExtendedLocationData[];
  searchResults: ExtendedLocationData[];
  randomGroups: RandomLocationGroup[];
  searchTerm: string;
  showRandom: boolean;
  isLoading: boolean;
  error: string | null;
  searchTimer: NodeJS.Timeout | null;

  // 액션
  setSearchTerm: (term: string) => void;
  setShowRandom: (show: boolean) => void;
  loadInitialData: () => Promise<void>;
  searchLocations: (term: string) => void;
  performSearch: (term: string) => Promise<void>;
  generateRandomLocations: () => Promise<void>;
  clearError: () => void;
}

export const useLocationStore = create<LocationStore>((set, get) => ({
  // 초기 상태
  allLocations: [],
  searchResults: [],
  randomGroups: [],
  searchTerm: "",
  showRandom: false,
  isLoading: false,
  error: null,
  searchTimer: null,

  // 검색어 설정
  setSearchTerm: (term) => set({ searchTerm: term }),

  // 랜덤 표시 토글
  setShowRandom: (show) => set({ showRandom: show }),

  // 초기 데이터 로드 (시도 목록만)
  loadInitialData: async () => {
    set({ isLoading: true, error: null });

    try {
      console.log("시도 목록 로딩 중...");
      const sidoList = await sgisService.getSidoList();

      set({ allLocations: sidoList });
      console.log("시도 목록 로드 완료:", sidoList.length, "개");
    } catch (error) {
      console.error("데이터 로드 실패:", error);
      set({ error: "API 호출에 실패했습니다. CORS 문제일 수 있습니다." });
    } finally {
      set({ isLoading: false });
    }
  },

  // 디바운스된 검색 함수 (사용자가 타이핑 멈춘 후 500ms 후 검색)
  searchLocations: (term) => {
    const { searchTimer } = get();

    // 기존 타이머 취소
    if (searchTimer) {
      clearTimeout(searchTimer);
    }

    set({ searchTerm: term, showRandom: false });

    if (!term.trim()) {
      set({ searchResults: [], searchTimer: null });
      return;
    }

    // 500ms 후에 실제 검색 실행
    const newTimer = setTimeout(() => {
      get().performSearch(term);
    }, 500);

    set({ searchTimer: newTimer });
  },

  // 🔥 최적화된 실제 검색 함수
  performSearch: async (term) => {
    set({ isLoading: true, error: null });

    try {
      const results: ExtendedLocationData[] = [];
      const { allLocations } = get();

      console.log(`"${term}" 검색 시작...`);
      const startTime = Date.now();

      // 🔥 목표 결과 개수를 10개로 설정 (빠른 종료)
      const TARGET_RESULTS = 10;

      // 🔥 시도를 랜덤하게 섞어서 검색 (특정 지역 편중 방지, 빠른 결과 발견)
      const shuffledSido = allLocations
        .filter((loc) => loc.level === "sido")
        .sort(() => Math.random() - 0.5);

      // 모든 시도를 순회하며 하위 지역 검색
      for (const sido of shuffledSido) {
        // 🔥 목표 개수에 도달하면 즉시 종료
        if (results.length >= TARGET_RESULTS) {
          console.log(`✅ 목표 개수(${TARGET_RESULTS}개) 도달, 검색 종료`);
          break;
        }

        try {
          // 1. 해당 시도의 모든 시군구 가져오기
          const sigunguList = await sgisService.getSigunguList(sido.code);

          for (const sigungu of sigunguList) {
            // 🔥 목표 개수 도달 시 내부 루프도 종료
            if (results.length >= TARGET_RESULTS) break;

            // 2. 시군구 이름이 검색어를 포함하는지 확인
            const sigunguMatch = sigungu.name.includes(term);

            // 3. 모든 읍면동 가져오기
            try {
              const dongList = await sgisService.getEupmyeondongList(
                sigungu.code
              );

              // 4. 읍면동 중 검색어가 포함된 것만 필터링
              const matchedDongs = dongList.filter((dong) =>
                dong.name.includes(term)
              );

              // 5. 매칭된 읍면동이 있으면 결과에 추가
              if (matchedDongs.length > 0) {
                // 🔥 남은 개수만큼만 추가
                const remainingSlots = TARGET_RESULTS - results.length;
                const dongsToAdd = matchedDongs.slice(0, remainingSlots);

                results.push(
                  ...dongsToAdd.map((dong) => ({
                    ...dong,
                    parentName: `${sido.name} ${sigungu.name}`,
                  }))
                );

                console.log(
                  `  ✓ ${sido.name} ${sigungu.name}: ${dongsToAdd.length}개 추가 (총 ${results.length}개)`
                );

                // 🔥 목표 도달 시 즉시 종료
                if (results.length >= TARGET_RESULTS) break;
              }
              // 6. 시군구 이름이 매칭되면 모든 읍면동 추가
              else if (sigunguMatch) {
                const remainingSlots = TARGET_RESULTS - results.length;
                const dongsToAdd = dongList.slice(0, remainingSlots);

                results.push(
                  ...dongsToAdd.map((dong) => ({
                    ...dong,
                    parentName: `${sido.name} ${sigungu.name}`,
                  }))
                );

                console.log(
                  `  ✓ ${sido.name} ${sigungu.name} (시군구 매칭): ${dongsToAdd.length}개 추가`
                );

                if (results.length >= TARGET_RESULTS) break;
              }
            } catch (error) {
              console.warn(`${sigungu.name} 읍면동 로딩 실패:`, error);
            }

            // 🔥 API 호출 제한 고려 (50ms → 20ms로 단축)
            await new Promise((resolve) => setTimeout(resolve, 20));
          }
        } catch (error) {
          console.warn(`${sido.name} 시군구 로딩 실패:`, error);
        }

        // 🔥 결과가 충분히 모였으면 조기 종료
        if (results.length >= TARGET_RESULTS) break;
      }

      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`✅ 검색 완료: ${results.length}개 (${elapsedTime}초 소요)`);

      // 랜덤으로 섞기 (다양성 확보)
      const shuffledResults = results.sort(() => Math.random() - 0.5);

      set({ searchResults: shuffledResults.slice(0, 10) });
    } catch (error) {
      console.error("검색 실패:", error);
      set({ error: "검색에 실패했습니다." });
    } finally {
      set({ isLoading: false });
    }
  },

  // 랜덤 지역 생성
  generateRandomLocations: async () => {
    const { allLocations } = get();
    set({ isLoading: true, showRandom: false, error: null });

    try {
      console.log("랜덤 지역 생성 중...");

      // 시도 목록에서 랜덤 3개 선택
      const sidoList = allLocations.filter((loc) => loc.level === "sido");
      const randomSido = sidoList.sort(() => Math.random() - 0.5).slice(0, 3);

      const groups: RandomLocationGroup[] = [];

      for (const sido of randomSido) {
        console.log(`${sido.name} 시군구 로딩...`);
        const sigunguList = await sgisService.getSigunguList(sido.code);

        // 빈 배열이면 다음으로
        if (sigunguList.length === 0) {
          console.warn(`${sido.name}에 시군구가 없습니다. 건너뜁니다.`);
          continue;
        }

        const randomSigungu = sigunguList.slice(0, 2);

        for (const sigungu of randomSigungu) {
          console.log(`${sigungu.name} 읍면동 로딩...`);
          const dongList = await sgisService.getEupmyeondongList(sigungu.code);

          // 읍면동이 있을 때만 추가
          if (dongList.length > 0) {
            groups.push({
              sido: sido.name,
              sigungu: sigungu.name,
              dongs: dongList.map((d) => d.name),
            });
          } else {
            console.warn(`${sigungu.name}에 읍면동이 없습니다. 건너뜁니다.`);
          }

          // API 호출 제한 고려
          await new Promise((resolve) => setTimeout(resolve, 200));
        }
      }

      // 최소 1개 이상의 그룹이 생성되었을 때만 성공
      if (groups.length > 0) {
        set({ randomGroups: groups, showRandom: true });
        console.log("랜덤 지역 생성 완료:", groups.length, "개");
      } else {
        set({ error: "랜덤 지역을 생성할 수 없습니다. 다시 시도해주세요." });
      }
    } catch (error) {
      console.error("랜덤 지역 생성 실패:", error);
      set({ error: "랜덤 지역을 불러오는데 실패했습니다." });
    } finally {
      set({ isLoading: false });
    }
  },

  // 에러 초기화
  clearError: () => set({ error: null }),
}));
