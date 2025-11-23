import { Header } from "@/components";
import { Button } from "@/components";
import { Icon } from "@/components";
import { useNavigate } from "react-router-dom";

const LocationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <Header>
        <Header.Left>
          <Button
            className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent"
            onClick={() => navigate(-1)}
          >
            <Icon name="left" className="text-2xl" />
          </Button>
          <input
            placeholder="동명(읍, 면)으로 검색(ex. 서초동)"
            className="bg-gray-300 p-2 w-[85%] rounded-md"
          />
        </Header.Left>
      </Header>

      <Button className="w-[90%] text-xl mx-auto mt-5">🎯 내 위치 찾기</Button>

      <div className="flex flex-1 flex-col items-center mt-20 text-xl">
        <p className="text-gray-500 text-center mb-5">
          현재 위치로 동네를 받아오지 못했어요.
          <br />내 동네 이름으로 검색해보세요!
        </p>
        <button className="text-orange-500 font-bold cursor-pointer">
          내 동네 이름 검색하기
        </button>
        {/* 버튼 클릭시 충남 당진시 신평면.. 동 관련 화면 나타남 */}
      </div>
    </div>
  );
};

export default LocationPage;
