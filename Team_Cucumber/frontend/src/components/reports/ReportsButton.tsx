import type { ReactButton } from "../../types";
import { Button } from "../common";
import { twMerge } from "tailwind-merge";
import { useReportsContext } from "./context";

type ReportsButton = ReactButton;

export const ReportsButton = ({
  className: _className,
  ...props
}: ReportsButton) => {
  const { handleReport } = useReportsContext();

  const className = twMerge("w-full", _className);

  return (
    <Button className={className} {...props} onClick={() => handleReport()}>
      신고하기
    </Button>
  );
};
