import type { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";

// textarea 속성
type ReactTextarea = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type TextareaProps = ReactTextarea & {};

export const Textarea: FC<TextareaProps> = ({ ...props }) => {
  const { className: _className, placeholder, rows = 5, ...rest } = props;
  const className = [
    "w-full outline-0 rounded-lg p-4 resize-none placeholder-gray-500",
    _className,
  ].join(" ");

  return (
    <textarea
      placeholder={placeholder}
      className={className}
      rows={rows}
      {...rest}
    />
  );
};
