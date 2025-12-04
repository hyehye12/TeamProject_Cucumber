import { create } from "zustand";
import type { LocationData, RandomLocationGroup } from "@/types/location";
import { sgisService } from "@/services/sgisService";

interface LocationStore {
  // 상태
  allLocations: LocationData[];
  searchResults: LocationData[];
  randomGroups: RandomLocationGroup[];
  searchTerm: string;
  showRandom: boolean;
  isLoading: boolean;
  error: string | null;

  // 액션
  setSearchTerm: (term: string) => void;
  setShowRandom: (show: boolean) => void;
  loadInitialData: () => Promise<void>;
  searchLocations: (term: string) => void;
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

  // 검색어 설정
  setSearchTerm: (term) => set({ searchTerm: term }),

  // 랜덤 표시 토글
  setShowRandom: (show) => set({ showRandom: show }),

  // 초기 데이터 로드 (시도 목록)
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

  // 검색
  searchLocations: (term) => {
    const { allLocations } = get();
    set({ searchTerm: term, showRandom: false });

    if (!term.trim()) {
      set({ searchResults: [] });
      return;
    }

    const results = allLocations.filter((loc) => loc.name.includes(term));
    set({ searchResults: results });
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
