import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className: _className, ...props }: ButtonProps) => {
  const className = twMerge(
    "bg-orange-500 text-white p-3 rounded-md font-bold cursor-pointer hover:bg-orange-300 disabled:bg-gray-300",
    _className
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
