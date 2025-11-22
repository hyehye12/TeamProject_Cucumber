import type { ReactButton } from "../../types";
import { Button } from "../common";
import { twMerge } from "tailwind-merge";

type ReportsButton = ReactButton;

export const ReportsButton = ({
  className: _className,
  ...props
}: ReportsButton) => {
  const className = twMerge("w-full", _className);
  return (
    <Button className={className} {...props}>
      신고하기
    </Button>
  );
};
