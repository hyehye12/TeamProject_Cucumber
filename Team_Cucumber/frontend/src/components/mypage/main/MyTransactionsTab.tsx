import { Icon, ProductCard } from "../../../components/common";
import { allProducts } from "../../../data/mypage";
import { ViewedProductsSection } from "../ViewedProductsSection";
import { ShareSection } from "../ShareSection";
import { TabSwitcher } from "../TabSwitcher";

export const MyTransactionsTab = () => {
    return (
        <div>
            <div className="bg-purple-50 p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, #000 20px, #000 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, #000 20px, #000 21px)'
                }}></div>
                <div className="relative flex items-center justify-between">
                    <ProductCard.Bold className="text-3xl">우디님의 가계부</ProductCard.Bold>
                    <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">11월</span>
                    </div>
                </div>
                <ProductCard.Contents className="mt-4 text-sm text-gray-600">
                    더 이상 필요하지 않은 물건을 짐처럼 쌓아 두거나 버리지 말고, 꼭 필요한 이웃을 찾아가도록 도와주세요! 🥕
                </ProductCard.Contents>
            </div>

            <div className="bg-white m-4 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                    <ProductCard.Bold className="text-lg">11월 전체거래</ProductCard.Bold>
                    <Icon name="infoCircle" className="text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-2">0원</div>
                <ProductCard.Contents className="text-sm">
                    거래내역이 없어요. 다음 달 가계부에서 다시 만나요!
                </ProductCard.Contents>
            </div>

            <div className="bg-white m-4 p-6 rounded-lg shadow-sm border border-gray-100">
                <ProductCard.Bold className="text-lg mb-3">중고거래가 갖는 의미 🥕</ProductCard.Bold>
                <ProductCard.Contents className="text-sm leading-relaxed">
                    중고거래는 세상에 하나 뿐인 물건을 발견하고 이미 생산된 물건의 수명을 연장해 자원을 아낄 수 있어요.
                </ProductCard.Contents>
            </div>

            <ViewedProductsSection
                title="11월에 본 물품"
                description="우디님이 11월에 본 물품이에요."
                products={allProducts.slice(0, 3)}
            />

            <ShareSection
                title="우디님의 멋진 실천을 공유해보세요"
                description="자세한 거래내역과 내가 본 물품은 나만 볼 수 있어요. (소곤소곤)"
            />

            <div className="m-4 mb-6">
                <TabSwitcher targetTab="neighborhood-transactions" />
            </div>
        </div>
    );
};

