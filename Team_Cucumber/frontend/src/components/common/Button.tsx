import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className: _className, ...props }: ButtonProps) => {
  const className = [
    "bg-orange-500 text-white p-3 rounded-md font-bold cursor-pointer hover:bg-orange-300 disabled:bg-gray-300",
    _className,
  ].join(" ");

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
