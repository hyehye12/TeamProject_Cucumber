import { Header } from "@/components";
import { Button } from "@/components";
import { Icon } from "@/components";
import { useLocationStore } from "@/stores/useLocationStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/components";

const LocationPage = () => {
  const navigate = useNavigate();

  // Zustand 스토어에서 상태와 액션 가져오기
  const {
    searchTerm,
    searchResults,
    randomGroups,
    showRandom,
    isLoading,
    error,
    searchLocations,
    loadInitialData,
    generateRandomLocations,
  } = useLocationStore();

  const { setLocation } = useAuthStore();

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  // 위치 선택 핸들러
  const handleLocationSelect = (loc: any) => {
    // 전체 주소 생성
    const fullAddress = loc.parentName
      ? `${loc.parentName} ${loc.name}`
      : loc.name;

    // AuthStore에 위치 저장
    setLocation(fullAddress);

    console.log("선택된 위치:", fullAddress);

    // 이전 페이지로 이동
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header>
        <Header.Left>
          <Button
            className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent"
            onClick={() => navigate(-1)}
          >
            <Icon name="left" className="text-2xl" />
          </Button>
          <input
            placeholder="동명(읍, 면)으로 검색(ex. 서초동)"
            className="bg-gray-100 p-2 w-[85%] rounded-md"
            value={searchTerm}
            onChange={(e) => searchLocations(e.target.value)}
            disabled={isLoading}
          />
        </Header.Left>
      </Header>

      <Button className="w-[90%] text-xl mx-auto mt-5">🎯 내 위치 찾기</Button>

      {/* 로딩 */}
      {isLoading && (
        <div className="flex flex-1 flex-col items-center mt-20">
          <Spinner />
        </div>
      )}

      {/* 에러 */}
      {error && (
        <div className="text-center mt-10">
          <p className="text-red-500 mb-3">{error}</p>
          <button onClick={loadInitialData} className="text-blue-500 underline">
            다시 시도
          </button>
        </div>
      )}

      {/* 검색결과 */}
      {!isLoading && searchTerm && searchResults.length > 0 && (
        <div className="w-[90%] mx-auto mt-5 overflow-y-auto">
          <h3 className="font-bold mb-3 text-lg">'{searchTerm}' 검색 결과</h3>
          <br></br>

          {(() => {
            // 시/군/구별로 그룹핑
            const grouped = searchResults.reduce((acc, loc) => {
              // 읍면동 레벨인 경우
              if (loc.level === "eupmyeondong" && loc.parentName) {
                const key = loc.parentName; // "서울특별시 강동구"
                if (!acc[key]) {
                  acc[key] = [];
                }
                acc[key].push(loc.name);
              }
              // 시군구나 시도 레벨인 경우
              else {
                const key = loc.parentName
                  ? `${loc.parentName} ${loc.name}`
                  : loc.name;
                if (!acc[key]) {
                  acc[key] = [];
                }
              }
              return acc;
            }, {} as Record<string, string[]>);

            return Object.entries(grouped).map(([region, dongs], i) => (
              <div key={i} className="mb-8">
                {/* 제목: 시도 + 시군구 (+ 첫 번째 읍면동) */}
                <h3
                  className="font-bold text-lg mb-3 cursor-pointer hover:text-orange-500"
                  onClick={() =>
                    handleLocationSelect({
                      name: region,
                      parentName: "",
                      level: "sigungu",
                    })
                  }
                >
                  {region} {dongs.length > 0 && dongs[0]}
                </h3>

                {/* 나머지 읍면동 목록 */}
                {dongs.length > 0 && (
                  <div className="text-gray-400 text-sm leading-relaxed">
                    {dongs.map((dong, idx) => (
                      <span
                        key={idx}
                        className="cursor-pointer hover:text-orange-500"
                        onClick={() =>
                          handleLocationSelect({
                            name: dong,
                            parentName: region,
                            level: "eupmyeondong",
                          })
                        }
                      >
                        {dong}
                        {idx < dongs.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ));
          })()}
        </div>
      )}

      {/* 검색 결과 없음 */}
      {!isLoading && searchTerm && searchResults.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-gray-500">검색 결과가 없습니다</p>
          <p className="text-sm text-gray-400 mt-2">
            다른 검색어로 시도해보세요
          </p>
        </div>
      )}

      {!isLoading && !searchTerm && !showRandom && !error && (
        <div className="flex flex-1 flex-col items-center mt-20 text-xl">
          <p className="text-gray-500 text-center mb-5">
            현재 위치로 동네를 받아오지 못했어요.
            <br />내 동네 이름으로 검색해보세요!
          </p>
          <button
            className="text-orange-500 font-bold cursor-pointer"
            onClick={generateRandomLocations}
          >
            내 동네 이름 검색하기
          </button>
        </div>
      )}

      {/* 랜덤 지역 목록 */}
      {!isLoading && showRandom && randomGroups.length > 0 && (
        <div className="w-[90%] mx-auto mt-5 overflow-y-auto">
          {randomGroups.map((group, i) => (
            <div key={i} className="mb-8">
              {/* 제목: 시도 + 시군구 + 첫 번째 읍면동 */}
              <h3 className="font-bold text-lg mb-3">
                {group.sido} {group.sigungu} {group.dongs[0]}
              </h3>

              {/* 나머지 읍면동 목록 */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {group.dongs.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationPage;
