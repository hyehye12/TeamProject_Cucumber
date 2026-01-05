import { ProductCard } from "../../components/common";
import type { Product } from "../../types/mypage";

interface ProductListItemProps {
    product: Product;
    showBadge?: boolean;
    badgeStatus?: "on-sale" | "reserved" | "sold-out";
}

export const ProductListItem = ({ product, showBadge = false, badgeStatus }: ProductListItemProps) => {
    return (
        <ProductCard className="border-b border-gray-100 px-4">
            <ProductCard.Image className="w-24 h-24 shrink-0">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </ProductCard.Image>
            <div className="flex flex-col flex-1 min-w-0 justify-between py-1">
                <div>
                    <ProductCard.Title className="text-base">
                        {product.title}
                    </ProductCard.Title>
                    <ProductCard.Contents className="mt-1">
                        {product.location} · {product.timeAgo}
                    </ProductCard.Contents>
                    {showBadge && badgeStatus ? (
                        <div className="flex items-center gap-1 mt-1">
                            <ProductCard.Badge status={badgeStatus} />
                            <ProductCard.Bold className="text-base">
                                {product.price.toLocaleString()}원
                            </ProductCard.Bold>
                        </div>
                    ) : (
                        <ProductCard.Bold className="mt-1 text-base">
                            {product.price.toLocaleString()}원
                        </ProductCard.Bold>
                    )}
                </div>
                <div className="flex justify-end">
                    <ProductCard.Stat
                        likeCount={product.likeCount}
                        chatCount={product.chatCount}
                    />
                </div>
            </div>
        </ProductCard>
    );
};

