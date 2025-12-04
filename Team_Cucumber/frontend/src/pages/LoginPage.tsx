import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon } from "@/components";
import { useAuthStore } from "@/stores/useAuthStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [step, setStep] = useState<"phone" | "verification">("phone");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [timer, setTimer] = useState(300);
  const [mockCode, setMockCode] = useState("");

  // 타이머 기능 (인증번호 단계에서 5분 카운트다운)
  useEffect(() => {
    if (step === "verification" && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  // 300초 → "05:00" 형태로 변환
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    // padStart(2, "0"): 한 자리 숫자면 앞에 0 추가 (5 → "05")
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // 인증번호 요청 함수
  const handleRequestCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setMockCode(code);
    console.log("📱 인증번호:", code);
    alert(`[개발용] 인증번호: ${code}`);
    setStep("verification");
    setTimer(300); // 타이머를 5분(300초)으로 리셋
  };

  // 인증번호 확인 함수
  const handleVerify = () => {
    if (verificationCode === mockCode) {
      login({
        id: Date.now().toString(),
        nickname: "사용자",
        phone: phone,
        location: "서초동",
      });
      navigate("/home");
    } else {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  // 인증번호 재전송 함수
  const handleResend = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setMockCode(code);
    console.log("📱 재전송 인증번호:", code);
    alert(`[개발용] 재전송 인증번호: ${code}`);
    setTimer(300);
    setVerificationCode(""); // 입력했던 인증번호 초기화
  };

  // 키패드 클릭 처리 함수
  const handleKeypadClick = (key: string | number) => {
    if (key === "⌫") {
      if (step === "phone") setPhone(phone.slice(0, -1));
      else setVerificationCode(verificationCode.slice(0, -1));
    }
    // 빈 칸(empty) 버튼이 아닌 경우 (숫자 버튼 클릭)
    else if (key !== "") {
      // 1단계: 휴대폰 번호 입력
      if (step === "phone" && phone.length < 11) setPhone(phone + key);
      // 2단계: 인증번호 입력
      else if (step === "verification" && verificationCode.length < 6)
        setVerificationCode(verificationCode + key);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* 헤더 */}
      <div className="flex items-center px-5 py-4">
        <button
          onClick={() => (step === "phone" ? navigate(-1) : setStep("phone"))}
          className="p-2"
        >
          <Icon name="left" className="text-2xl text-black" />
        </button>
      </div>

      {/* 콘텐츠 */}
      <div className="flex-1 px-6 pt-8">
        <h1 className="text-2xl font-bold mb-3 text-black">
          {step === "phone"
            ? "휴대폰 번호를 입력해주세요"
            : "인증번호를 입력해 주세요"}
        </h1>

        {step === "phone" ? (
          <>
            {/* 휴대폰 입력 */}
            <div className="flex items-center border-2 border-gray-300 rounded-xl px-4 py-4 mt-8 focus-within:border-orange-500">
              <span className="mr-3 text-lg">🇰🇷 +82</span>
              <input
                type="tel"
                placeholder="000 0000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent text-lg outline-none text-black placeholder:text-gray-400"
                maxLength={11}
              />
            </div>

            <p className="text-gray-500 text-sm my-6 text-center">
              휴대폰 번호가 변경되었나요?{" "}
              <span className="text-black underline cursor-pointer">
                내 계정찾기
              </span>
            </p>
          </>
        ) : (
          <>
            {/* 휴대폰 번호 표시 */}
            <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-4 mt-8 bg-gray-50">
              <span className="mr-3 text-gray-500">🇰🇷 +82</span>
              <span className="text-gray-500">{phone}</span>
            </div>

            {/* 인증번호 입력 */}
            <div className="flex items-center border-2 border-gray-300 rounded-xl px-4 py-4 mt-4 focus-within:border-black">
              <input
                type="tel"
                placeholder="000000"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="flex-1 bg-transparent text-lg outline-none text-black placeholder:text-gray-400"
                maxLength={6}
              />
              <span className="ml-3 font-medium">{formatTime(timer)}</span>
            </div>

            <p className="text-gray-500 text-sm my-6 text-center">
              인증번호가 오지 않나요?{" "}
              <button
                onClick={handleResend}
                className="text-black underline cursor-pointer"
              >
                재전송
              </button>
            </p>
          </>
        )}
      </div>

      {/* 하단 버튼 */}
      <div className="px-5 pb-5">
        <Button
          className={`w-full py-4 rounded-xl text-lg font-semibold transition-colors ${
            (step === "phone" && phone.length >= 10) ||
            (step === "verification" && verificationCode.length === 6)
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={step === "phone" ? handleRequestCode : handleVerify}
          disabled={
            (step === "phone" && phone.length < 10) ||
            (step === "verification" && verificationCode.length !== 6)
          }
        >
          {step === "phone" ? "확인" : "완료"}
        </Button>
      </div>

      {/* 하단 키패드 */}
      <div className="bg-gray-100 p-4 grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "⌫"].map((key, idx) => (
          <button
            key={idx}
            className={`py-5 rounded-xl text-2xl font-semibold transition-colors ${
              key === ""
                ? "bg-transparent cursor-default"
                : "bg-white active:bg-gray-200 text-black"
            }`}
            onClick={() => handleKeypadClick(key)}
            disabled={key === ""}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
