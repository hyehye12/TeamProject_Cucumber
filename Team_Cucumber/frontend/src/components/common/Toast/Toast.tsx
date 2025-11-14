import { useEffect } from "react";
import { useToastStore } from "../../../stores";
import { TOAST_DEFAULT_DURATION } from "../../../constants";
import { twMerge } from "tailwind-merge";

interface ToastProps {
  duration?: number;
  className?: string;
}

export const Toast = ({
  duration = TOAST_DEFAULT_DURATION,
  className: _className,
}: ToastProps) => {
  const { toast, isOpen, setIsOpen, clearToast } = useToastStore();

  // 적용 클래스에 따른 적용 요소가 달라져야 함 주의
  const className = twMerge(
    "px-4 py-2 bg-black text-white rounded-md cursor-pointer",
    _className
  );

  // toast 객체의 값 구조 분해
  const { msg } = toast;

  // 클릭 시 즉시 닫힘
  const handleClose = () => {
    clearToast(); // 초기화
    setIsOpen(false); // toast 닫기
  };

  useEffect(() => {
    if (!isOpen) return;

    // 화면에 보이는 시간 설정
    const timer = setTimeout(() => {
      handleClose();
    }, duration); // duration 초 후 닫기

    //
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  // isOpen이 false 이면 Toast가 보이지 않음
  if (!isOpen) return null;

  return (
    <div className={className} onClick={handleClose}>
      {/* 텍스트 부분 */}
      <p>{msg}</p>
    </div>
  );
};
