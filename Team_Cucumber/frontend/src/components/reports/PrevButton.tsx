import type { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon } from "../common";
import type { ReactButtonProps } from "../../types";
import { twMerge } from "tailwind-merge";

type PrevButtonProps = ReactButtonProps & {};

export const PrevButton = ({
  onClick,
  className: _className,
  ...props
}: PrevButtonProps) => {
  const navigate = useNavigate();

  const className = twMerge(
    "bg-white text-black text-2xl hover:bg-gray-100 rounded-full",
    _className
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
    onClick && onClick(e);
  };

  return (
    <Button className={className} onClick={handleClick} {...props}>
      <Icon name="left" />
    </Button>
  );
};
