import { twMerge } from "tailwind-merge";
import { Button } from "../common";
import { useReportsContext } from "./context";
import { reportsLists, reportsMap } from "../../data";
import type { ReportsCategoryType, ReportsListItemType } from "../../types";

interface ReportsFooter {
  className?: string;
}

export const ReportsFooter = ({ className: _className }: ReportsFooter) => {
  const className = twMerge("flex justify-center p-8", _className);

  const { path, setIsReported } = useReportsContext();

  console.log(path.category);

  const content = reportsMap[path.category as ReportsCategoryType];

  console.log(content);

  const handleReport = () => {
    setIsReported(true);
  };

  // 목록
  const list: ReportsListItemType[] = path.detail
    ? []
    : path.category
    ? reportsLists[path.category as ReportsCategoryType]
    : reportsLists["reports"];

  if (list.length > 0) return null;

  return (
    <footer className={className}>
      <Button onClick={handleReport} className="w-[300px]">
        신고하기
      </Button>
    </footer>
  );
};
