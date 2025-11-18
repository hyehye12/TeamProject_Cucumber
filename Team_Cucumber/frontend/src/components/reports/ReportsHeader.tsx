import {
  PrevButton,
  ReportsSearchInput,
  SearchButton,
  useReportsContext,
  ReportsCancelButton,
} from "../../components";

export const ReportsHeader = () => {
  const { isSearchOn } = useReportsContext();

  return (
    <header className="flex justify-between items-center gap-4">
      <div className="flex-1 flex items-center relative">
        {isSearchOn ? (
          <ReportsSearchInput />
        ) : (
          <PrevButton className="absolute -left-3" />
        )}
      </div>
      <div className="flex items-center">
        {isSearchOn ? (
          <ReportsCancelButton>취소</ReportsCancelButton>
        ) : (
          <SearchButton />
        )}
      </div>
    </header>
  );
};
