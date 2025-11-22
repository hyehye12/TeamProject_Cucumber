import { twMerge } from "tailwind-merge";
import type { ReactParagraph } from "../../types";

type ReportsMainTitle = ReactParagraph & {
  title: string;
};

export const ReportsMainTitle = ({
  className: _className,
  title,
  ...props
}: ReportsMainTitle) => {
  const className = twMerge("text-2xl font-bold", _className);

  return (
    <p className={className} {...props}>
      {title}
    </p>
  );
};
