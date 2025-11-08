import { twMerge } from "tailwind-merge";
import { Icon } from "../Icon";
import Button from "./Button";
import type { ReactButtonProps } from "./types";

type MoreButtonProps = ReactButtonProps & {};

export const MoreButton = ({
  className: _className,
  disabled,
  ...props
}: MoreButtonProps) => {
  const className = twMerge(
    "bg-transparent text-black text-2xl rounded-full",
    disabled
      ? "opacity-50 cursor-default"
      : "focus:outline-orange-400 hover:!outline-0 hover:bg-gray-100",
    _className
  );

  return (
    <Button {...props} disabled={disabled} className={className}>
      <Icon name="verticalDots" />
    </Button>
  );
};
