import { twMerge } from "tailwind-merge";
import { Icon } from "../Icon";
import Button from "./Button";
import type { ReactButtonProps } from "./types";

// onClose만 사용하기 위해서 props에서 onClick 제외
type CloseButtonProps = Omit<ReactButtonProps, "onClick"> & {
  onClose: () => void;
};

export const CloseButton = ({
  onClose, // 목적을 분명히 하기 위해서 onClick으로 적지 않지만 onClick임
  className: _className,
  disabled,
  ...props
}: CloseButtonProps) => {
  const className = twMerge(
    "bg-transparent text-black text-xl rounded-full",
    disabled
      ? "opacity-50 cursor-default"
      : "focus:outline-orange-400 hover:!outline-0 hover:bg-gray-100",
    _className
  );
  return (
    <Button
      {...props}
      className={className}
      onClick={onClose}
      disabled={disabled}
    >
      <Icon name="close" />
    </Button>
  );
};
