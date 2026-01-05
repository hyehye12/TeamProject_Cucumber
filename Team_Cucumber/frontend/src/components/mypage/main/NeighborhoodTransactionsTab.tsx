import { StatCard } from "../StatCard";
import { ShareSection } from "../ShareSection";
import { TabSwitcher } from "../TabSwitcher";
import { ProductCard } from "../../../components/common";

export const NeighborhoodTransactionsTab = () => {
    return (
        <div>
            <div className="bg-blue-50 p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, #000 20px, #000 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, #000 20px, #000 21px)'
                }}></div>
                <div className="relative flex items-center justify-between">
                    <ProductCard.Bold className="text-3xl">우디님의 동네 가계부</ProductCard.Bold>
                    <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">11월</span>
                    </div>
                </div>
                <ProductCard.Contents className="mt-4 text-sm text-gray-600">
                    더 이상 필요하지 않은 물건을 짐처럼 쌓아 두거나 버리지 말고, 꼭 필요한 이웃을 찾아가도록 도와주세요! 🥕
                </ProductCard.Contents>
            </div>

            <div className="bg-white m-4 p-6 rounded-lg shadow-sm border border-gray-100">
                <ProductCard.Bold className="text-lg mb-2">역삼동 소식</ProductCard.Bold>
                <ProductCard.Contents className="text-sm mb-4">우리 동네의 따뜻한 소식을 전해드려요</ProductCard.Contents>
                <div className="flex gap-4 bg-pink-50 p-4 rounded-lg">
                    <div className="w-16 h-16 rounded-full bg-purple-200 flex-shrink-0"></div>
                </div>
            </div>

            <StatCard
                title="많은 이웃들이 함께했어요"
                value="1,103,990 명"
                subtitle="역삼동 근처 이웃"
                description="우디님은 일상생활 속에서 이웃들을 자주 만나시나요? 좋은 이웃과 더불어 살아갈 때, 더 행복하게 오래 살 수 있다고 해요. 당근을 통해 역삼동 근처 이웃들과 따뜻함을 주고 받으면 어떨까요? 우디님이 당근을 통해 더 행복해지길 바라요. 🥰"
                footer="강남구 기준"
            />

            <StatCard
                title="우리 동네 이웃과 따뜻함을 나눠요"
                value="9,830번"
                subtitle="이웃들의 따뜻한 나눔"
                description="집에 잠들어 있는 물건이 있다면 나눔으로 새 주인을 찾아주는 건 어떠세요? 우리 동네 이웃들은 9,830번의 따뜻함을 선물했어요. 따뜻한 나눔 문화에 함께 해요. 🥕"
                footer="강남구 기준"
                icon={
                    <div className="text-center">
                        <div className="text-4xl mb-2">📦</div>
                        <div className="flex gap-1 justify-center">
                            {['❤️', '💛', '💜', '💚'].map((emoji, i) => (
                                <span key={i} className="text-2xl">{emoji}</span>
                            ))}
                        </div>
                    </div>
                }
                iconBgColor="bg-yellow-50"
            />

            <StatCard
                title="역삼동 근처 주민은 이렇게 거래했어요"
                value={
                    <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">판매건수</span>
                            <span className="text-lg font-bold text-orange-500">150,319건</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">판매액</span>
                            <span className="text-lg font-bold text-orange-500">19,721,691,775원</span>
                        </div>
                    </div>
                }
                description="11월에는 이웃들이 당근으로 19,721,691,775원의 거래를 했어요. 이웃들의 참여로 따뜻한 지역 거래 문화가 만들어지고 있어요. 앞으로도 역삼동 근처 이웃들의 더 가깝고 따뜻한 거래를 기대해요! ❤️"
                footer="강남구 기준 (천만원 이상 거래 제외)"
                icon={
                    <div className="text-center">
                        <div className="text-4xl mb-2">🏙️</div>
                    </div>
                }
                iconBgColor="bg-purple-50"
            />

            <StatCard
                title="이웃들과 중고거래로 지구를 살려요"
                value="98,608 그루"
                subtitle="함께 심은 나무"
                description="역삼동 근처 주민들이 당근 거래로 재활용한 자원의 가치는 소나무 98,608그루를 심는 것과 같아요. 98,608그루의 나무가 배출하는 산소의 양은 성인 394,434명이 하루 동안 숨쉴 수 있는 양이기도 해요. 믿어지시나요? 앞으로도 당근을 통해 자원 재순환에 동참해주세요! 🌍"
                footer="강남구 기준 (천만원 이상 거래제외)"
                icon={
                    <div className="text-center">
                        <div className="text-4xl mb-2">🌍</div>
                    </div>
                }
                iconBgColor="bg-green-50"
            />

            <ShareSection
                title="우디님의 멋진 실천을 공유해보세요"
                description="자세한 거래내역과 내가 본 물품은 나만 볼 수 있어요 (소곤소곤)"
            />

            <div className="m-4 mb-6">
                <TabSwitcher targetTab="my-transactions" />
            </div>
        </div>
    );
};

