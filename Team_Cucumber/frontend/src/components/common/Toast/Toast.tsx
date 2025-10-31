import { useEffect } from "react";
import { useToastStore } from "../../../stores";
import { TOAST_DEFAULT_DELAY } from "../../../constants";

interface ToastProps {
  delay?: number;
  className?: string;
}

export const Toast = ({
  delay = TOAST_DEFAULT_DELAY,
  className: _className,
}: ToastProps) => {
  const { toast, isOpen, setIsOpen, clearToast } = useToastStore();

  // 적용 클래스에 따른 적용 요소가 달라져야 함 주의
  const className = ["absolute bottom-4 w-full", _className].join(" ");

  // toast 객체의 값 구조 분해
  const { msg } = toast;

  useEffect(() => {
    if (!isOpen) return;

    // 화면에 보이는 시간 설정
    setTimeout(() => {
      clearToast(); // toast 초기화
      setIsOpen(false); // Toast 닫기
    }, delay); // delay 초 후 닫기
  }, [isOpen]);

  // isOpen이 false 이면 Toast가 보이지 않음
  if (!isOpen) return null;

  return (
    // wrapper
    <div className={className}>
      {/* container */}
      <div className="px-10">
        {/* toast */}
        <div className="px-4 py-2 bg-black text-white rounded-md">
          {/* 텍스트 부분 */}
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
};
