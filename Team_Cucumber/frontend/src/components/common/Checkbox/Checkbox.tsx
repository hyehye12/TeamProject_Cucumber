import { forwardRef, type InputHTMLAttributes } from "react";
import { Icon } from "../Icon";
import { twMerge } from "tailwind-merge";

type ReactInputProps = InputHTMLAttributes<HTMLInputElement>;
type CheckboxProps = ReactInputProps & {};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...props }, ref) => {
    const { className: _className, id, checked, disabled } = props;

    const className = twMerge(
      "flex items-center",
      checked ? "text-orange-400" : "text-gray-400",
      disabled ? "opacity-50cursor-not-allowed" : "cursor-pointer",
      _className
    );
    return (
      <label
        htmlFor={id}
        className="flex items-center focus:outline-blue-400"
        tabIndex={0}
      >
        <input
          type="checkbox"
          {...props}
          className="sr-only"
          ref={ref}
          aria-hidden={true}
        />

        <Icon
          name={checked ? "checkBoxFill" : "boxOutline"}
          className={className}
        />
      </label>
    );
  }
);
