import { twMerge } from "tailwind-merge";
import { Button } from "../common";
import { useReportsContext } from "./context";

interface ReportsFooter {
  className?: string;
}

export const ReportsFooter = ({ className: _className }: ReportsFooter) => {
  const className = twMerge("flex justify-center p-8", _className);

  const { setIsReported, content } = useReportsContext();

  const handleReport = () => {
    setIsReported(true);
  };

  return (
    <footer className={className}>
      <Button onClick={handleReport} className="w-[300px]">
        신고하기
      </Button>
    </footer>
  );
};
