import { useNavigate } from "react-router-dom";
import { Header, Button, Icon } from "../../../components/common";
import { allProducts } from "../../../data/mypage";
import { ProductListItem } from "../ProductListItem";

export const PurchaseHistory = () => {
    const navigate = useNavigate();

    const purchaseHistory = allProducts; // 예시로 allProducts 사용, 실제로는 구매 내역 데이터 사용

    return (
        <div className="bg-white h-screen flex flex-col">
            <Header className="bg-white">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold">나의 구매 내역</Header.Title>
                </Header.Left>
            </Header>
            <div className="flex-1 flex flex-col overflow-y-auto">
                {purchaseHistory.length > 0 ? (
                    purchaseHistory.map((product) => (
                        <ProductListItem
                            key={product.id}
                            product={product}
                            showBadge={true}
                            badgeStatus="sold-out"
                        />
                    ))
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                        <p className="text-base mb-2">구매 내역이 없어요.</p>
                        <p className="text-sm text-gray-400">동네 이웃과 따뜻한 거래를 해보세요.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

