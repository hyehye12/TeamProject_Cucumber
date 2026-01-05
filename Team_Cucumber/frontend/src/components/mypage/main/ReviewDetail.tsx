import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, Tabs, ProductCard } from "../../../components/common";
import { recentReviews } from "../../../data/mypage";
import { ReviewItem } from "../ReviewItem";
import type { Review } from "../../../types/mypage";

export const ReviewDetail = () => {
    const navigate = useNavigate();

    // 전체 후기 (판매자 + 구매자)
    const allReviews = recentReviews;
    
    // 판매자 후기만 필터링
    const sellerReviews = recentReviews.filter((review) => review.role === "판매자");
    
    // 구매자 후기만 필터링
    const buyerReviews = recentReviews.filter((review) => review.role === "구매자");

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button 
                        onClick={() => navigate(-1)} 
                        className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent"
                    >
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">거래 후기 상세</Header.Title>
                </Header.Left>
            </Header>

            <Tabs.Root defaultValue="all" className="flex-1 flex flex-col min-h-0">
                <Tabs.List className="shrink-0">
                    <Tabs.Trigger value="all">전체 후기</Tabs.Trigger>
                    <Tabs.Trigger value="seller">판매자 후기</Tabs.Trigger>
                    <Tabs.Trigger value="buyer">구매자 후기</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="all" className="flex-1 overflow-y-auto">
                    <div className="px-4 py-4">
                        <ProductCard.Bold className="text-lg text-gray-900 mb-4">후기 {allReviews.length}개</ProductCard.Bold>
                        {allReviews.length > 0 ? (
                            <div className="space-y-0">
                                {allReviews.map((review: Review) => (
                                    <ReviewItem key={review.id} review={review} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center justify-center">
                                <ProductCard.Contents className="text-sm">받은 후기가 없어요.</ProductCard.Contents>
                            </div>
                        )}
                    </div>
                </Tabs.Content>

                <Tabs.Content value="seller" className="flex-1 overflow-y-auto">
                    <div className="px-4 py-4">
                        <ProductCard.Bold className="text-lg text-gray-900 mb-4">후기 {sellerReviews.length}개</ProductCard.Bold>
                        {sellerReviews.length > 0 ? (
                            <div className="space-y-0">
                                {sellerReviews.map((review: Review) => (
                                    <ReviewItem key={review.id} review={review} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center justify-center">
                                <ProductCard.Contents className="text-sm">판매자 후기가 없어요.</ProductCard.Contents>
                            </div>
                        )}
                    </div>
                </Tabs.Content>

                <Tabs.Content value="buyer" className="flex-1 overflow-y-auto">
                    <div className="px-4 py-4">
                        <ProductCard.Bold className="text-lg text-gray-900 mb-4">후기 {buyerReviews.length}개</ProductCard.Bold>
                        {buyerReviews.length > 0 ? (
                            <div className="space-y-0">
                                {buyerReviews.map((review: Review) => (
                                    <ReviewItem key={review.id} review={review} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center justify-center">
                                <ProductCard.Contents className="text-sm">구매자 후기가 없어요.</ProductCard.Contents>
                            </div>
                        )}
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};

