import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className: _className, ...props }: ButtonProps) => {
  // twMerge를 사용하여 기본 스타일과 외부 스타일을 병합
  // 클래스 충돌 시 외부 클래스가 우선 적용
  const className = twMerge(
    "bg-orange-500 text-white p-3 rounded-md font-bold cursor-pointer hover:bg-orange-400 disabled:bg-gray-300",
    _className // 외부에서 전달받은 className
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
