import type { ReactButton } from "../../types";
import { Button, Spinner } from "../common";
import { twMerge } from "tailwind-merge";
import { useReportsContext } from "./context";

type ReportsButton = ReactButton;

export const ReportsButton = ({
  className: _className,
  ...props
}: ReportsButton) => {
  const { handleReport, isLoading } = useReportsContext();

  const className = twMerge("w-full", _className);

  return (
    <Button className={className} {...props} onClick={() => handleReport()}>
      {isLoading ? <Spinner /> : "신고하기"}
    </Button>
  );
};
