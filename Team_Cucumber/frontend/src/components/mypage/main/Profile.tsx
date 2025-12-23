import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, ProductCard } from "../../../components/common";
import { mockUsers, allProducts } from "../../../data/mypage";
import { ProfileCard } from "../ProfileCard";
import { MannerTemperatureCard } from "../MannerTemperatureCard";
import { SalesProductsCard } from "../SalesProductsCard";
import { ReviewsCard } from "../ReviewsCard";

export const Profile = () => {
    const navigate = useNavigate();
    const currentUser = mockUsers[0]; // 우디

    // 판매물품 데이터 (최신 5개 중 3개 표시)
    const recentProducts = allProducts.slice(0, 5);
    const displayedProducts = recentProducts.slice(0, 3);
    const totalProductCount = 30; // 전체 판매물품 수
    const totalReviewCount = 5;

    return (
        <div className="bg-gray-100 h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">프로필</Header.Title>
                </Header.Left>
                <Header.Right>
                    <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="share" className="text-2xl" />
                    </Button>
                </Header.Right>
            </Header>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
                <ProfileCard
                    nickname={currentUser.nickname}
                    userId="#12912700"
                    joinDate="2021년 6월 13일 가입"
                    locationInfo="동네 인증 (최근 30일)"
                    locationDetail="일원본동 1회 인증, 서울특별시 구로구 미인증"
                />
                <MannerTemperatureCard temperature={currentUser.temperature} />
                <SalesProductsCard totalCount={totalProductCount} products={displayedProducts} />
                <ReviewsCard totalCount={totalReviewCount} />
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <ProductCard.Bold className="text-lg text-gray-900">활동 배지</ProductCard.Bold>
                        <Icon name="right" className="text-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

