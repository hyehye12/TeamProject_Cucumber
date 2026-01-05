import { Icon, ProductCard } from "../../components/common";
import type { Product } from "../../types/mypage";

interface LikedProductItemProps {
    item: Product;
    onItemClick: (id: number) => void;
    onLikeClick: (event: React.MouseEvent) => void;
}

const formatPrice = (price: number): string => {
    return `${price.toLocaleString()}원`;
};

export const LikedProductItem = ({ item, onItemClick, onLikeClick }: LikedProductItemProps) => {
    return (
        <ProductCard
            className="bg-white relative flex gap-3 py-3 border-b border-gray-100 hover:shadow-md hover:bg-gray-100 p-4"
            onClick={() => onItemClick(item.id)}
        >
            <ProductCard.Image className="w-36 h-36 bg-gray-100 rounded-xl overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                />
            </ProductCard.Image>

            <div className="flex flex-1 relative">
                <div className="flex flex-col flex-1 min-w-0 justify-between">
                    <div className="space-y-1">
                        <ProductCard.Title className="text-xl text-gray-900">
                            {item.title}
                        </ProductCard.Title>

                        <ProductCard.Contents className="text-base text-gray-500">
                            {item.location} · {item.timeAgo}
                        </ProductCard.Contents>

                        <ProductCard.Bold className="text-lg text-gray-900">
                            {formatPrice(item.price)}
                        </ProductCard.Bold>

                        <ProductCard.Stat
                            className="mt-4 flex justify-end gap-2 text-base text-gray-500"
                            chatCount={item.chatCount}
                            likeCount={item.likeCount}
                        />
                    </div>
                </div>
                <Icon
                    name="likeFill"
                    className="absolute top-0 right-0 text-orange-400 text-2xl"
                    onClick={onLikeClick}
                />
            </div>
        </ProductCard>
    );
};

