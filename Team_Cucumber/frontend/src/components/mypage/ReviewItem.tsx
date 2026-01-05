import { useNavigate } from "react-router-dom";
import { Icon, ProductCard, Button } from "../../components/common";
import type { Review } from "../../types/mypage";

interface ReviewItemProps {
    review: Review;
}

export const ReviewItem = ({ review }: ReviewItemProps) => {
    const navigate = useNavigate();

    return (
        <ProductCard
            key={review.id}
            className="pb-4 border-b border-black"
        >
            <Button
                onClick={() => navigate("/mypage/profile")}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0 hover:bg-gray-300 transition-colors p-0"
            >
                <Icon name="user" className="text-gray-400" />
            </Button>
            <div className="flex-1">
                <div className="flex flex-col mb-3">
                    <Button
                        onClick={() => navigate("/mypage/profile")}
                        className="bg-transparent hover:bg-transparent text-left hover:opacity-70 transition-opacity p-0"
                    >
                        <ProductCard.Bold className="text-sm text-gray-900 mb-1">
                            {review.reviewerName}
                        </ProductCard.Bold>
                    </Button>
                    <ProductCard.Contents className="text-xs">
                        {review.role}·{review.location}·{review.timeAgo}
                    </ProductCard.Contents>
                </div>
                <ProductCard.Title className="text-base text-gray-700">
                    {review.content}
                </ProductCard.Title>
            </div>
        </ProductCard>
    );
};

