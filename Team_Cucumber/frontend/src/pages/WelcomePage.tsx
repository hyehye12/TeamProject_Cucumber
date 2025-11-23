import logo from "@/assets/logo.png";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
import useScrollLock from "@/hooks/useScrollLock";

const WelcomePage = () => {
  // useScrollLock();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col text-center items-center min-h-screen">
      {/* 상단 콘텐츠 */}
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={logo} alt="오이 로고" className="w-50 h-50" />
        <h1 className="text-3xl font-extrabold">오늘의 이웃 오이</h1>
        <div className="text-xl">
          <p className="mt-5">동네라서 가능한 모든것</p>
          <p>지금 내 동네를 선택하고 시작해보세요!</p>
        </div>
      </div>

      <div className="w-full mt-auto">
        <Button
          className="w-[90%] text-xl p-5"
          onClick={() => {
            navigate("/signup/location");
          }}
        >
          시작하기
        </Button>
        <p className="text-gray-500 mt-5">
          이미 계정이 있나요?{" "}
          <span
            className="text-orange-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            로그인
          </span>
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
