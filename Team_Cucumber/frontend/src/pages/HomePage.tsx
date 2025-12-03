import { Header, ProductCard } from "@/components";
import { Icon } from "@/components";
import { Button } from "@/components";
import Modal from "@/components/common/Modal/Modal";
import BottomSheet from "@/components/common/BottomSheet/BottomSheet";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // location.pathname: 현재 브라우저 주소창 경로
  const isActive = (path: string) => location.pathname === path;

  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isBottomSheetOpen, setisBottomSheetOpen] = useState(false);

  const mockItems = [
    {
      id: "1",
      title: "삼성 김치플러스 뚜껑형 김치냉장고 221L",
      price: "250,000",
      location: "잠실동",
      timeAgo: "2시간 전",
      distance: "2.2km",
      imageUrl: "../../../public/cafe.png",
      chats: 3,
      likes: 11,
    },
    {
      id: "2",
      title: "대우 소형 냉장고",
      price: "나눔",
      location: "일원동",
      timeAgo: "44초 전",
      imageUrl: "../../../public/cafe.png",
      chats: 0,
      likes: 0,
    },
    {
      id: "3",
      title: "안녕하세요.물건사라",
      price: "450,000",
      location: "성수동",
      timeAgo: "5분 전",
      imageUrl: "../../../public/cafe.png",
      chats: 3,
      likes: 10,
    },
    {
      id: "4",
      title: "안녕하세요.물건사라",
      price: "450,000",
      location: "성수동",
      timeAgo: "5분 전",
      imageUrl: "../../../public/cafe.png",
      chats: 3,
      likes: 10,
    },
    {
      id: "5",
      title: "안녕하세요.물건사라",
      price: "450,000",
      location: "성수동",
      timeAgo: "5분 전",
      imageUrl: "../../../public/cafe.png",
      chats: 3,
      likes: 10,
    },
    {
      id: "6",
      title: "안녕하세요.물건사라",
      price: "450,000",
      location: "성수동",
      timeAgo: "5분 전",
      imageUrl: "../../../public/cafe.png",
      chats: 3,
      likes: 10,
    },
  ];

  const categories = [
    { id: "all", label: "전체", active: true },
    { id: "trade", label: "중고거래" },
    { id: "new", label: "방금 전" },
  ];

  const myItemsMenuItem = [
    {
      id: "find-price",
      icon: "🔍",
      iconBg: "bg-orange-100",
      label: "내 물건 가격 찾기",
      onClick: () => console.log("내 물건 가격 찾기"),
    },
    {
      id: "sell",
      icon: "🛒",
      iconBg: "bg-orange-100",
      label: "내 물건 팔기",
      onClick: () => console.log("내 물건 팔기"),
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header>
        <Header.Left>
          <h1 className="text-2xl font-bold">역삼1동</h1>
          <span>
            <Icon name="down" className="text-2xl cursor-pointer" />
          </span>
        </Header.Left>
        <Header.Right>
          <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
            <Icon
              name="search"
              className="text-2xl"
              onClick={() => navigate("/search")}
            />
          </Button>
          <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
            <Icon name="bellOutline" className="text-2xl" />
            <span className="absolute top-2 right-14 w-2 h-2 bg-orange-500 rounded-full"></span>
          </Button>
          <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
            <Icon name="hamberger" className="text-2xl" />
          </Button>
        </Header.Right>
      </Header>

      <div className="flex gap-2 px-4 py-3 overflow-x-auto border-b border-gray-100">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors cursor-pointer ${
              cat.active ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <main className="flex-1 overflow-y-auto">
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
                  setisBottomSheetOpen(true);
                }}
              >
                <Icon
                  name="verticalDots"
                  onClick={() => setisBottomSheetOpen(true)}
                  className="cursor-pointer"
                />
              </button>
            </div>
          </ProductCard>
        ))}
      </main>

      <Button
        className="fixed bottom-25 rounded-full shadow-lg right-7 flex"
        onClick={() => setIsWriteModalOpen(true)}
      >
        <Icon name="plus" className="text-xl" />
        글쓰기
      </Button>

      {/* 글쓰기 모달 */}
      <Modal
        open={isWriteModalOpen}
        className="items-end justify-end pr-7 pb-50"
      >
        <Modal.Overlay onClick={() => setIsWriteModalOpen(false)} />
        <Modal.Content className="rounded-3xl p-4 w-auto">
          <div>
            {myItemsMenuItem.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  item.onClick();
                  setIsWriteModalOpen(false);
                }}
                className="flex items-center cursor-pointer"
              >
                <div className="w-12 h-12 ${item.iconBg} flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-lg ">{item.label}</span>
              </button>
            ))}
          </div>
          {/* 모달 닫기 버튼 */}
          <button
            onClick={() => setIsWriteModalOpen(false)}
            className="absolute bg-white rounded-full w-20 h-20 flex justify-center items-center cursor-pointer right-7 bottom-25"
          >
            <Icon name="close" className="text-4xl" />
          </button>
        </Modal.Content>
      </Modal>

      {/* 바텀시트 */}
      <BottomSheet
        open={isBottomSheetOpen}
        onClose={() => setisBottomSheetOpen(false)}
        className="bg-gray-100"
      >
        <Button className="rounded-b-none border-b-2 border-b-gray-100 bg-white text-black hover:bg-gray-300 w-full flex items-center gap-2">
          <Icon name="circlePlus" className="text-xl" /> 관심있음
        </Button>
        <Button className="rounded-t-none mb-3 bg-white text-black hover:bg-gray-300 w-full flex items-center gap-2">
          <Icon name="circleMinus" className="text-xl" />
          관심없음
        </Button>
        <Button className="rounded-b-none border-b-2 border-b-gray-100 bg-white text-black hover:bg-gray-300 w-full flex">
          <Icon name="eyeOff" className="text-xl pr-2" />이 글 숨기기
        </Button>
        <Button className="rounded-none border-b-2 border-b-gray-100 bg-white text-black hover:bg-gray-300 w-full flex">
          <Icon name="questionCircle" className="text-xl pr-2" />
          게시글 노출 기준
        </Button>
        <Button className="rounded-t-none mb-3 bg-white text-red-500 hover:bg-gray-300 w-full flex">
          <Icon name="flagOutline" className="text-xl pr-2" />
          신고하기
        </Button>
        <Button
          className="bg-white text-black hover:bg-gray-300 w-full"
          onClick={() => setisBottomSheetOpen(false)}
        >
          닫기
        </Button>
      </BottomSheet>

      <footer className="flex justify-around border-t border-gray-200">
        {/* 홈 버튼 */}
        <Button
          className="bg-transparent text-gray-400 rounded-full hover:bg-transparent flex flex-col items-center"
          onClick={() => navigate("/home")}
        >
          <Icon
            name="homeFill"
            className={`text-3xl ${
              isActive("/home") ? "text-black" : "text-gray-400"
            }`}
          />
          홈
        </Button>

        {/* 동네지도 버튼 */}
        <Button
          className="bg-transparent text-gray-400 rounded-full hover:bg-transparent flex  flex-col items-center"
          onClick={() => navigate("/")}
        >
          <Icon
            name="marker"
            className={`text-3xl ${
              isActive("/") ? "text-black" : "text-gray-400"
            }`}
          />
          동네지도
        </Button>

        {/* 채팅 버튼 */}
        <Button
          className="bg-transparent text-gray-400 rounded-full hover:bg-transparent flex  flex-col items-center"
          onClick={() => navigate("/")}
        >
          <Icon name="chat" className="text-3xl" /> 채팅
        </Button>

        {/* 나의 당근 버튼 */}
        <Button
          className="bg-transparent text-gray-400 rounded-full hover:bg-transparent flex  flex-col items-center"
          onClick={() => navigate("/")}
        >
          <Icon name="user" className="text-3xl" /> 나의 당근
        </Button>
      </footer>
    </div>
  );
};

export default HomePage;
