import { useNavigate } from "react-router-dom";
import { Icon, ProductCard, Button } from "../../components/common";
import { reviewTags, recentReviews } from "../../data/mypage";
import type { ReviewTag, Review } from "../../types/mypage";

interface ReviewsCardProps {
    totalCount: number;
}

export const ReviewsCard = ({ totalCount }: ReviewsCardProps) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <Button
                onClick={() => navigate("/mypage/review-detail")}
                className="w-full bg-transparent hover:bg-transparent flex items-center justify-between mb-4 text-left p-0"
            >
                <ProductCard.Bold className="text-lg text-gray-900">받은 후기 {totalCount}</ProductCard.Bold>
                <Icon name="right" className="text-gray-400" />
            </Button>
            {recentReviews.length > 0 ? (
                <>
                    {/* 상위 선택지 태그 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {reviewTags.map((tag: ReviewTag, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                            >
                                {tag.text} {tag.count}
                            </span>
                        ))}
                    </div>

                    {/* 최신 후기 리스트 */}
                    <div className="space-y-4">
                        {recentReviews.map((review: Review) => (
                            <ProductCard key={review.id} className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                    <Icon name="user" className="text-gray-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <ProductCard.Bold className="text-sm text-gray-900">
                                            {review.reviewerName}
                                        </ProductCard.Bold>
                                        <ProductCard.Contents className="text-xs">
                                            {review.role}·{review.location}·{review.timeAgo}
                                        </ProductCard.Contents>
                                    </div>
                                    <ProductCard.Title className="text-sm text-gray-700">{review.content}</ProductCard.Title>
                                </div>
                            </ProductCard>
                        ))}
                    </div>
                </>
            ) : (
                <p className="text-sm text-gray-500">받은 후기가 없어요.</p>
            )}
        </div>
    );
};

