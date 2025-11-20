import {
  useReportsContext,
  ReportsDetail,
  ReportsList,
} from "../../components";
import { reportsLists } from "../../data";
import type { ReportsCategoryType, ReportsListItemType } from "../../types";

export const ReportsMain = () => {
  const { path, keyword } = useReportsContext();

  // 전체 목록
  const lists = Object.values(reportsLists).flat();

  // 목록
  const list: ReportsListItemType[] = path.detail
    ? []
    : path.category
    ? keyword
      ? reportsLists[path.category as ReportsCategoryType].filter((l) =>
          l.text.includes(keyword)
        )
      : reportsLists[path.category as ReportsCategoryType]
    : keyword
    ? lists.filter((l) => l.text.includes(keyword))
    : reportsLists["reports"];

  return (
    <main className="flex-1 p-4">
      <ReportsList />
      {list.length === 0 && !keyword && <ReportsDetail />}
    </main>
  );
};
