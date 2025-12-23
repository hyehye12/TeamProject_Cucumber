import { Icon, ProductCard, Button } from "../../components/common";
import type { Product } from "../../types/mypage";

interface ViewedProductsSectionProps {
    title: string;
    description: string;
    products: Product[];
}

export const ViewedProductsSection = ({ title, description, products }: ViewedProductsSectionProps) => {
    return (
        <div className="bg-white m-4 p-6 rounded-lg shadow-sm border border-gray-100">
            <ProductCard.Bold className="text-lg mb-2">{title}</ProductCard.Bold>
            <ProductCard.Contents className="text-sm mb-4">{description}</ProductCard.Contents>
            <div className="flex gap-4 overflow-x-auto pb-2">
                {products.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-32">
                        <ProductCard.Image className="relative w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </ProductCard.Image>
                        <ProductCard.Title className="text-xs mt-2 line-clamp-2 text-gray-700">
                            {product.title}
                        </ProductCard.Title>
                        <ProductCard.Bold className="text-sm mt-1">{product.price.toLocaleString()}원</ProductCard.Bold>
                    </div>
                ))}
            </div>
            <Button className="bg-transparent hover:bg-transparent text-sm text-gray-500 mt-4 flex items-center gap-1 p-0">
                물품 더보기 <Icon name="right" className="text-xs" />
            </Button>
        </div>
    );
};

