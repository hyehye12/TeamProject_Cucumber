import { Header } from "@/components";
import { Button } from "@/components";
import { Icon } from "@/components";
import { useLocationStore } from "@/stores/useLocationStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

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
        <div>
          <div>
            <div></div>
            <p>로딩중</p>
          </div>
        </div>
      )}

      {/* 에러 */}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={loadInitialData}>다시시도</button>
        </div>
      )}

      {/* 검색결과 */}
      {!isLoading && searchTerm && searchResults.length > 0 && (
        <div>
          {searchResults.map((loc, i) => (
            <div key={i} onClick={() => console.log("선택된 위치", loc)}>
              <p>{loc.name}</p>
              <p>{loc.level}</p>
            </div>
          ))}
        </div>
      )}

      {/* 검색 결과 없음 */}
      {!isLoading && searchTerm && searchResults.length === 0 && (
        <div>
          <p>검색 결과가 없습니다</p>
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
