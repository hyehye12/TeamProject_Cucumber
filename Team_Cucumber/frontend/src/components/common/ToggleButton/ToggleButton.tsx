// ToggleButton.tsx
import type { ButtonHTMLAttributes } from "react";

type ToggleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  checked: boolean;
  onClick?: (initialstate: boolean) => void;
  knobClassName?: string;
  knobOnClass?: string;
  knobOffClass?: string;
};

export const ToggleButton = ({
  checked,
  onClick,
  disabled = false,
  className: _className,
  knobClassName = "",
  knobOnClass,
  knobOffClass,
  ...rest
}: ToggleButtonProps) => {
  const className = [
    "relative w-14 h-7 rounded-full transition-colors duration-300 ease-in-out",
    checked ? "bg-orange-500" : "bg-gray-300",
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    _className,
  ].join(" ");

  const onCls = knobOnClass ?? "translate-x-7";
  const offCls = knobOffClass ?? "translate-x-0";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...rest}
    >
      <span
        className={[
          "absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full",
          "transition-transform duration-300 ease-in-out",
          checked ? onCls : offCls,
          knobClassName,
        ].join(" ")}
      />
    </button>
  );
};
