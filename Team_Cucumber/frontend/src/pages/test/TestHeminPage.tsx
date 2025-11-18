// TestHeminPage.tsx
import { useState } from "react";
import { ProductCard, ToggleButton } from "../../components";
import { Icon } from "../../components";

export const TestHeminPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const mockItems = [
    {
      id: "1",
      title: "아이패드 에어 4세대 팝니다",
      price: "450,000원",
      location: "성수동",
      timeAgo: "5분 전",
      imageUrl: "/images/sample-ipad.jpg",
      chats: 3,
      likes: 10,
    },
  ];

  return (
    <div>
      안녕하세요.
      <ToggleButton
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        className="w-20 h-11"
        knobClassName="w-10 h-10 t-0"
        knobOnClass="translate-x-9"
        //knobOnClass는 className 넓이 - 높이를 x 뒤에 붙여주면 됩니다.
      />
      <br />
      <br />
      <br />
      {/*메인에 있는 기본 상품 카드*/}
      <div className="px-4">
        {mockItems.map((item) => (
          <ProductCard
            key={item.id}
            className="flex gap-3 py-3 border-b border-gray-100 hover:shadow-md hover:bg-gray-200 p-4 rounded-lg"
            onClick={() => {
              console.log("상세보기", item.id);
            }}
          >
            {/* 왼쪽 썸네일 */}
            <ProductCard.Image className="w-24 h-24 bg-gray-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </ProductCard.Image>

            {/* ▶ 오른쪽 영역 전체: 텍스트 + 더보기 버튼 */}
            <div className="flex flex-1">
              {/* 텍스트 영역 */}
              <div className="flex flex-col flex-1 justify-between">
                <div className="space-y-1">
                  <ProductCard.Title className="text-sm text-gray-900">
                    {item.title}
                  </ProductCard.Title>

                  <ProductCard.Bold className="text-sm text-gray-900">
                    {item.price}
                  </ProductCard.Bold>

                  <ProductCard.Contents className="text-xs text-gray-500">
                    {item.location} · {item.timeAgo}
                  </ProductCard.Contents>

                  <ProductCard.Stat
                    className="mt-4 flex justify-end-safe gap-2 text-[11px] text-gray-500"
                    chatCount={item.chats}
                    likeCount={item.likes}
                  />
                </div>
              </div>

              {/* 오른쪽 세로 점(⋮) 버튼 */}
              <button
                type="button"
                className="ml-2 self-start px-2 text-gray-400 hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation(); // 카드 onClick 안 타게 막기
                  console.log("더보기 클릭", item.id);
                  // TODO: 여기서 메뉴 열기
                }}
              >
                <span className="text-xl leading-none">⋮</span>
                {/* Icon 컴포넌트 쓰고 싶으면 여기다가 <Icon name="moreVertical" ... /> */}
              </button>
            </div>
          </ProductCard>
        ))}
      </div>
      <br />
      {/*판매물품, 관심있을만한 상품 */}
      <div>
        {mockItems.map((item) => (
          <ProductCard
            key={item.id}
            className="flex flex-col w-36 h-56 items-center gap-3 py-3 border-b border-gray-100 hover:shadow-md hover:bg-gray-200 p-4 rounded-lg "
            onClick={() => {
              console.log("go detail", item.id);
            }}
          >
            {/* 위쪽 썸네일 */}
            <ProductCard.Image className="w-28 h-28 bg-gray-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </ProductCard.Image>

            {/* 아래쪽 텍스트 영역 */}
            <div className="flex flex-col flex-1 justify-between">
              <div className="space-y-1">
                <ProductCard.Title className="text-sm text-gray-900">
                  {item.title}
                </ProductCard.Title>

                <ProductCard.Bold className="text-sm text-gray-900">
                  {item.price}
                </ProductCard.Bold>

                <ProductCard.Contents className="text-xs text-gray-500">
                  {item.location}
                </ProductCard.Contents>
              </div>
            </div>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
