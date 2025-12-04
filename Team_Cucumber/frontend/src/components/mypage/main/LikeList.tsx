import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { likedProducts, allProducts } from "../../../data/mypage";
import { getRecommendedProducts } from "../../../utils/RecommendationCalculation";
import { Header, Icon, ProductCard, Button } from "../../common";

// 가격 포맷팅 함수
const formatPrice = (price: number): string => {
  return `${price.toLocaleString()}원`;
};

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
          <p className="text-xl text-gray-900 mb-2 text-center">
            관심 게시글이 없어요.
          </p>
          <p className="text-base text-gray-500 mb-8 text-center">
            우리 동네에 올라온 글을 탐색해 보세요!
          </p>
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

  // 찜한 상품이 있는 경우
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
        {/* 찜한 상품 목록 */}
        <div className="bg-white">
          {likedItems.map((item) => (
            <ProductCard
              key={item.id}
              className="bg-white relative flex gap-3 py-3 border-b border-gray-100 hover:shadow-md hover:bg-gray-100 p-4"
              onClick={() => {
                console.log("상세보기", item.id);
              }}
            >
              {/* 왼쪽 썸네일 */}
              <ProductCard.Image className="w-36 h-36 bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </ProductCard.Image>

              {/* 오른쪽 영역 전체: 텍스트 + 하트 버튼 */}
              <div className="flex flex-1 relative">
                {/* 텍스트 영역 */}
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
                {/* 오른쪽 하트 버튼 */}
                <Icon
                  name="likeFill"
                  className="absolute top-0 right-0 text-orange-400 text-2xl"
                  onClick={(event) => {
                    event.stopPropagation();
                    console.log("찜하기 취소", item.id);
                  }}
                />
              </div>
            </ProductCard>
          ))}
        </div>

        {/* 추천 상품 섹션 */}
        {recommendedProducts.length > 0 && (
          <div className="mt-5 bg-white px-4 py-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              관심 있을 만한 피규어/인형 상품
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col cursor-pointer hover:opacity-80"
                  onClick={() => {
                    console.log("상세보기", product.id);
                  }}
                >
                  {/* 이미지 */}
                  <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                    {/* 하트 아이콘 */}
                    <Icon
                      name="likeOutline"
                      className="absolute top-2 right-2 text-white text-xl drop-shadow-md"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    />
                  </div>
                  {/* 제목 */}
                  <ProductCard.Title className="text-sm text-gray-900 mb-1 line-clamp-2">
                    {product.title}
                  </ProductCard.Title>
                  {/* 가격 */}
                  <ProductCard.Bold className="text-sm text-gray-900">
                    {formatPrice(product.price)}
                  </ProductCard.Bold>
                </div>
              ))}
            </div>
            {/* 더보기 버튼 */}
            <div className="flex items-center justify-center mt-6">
              <Button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 flex items-center gap-2">
                <Icon name="circlePlus" className="text-base" />
                <span>물품 더보기 1/4</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
