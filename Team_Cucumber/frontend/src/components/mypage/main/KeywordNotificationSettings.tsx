import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, ProductCard, Checkbox } from "../../../components/common";
import { NeighborhoodSelectionSheet } from "../NeighborhoodSelectionSheet";

export const KeywordNotificationSettings = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const [isNeighborhoodSheetOpen, setIsNeighborhoodSheetOpen] = useState(false);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<{ name: string; nearbyCount: number } | null>(null);
    const [selectedNeighborhoods] = useState([
        { id: 1, name: "일원본동", nearbyCount: 50 },
        { id: 2, name: "고척동", nearbyCount: 81 },
    ]);
    const [registeredKeywords, setRegisteredKeywords] = useState(["키움"]);
    const [recentKeywords] = useState([
        "기아타이거즈 점퍼",
        "스카이라인 야구공",
        "응원팔찌",
        "헬로키티 키링",
        "lgtwins",
    ]);

    const handleRegisterKeyword = () => {
        if (keyword.trim()) {
            setRegisteredKeywords([...registeredKeywords, keyword.trim()]);
            setKeyword("");
        }
    };

    const handleAddRecentKeyword = (recentKeyword: string) => {
        if (!registeredKeywords.includes(recentKeyword)) {
            setRegisteredKeywords([...registeredKeywords, recentKeyword]);
        }
    };

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">키워드 알림 설정 (1/30)</Header.Title>
                </Header.Left>
                <Header.Right>
                    <Button 
                        onClick={() => navigate("/mypage/keyword-edit")}
                        className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent"
                    >
                        <ProductCard.Contents className="text-base">편집</ProductCard.Contents>
                    </Button>
                </Header.Right>
            </Header>

            <div className="flex-1 overflow-y-auto px-4 py-4">
                {/* 키워드 입력 섹션 */}
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="알림 받을 키워드를 입력해주세요."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleRegisterKeyword()}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500"
                    />
                    <Button
                        onClick={handleRegisterKeyword}
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
                    >
                        등록
                    </Button>
                </div>

                {/* 등록된 키워드 */}
                {registeredKeywords.length > 0 && (
                    <div className="mb-6 border-b border-gray-400">
                        {registeredKeywords.map((kw, index) => (
                            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                                <ProductCard.Bold className="text-base">{kw}</ProductCard.Bold>
                                <div className="flex items-center gap-3">
                                    <Icon name="setting" className="text-gray-400 text-xl" />
                                    <Icon name="trash" className="text-gray-400 text-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 최근 본 키워드 */}
                <div className="mb-6">
                    <ProductCard.Contents className="text-sm text-gray-500 mb-3">
                        우디님이 최근 본 키워드예요.
                    </ProductCard.Contents>
                    <div className="flex flex-wrap gap-2">
                        {recentKeywords.map((recentKw, index) => (
                            <Button
                                key={index}
                                onClick={() => handleAddRecentKeyword(recentKw)}
                                className="bg-white border border-gray-300 text-black px-4 py-2 rounded-full text-sm hover:bg-gray-50 flex items-center gap-1 w-auto"
                            >
                                {recentKw}
                                <Icon name="circlePlus" className="text-base" />
                            </Button>
                        ))}
                    </div>
                </div>

                {/* 동네 설정 */}
                <div className="mb-6 border-t border-gray-400 pt-4">
                    {selectedNeighborhoods.map((neighborhood) => (
                        <div
                            key={neighborhood.id}
                            className="flex items-center justify-between py-3 border-b border-gray-100"
                        >
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    id={`neighborhood-${neighborhood.id}`}
                                    checked={true}
                                    onChange={() => {}}
                                />
                                <div>
                                    <ProductCard.Bold className="text-base">{neighborhood.name}</ProductCard.Bold>
                                    <Button
                                        onClick={() => {
                                            setSelectedNeighborhood({ name: neighborhood.name, nearbyCount: neighborhood.nearbyCount });
                                            setIsNeighborhoodSheetOpen(true);
                                        }}
                                        className="bg-transparent hover:bg-transparent p-0 text-left"
                                    >
                                        <ProductCard.Contents className="text-sm text-orange-500">
                                            근처 동네 {neighborhood.nearbyCount}개 &gt;
                                        </ProductCard.Contents>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 동네 선택 바텀시트 */}
            {selectedNeighborhood && (
                <NeighborhoodSelectionSheet
                    open={isNeighborhoodSheetOpen}
                    onClose={() => setIsNeighborhoodSheetOpen(false)}
                    neighborhoodName={selectedNeighborhood.name}
                    nearbyCount={selectedNeighborhood.nearbyCount}
                />
            )}
        </div>
    );
};

