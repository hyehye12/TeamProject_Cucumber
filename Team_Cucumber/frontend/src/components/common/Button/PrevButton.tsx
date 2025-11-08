import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon";
import Button from "./Button";
import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type ReactButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type PrevButtonProps = ReactButtonProps & {};

export const PrevButton = ({
  className: _className,
  onClick,
  disabled,
  ...props
}: PrevButtonProps) => {
  const navigate = useNavigate();

  const className = twMerge(
    "bg-transparent text-black text-2xl",
    disabled
      ? "opacity-50 cursor-default"
      : "focus:outline-orange-400 focus-visible:text-orange-400 hover:!text-white hover:!outline-0",
    _className
  );

  // 뒤로 가기 이외의 기능을 추가하는 경우를 위한 핸들러
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }

    // 이전 페이지로 이동
    navigate(-1);
  };

  return (
    <Button
      className={className}
      onClick={handleClick}
      {...props}
      disabled={disabled}
    >
      <Icon name="left" />
    </Button>
  );
};
