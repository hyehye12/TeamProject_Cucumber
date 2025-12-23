import { useNavigate } from "react-router-dom";
import { Icon, ProductCard, Button } from "../../components/common";
import type { Product } from "../../types/mypage";

interface SalesProductsCardProps {
    totalCount: number;
    products: Product[];
}

export const SalesProductsCard = ({ totalCount, products }: SalesProductsCardProps) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <Button
                onClick={() => navigate("/mypage/sales-history")}
                className="w-full bg-transparent hover:bg-transparent flex items-center justify-between mb-4 text-left p-0"
            >
                <ProductCard.Bold className="text-lg text-gray-900">판매물품 {totalCount}</ProductCard.Bold>
                <Icon name="right" className="text-gray-400" />
            </Button>
            {products.length > 0 ? (
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-32"
                            onClick={(e) => {
                                e.stopPropagation();
                                // 상품 상세 페이지로 이동
                            }}
                        >
                            <ProductCard.Image className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 mb-2">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                            </ProductCard.Image>
                            <ProductCard.Title className="text-xs text-gray-700 line-clamp-2 mb-1">
                                {product.title}
                            </ProductCard.Title>
                            <ProductCard.Bold className="text-sm text-gray-900 mb-1">
                                {product.price.toLocaleString()}원
                            </ProductCard.Bold>
                            <ProductCard.Contents className="text-xs">
                                {product.location}
                            </ProductCard.Contents>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-500">판매중인 게시글이 없어요.</p>
            )}
        </div>
    );
};

