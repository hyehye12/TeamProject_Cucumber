import { Header, Button, Icon, Spinner } from "@/components";
import { useLocationStore } from "@/stores/useLocationStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomSheet from "@/components/common/BottomSheet/BottomSheet";

const LocationPage = () => {
  const navigate = useNavigate();

  // BottomSheet 상태 관리
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

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

  // 위치 선택 핸들러 수정
  const handleLocationSelect = (loc: any) => {
    const fullAddress = loc.parentName
      ? `${loc.parentName} ${loc.name}`
      : loc.name;

    setSelectedLocation(fullAddress);
    setIsBottomSheetOpen(true); // BottomSheet 열기
  };

  // 본인인증 진행
  const handleVerification = () => {
    setLocation(selectedLocation);
    setIsBottomSheetOpen(false);

    // 본인인증 페이지로 이동 (또는 이전 페이지로)
    // navigate('/verification');
    navigate(-1); // 임시로 이전 페이지로
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
          <br />

          {(() => {
            const grouped = searchResults.reduce((acc, loc) => {
              if (loc.level === "eupmyeondong" && loc.parentName) {
                const key = loc.parentName;
                if (!acc[key]) {
                  acc[key] = [];
                }
                acc[key].push(loc.name);
              } else {
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
              <h3 className="font-bold text-lg mb-3">
                {group.sido} {group.sigungu} {group.dongs[0]}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {group.dongs.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* BottomSheet - 본인인증 안내 */}
      <BottomSheet
        open={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        timeout={300}
      >
        <div className="flex flex-col pt-10 pb-4 max-h-[60vh] overflow-y-auto">
          {/* 제목 */}
          <h2 className="text-2xl font-bold mb-3">
            안전한 당근 이용을 위해
            <br />
            본인인증을 진행할게요
          </h2>

          {/* 설명 */}
          <p className="text-gray-600 mb-6">
            건강한 당근 문화를 위해 본인인증이 필요해요
          </p>

          {/* 일러스트 이미지 */}
          <div className="w-[60%] mx-auto">
            {/* 실제 이미지로 교체하세요 */}
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center"></div>
          </div>

          {/* 인증 버튼 */}
          <Button
            className="text-xl w-[90%] mx-auto mt-5"
            onClick={() => navigate("/login")}
          >
            30초만에 인증하기
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
};

export default LocationPage;
