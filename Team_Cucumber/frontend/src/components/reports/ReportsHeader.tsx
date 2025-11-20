import {
  PrevButton,
  ReportsSearchInput,
  SearchButton,
  useReportsContext,
  ReportsCancelButton,
} from "../../components";
import { reportsLists } from "../../data";
import type { ReportsCategoryType, ReportsListItemType } from "../../types";

export const ReportsHeader = () => {
  const { isSearchOn } = useReportsContext();

  const { path } = useReportsContext();

  // 목록
  const list: ReportsListItemType[] = path.detail
    ? []
    : path.category
    ? reportsLists[path.category as ReportsCategoryType]
    : reportsLists["reports"];

  return (
    <header className="flex justify-between items-center gap-4">
      <div className="flex-1 flex items-center relative">
        {list.length !== 0 && isSearchOn ? (
          <ReportsSearchInput />
        ) : (
          <PrevButton className="" />
        )}
      </div>
      {list.length !== 0 && (
        <div className="flex items-center">
          {isSearchOn ? (
            <ReportsCancelButton>취소</ReportsCancelButton>
          ) : (
            <SearchButton />
          )}
        </div>
      )}
    </header>
  );
};
