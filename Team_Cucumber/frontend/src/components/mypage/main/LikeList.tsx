import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { likedProducts, allProducts } from "../../../data/mypage";
import { getRecommendedProducts } from "../../../utils/RecommendationCalculation";
import { Header, Button, Icon, ProductCard } from "../../common";
import { LikedProductItem } from "../LikedProductItem";
import { RecommendedProductsSection } from "../RecommendedProductsSection";

export const LikeList = () => {
    const navigate = useNavigate();

    // 찜한 상품 목록
    const likedItems = useMemo(() => likedProducts, []);

    // 추천 상품 계산
    const recommendedProducts = useMemo(
        () => getRecommendedProducts(allProducts, likedItems, 6),
        [likedItems]
    );

    // 찜한 상품이 없는 경우 빈 상태 화면
    if (likedItems.length === 0) {
        return (
            <div className="flex flex-col h-screen">
                <Header>
                    <Header.Left>
                        <Button
                            className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent"
                            onClick={() => navigate(-1)}
                        >
                            <Icon name="left" className="text-3xl" />
                        </Button>
                        <Header.Title className="text-2xl">관심목록</Header.Title>
                    </Header.Left>
                </Header>
                <div className="flex-1 flex flex-col items-center justify-center px-4">
                    <ProductCard.Title className="text-xl text-gray-900 mb-2 text-center">
                        관심 게시글이 없어요.
                    </ProductCard.Title>
                    <ProductCard.Contents className="text-base mb-8 text-center">
                        우리 동네에 올라온 글을 탐색해 보세요!
                    </ProductCard.Contents>
                    <Button
                        className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg text-base hover:bg-gray-200"
                        onClick={() => navigate("/home")}
                    >
                        홈으로 가기
                    </Button>
                </div>
            </div>
        );
    }

    const handleItemClick = (id: number) => {
        console.log("상세보기", id);
    };

    const handleLikeClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <div className="flex flex-col h-screen">
            <Header>
                <Header.Left>
                    <Button
                        className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent"
                        onClick={() => navigate(-1)}
                    >
                        <Icon name="left" className="text-3xl" />
                    </Button>
                    <Header.Title className="text-2xl">관심목록</Header.Title>
                </Header.Left>
            </Header>

            <div className="flex-1 overflow-y-auto bg-gray-50">
                <div className="bg-white">
                    {likedItems.map((item) => (
                        <LikedProductItem
                            key={item.id}
                            item={item}
                            onItemClick={handleItemClick}
                            onLikeClick={handleLikeClick}
                        />
                    ))}
                </div>

                <RecommendedProductsSection
                    products={recommendedProducts}
                    onProductClick={handleItemClick}
                    onLikeClick={handleLikeClick}
                />
            </div>
        </div>
    );
};
