import { productMockItems } from "../../../data";
import { Header, Icon, ProductCard, Button } from "../../common";

export const LikeList = () => {
  return (
    <div>
      <Header>
        <Header.Left>
          <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
            <Icon name="left" className="text-3xl" />
          </Button>
          <Header.Title className="text-2xl">관심 목록</Header.Title>
        </Header.Left>
      </Header>
      <div className="mt-5 bg-gray-200">
        {productMockItems.map((item) => (
          <ProductCard
            key={item.id}
            className="bg-white relative flex gap-3 py-3 border-b border-gray-100 hover:shadow-md hover:bg-gray-200 p-4"
            onClick={() => {
              console.log("상세보기", item.id);
            }}
          >
            {/* 왼쪽 썸네일 */}
            <ProductCard.Image className="w-36 h-36 bg-gray-100">
              <img src={item.imageUrl} className="h-full w-full object-cover" />
            </ProductCard.Image>

            {/* ▶ 오른쪽 영역 전체: 텍스트 + 더보기 버튼 */}
            <div className="flex flex-1">
              {/* 텍스트 영역 */}
              <div className="flex flex-col flex-1  min-w-0 justify-between">
                <div className="space-y-1">
                  <ProductCard.Title className="text-xl text-gray-900">
                    {item.title}
                  </ProductCard.Title>

                  <ProductCard.Contents className="text-base text-gray-500">
                    {item.location} · {item.timeAgo}
                  </ProductCard.Contents>

                  <ProductCard.Bold className="text-lg text-gray-900">
                    {item.price}
                  </ProductCard.Bold>

                  <ProductCard.Stat
                    className="mt-4 flex justify-end-safe gap-2 text-base text-gray-500"
                    chatCount={item.chats}
                    likeCount={item.likes}
                  />
                </div>
              </div>
              {/* 오른쪽 하트 버튼 */}
              <Icon
                name="likeFill"
                className="absolute top-4 right-4 text-green-400 text-2xl active:text-white"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              />
            </div>
          </ProductCard>
        ))}
        <div className="mt-5">
          <ProductCard className="relative flex gap-3 py-3 bg-white p-4">
            <p className="text-2xl">관심 있을 만한 상품</p>
          </ProductCard>
        </div>
      </div>
    </div>
  );
};
