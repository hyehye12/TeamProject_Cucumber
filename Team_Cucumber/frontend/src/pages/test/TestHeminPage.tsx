// TestHeminPage.tsx
import { useState } from "react";
import { ProductCard, ToggleButton } from "../../components";
import { Icon } from "../../components";
import BottomSheet from "../../components/common/BottomSheet/BottomSheet";
import Button from "../../components/common/Button/Button";

export const TestHeminPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpenDefault = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mockItems = [
    {
      id: "1",
      title: "안녕하세요.물건사라",
      price: "450,000원",
      location: "성수동",
      timeAgo: "5분 전",
      imageUrl: "../../../public/cafe.png",
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
            className="relative flex gap-3 py-3 border-b border-gray-100 hover:shadow-md hover:bg-gray-200 p-4 rounded-lg"
            onClick={() => {
              console.log("상세보기", item.id);
            }}
          >
            {/* 왼쪽 썸네일 */}
            <ProductCard.Image className="w-24 h-24 bg-gray-100">
              <img src={item.imageUrl} className="h-full w-full object-cover" />
            </ProductCard.Image>

            {/* ▶ 오른쪽 영역 전체: 텍스트 + 더보기 버튼 */}
            <div className="flex flex-1">
              {/* 텍스트 영역 */}
              <div className="flex flex-col flex-1  min-w-0 justify-between">
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
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation(); // 카드 onClick 안 타게 막기
                  console.log("더보기 클릭", item.id);
                  // TODO: 여기서 메뉴 열기
                }}
              >
                <Icon name="verticalDots" />
              </button>
            </div>
          </ProductCard>
        ))}
      </div>
      <br />
      {/*판매물품, 관심있을만한 상품 */}
      <div className="px-5">
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
              <div>
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
      <br />
      <br />
      <br />
      <div className="p-4">
        <button
          className="px-4 py-2 rounded-md bg-orange-500 text-white"
          onClick={handleOpenDefault}
        >
          바텀시트 열기
        </button>

        <BottomSheet open={open} onClose={handleClose} className="bg-gray-300">
          <Button className="border-b bg-white text-black hover:bg-gray-300 w-full">
            관심있음
          </Button>
          <Button className="mb-3 bg-white text-black hover:bg-gray-300 w-full">
            관심없음
          </Button>
          <Button className="border-b bg-white text-black hover:bg-gray-300 w-full">
            이 글 숨기기
          </Button>
          <Button className="border-b bg-white text-black hover:bg-gray-300 w-full">
            게시글 노출 기준
          </Button>
          <Button className="mb-3 bg-white text-red-500 hover:bg-gray-300 w-full">
            신고하기
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-300 w-full"
            onClick={handleClose}
          >
            닫기
          </Button>
        </BottomSheet>
      </div>
    </div>
  );
};
