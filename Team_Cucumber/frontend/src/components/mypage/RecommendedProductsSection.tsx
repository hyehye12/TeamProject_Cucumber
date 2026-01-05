import { Button, Icon, ProductCard } from "../../components/common";
import type { Product } from "../../types/mypage";

interface RecommendedProductsSectionProps {
    products: Product[];
    onProductClick: (id: number) => void;
    onLikeClick: (event: React.MouseEvent) => void;
}

const formatPrice = (price: number): string => {
    return `${price.toLocaleString()}원`;
};

export const RecommendedProductsSection = ({ 
    products, 
    onProductClick, 
    onLikeClick 
}: RecommendedProductsSectionProps) => {
    if (products.length === 0) return null;

    return (
        <div className="mt-5 bg-white px-4 py-5">
            <ProductCard.Bold className="text-2xl text-gray-900 mb-4">
                관심 있을 만한 피규어/인형 상품
            </ProductCard.Bold>
            <div className="grid grid-cols-3 gap-3">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col cursor-pointer hover:opacity-80"
                        onClick={() => onProductClick(product.id)}
                    >
                        <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-2">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full w-full object-cover"
                            />
                            <Icon
                                name="likeOutline"
                                className="absolute top-2 right-2 text-white text-xl drop-shadow-md"
                                onClick={onLikeClick}
                            />
                        </div>
                        <ProductCard.Title className="text-sm text-gray-900 mb-1 line-clamp-2">
                            {product.title}
                        </ProductCard.Title>
                        <ProductCard.Bold className="text-sm text-gray-900">
                            {formatPrice(product.price)}
                        </ProductCard.Bold>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-6">
                <Button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 flex items-center gap-2">
                    <Icon name="circlePlus" className="text-base" />
                    <span>물품 더보기 1/4</span>
                </Button>
            </div>
        </div>
    );
};

