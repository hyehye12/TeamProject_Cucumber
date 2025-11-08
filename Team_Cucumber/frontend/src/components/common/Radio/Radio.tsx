import { forwardRef, type InputHTMLAttributes } from "react";
import { Icon } from "../Icon";
import { twMerge } from "tailwind-merge";

type ReactInputProps = InputHTMLAttributes<HTMLInputElement>;

type RadioProps = ReactInputProps & {};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { checked, id, children, onChange, className: _className, ...props },
    ref
  ) => {
    const className = twMerge(
      checked ? "text-orange-400" : "text-gray-200",
      "text-xl",
      _className
    );

    return (
      <label htmlFor={id} className="flex items-center gap-2">
        <input
          type="radio"
          {...props}
          className="sr-only"
          ref={ref}
          id={id}
          onChange={onChange}
        />
        <Icon name={checked ? "radioOn" : "radioOff"} className={className} />
      </label>
    );
  }
);
