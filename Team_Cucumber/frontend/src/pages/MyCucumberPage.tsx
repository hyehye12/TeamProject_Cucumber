import { Header, Button, Icon, ProductCard } from "../components";
import { useMemo } from "react";
import { MyPageMenuSection } from "../components";
import {
  mockItems,
  mockUsers,
  dealMenuItems,
  interestMenuItems,
  activityMenuItems,
  settingMenuItems,
  supportMenuItems,
} from "../data";
import { Link } from "react-router-dom";

export const MyCucumberPage = () => {
  const banner = useMemo(() => {
    const index = Math.floor(Math.random() * mockItems.length);
    return mockItems[index];
  }, []);

  const currentUser = mockUsers[0];

  return (
    <div className="bg-gray-100">
      <Header className="m-4 bg-gray-100">
        <Header.Left>
          <Header.Title className="p-4 text-2xl">나의 오이</Header.Title>
        </Header.Left>
        <Header.Right>
          <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
            <Icon name="setting" className="text-2xl" />
          </Button>
        </Header.Right>
      </Header>
      <ProductCard
        className="flex m-4 w-auto h-auto gap-3 py-3 border-b bg-white border-gray-100 hover:shadow-md hover:bg-gray-200 p-4 rounded-xl "
        onClick={() => {
          console.log("go detail");
        }}
      >
        <div className="flex flex-col ml-5">
          <ProductCard.Bold className="text-4xl">
            {banner.title}
          </ProductCard.Bold>
          <ProductCard.Contents className="text-xl mt-2">
            {banner.subtitle}
          </ProductCard.Contents>
          <Button className="bg-gray-200 rounded-4xl p-1 m-4 w-40 hover:bg-gray-200 text-black">
            지금 참여하기
          </Button>
        </div>
        <ProductCard.Image className="items-end w-30 h-30 ml-15">
          <img src={banner.imageurl}></img>
        </ProductCard.Image>
      </ProductCard>
      <ProductCard
        className="flex m-4 w-auto h-auto py-3 border-b bg-white border-gray-100 hover:shadow-md hover:bg-gray-200 p-4 rounded-xl "
        onClick={() => {
          console.log("go detail");
        }}
      >
        <div className="ml-5 flex flex-row">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-200">
            <Icon name="secretUser" className="text-6xl text-gray-400" />
          </div>
          <ProductCard.Bold className="ml-5 mt-5 mr-3 text-4xl">
            {currentUser.nickname}
          </ProductCard.Bold>
          <div className="inline-flex items-center px-2.5 h-8 mt-6 rounded-full bg-orange-50">
            <span className="text-xs font-semibold text-orange-500">
              {currentUser.temperature}℃
            </span>
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <Icon name="right" className="text-6xl text-gray-400" />
        </div>
      </ProductCard>
      <ProductCard className="flex flex-col m-4 w-auto h-auto gap-3 py-3 border-b bg-white border-gray-100 p-4 rounded-xl ">
        <div className="flex flex-row">
          <ProductCard.Bold>서비스</ProductCard.Bold>
        </div>
        <Button className="bg-white hover:bg-gray-200 text-black text-2xl">
          🧺 중고거래
        </Button>
      </ProductCard>
      <ProductCard className="flex flex-row m-4 px-35 w-auto h-auto py-3 border-b bg-white border-gray-100 rounded-xl ">
        <Link to="likelist">
          <Button className="ml-5 bg-white hover:bg-gray-200 text-black text-xl flex flex-col items-center border-r-gray-100">
            <Icon name="likeOutline" />
            관심목록
          </Button>
        </Link>
        <Button className="ml-5 bg-white hover:bg-gray-200 text-black text-xl flex flex-col items-center border-r-gray-100">
          <Icon name="bellOutline" />
          최근 본 글
        </Button>
        <Button className="ml-5 bg-white hover:bg-gray-200 text-black text-xl flex flex-col items-center border-r-gray-100">
          <Icon name="gem" />
          혜택
        </Button>
      </ProductCard>
      <MyPageMenuSection title="나의 거래" items={dealMenuItems} />
      <MyPageMenuSection title="나의 관심" items={interestMenuItems} />
      <MyPageMenuSection title="나의 활동" items={activityMenuItems} />
      <MyPageMenuSection title="설정" items={settingMenuItems} />
      <MyPageMenuSection title="고객지원" items={supportMenuItems} />

      <div className="flex flex-col">
        <Button className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-400 text-xl flex flex-row items-center">
          <p>(주) 오이마켓 사업자 정보</p>
          <Icon name="right" className=" text-gray-400" />
        </Button>
        <p className="text-sm m-4">
          오이마켓은 본 플랫폼을 통한 통신판매의 당사자가 아니며, 해당 거래정보
          및 내용에 대하여 책임을 지지 않습니다.
        </p>
      </div>
    </div>
  );
};
