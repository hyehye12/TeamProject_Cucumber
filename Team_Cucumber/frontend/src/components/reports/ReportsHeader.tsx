import {
  PrevButton,
  ReportsSearchInput,
  SearchButton,
  useReportsContext,
  ReportsCancelButton,
} from "../../components";

export const ReportsHeader = () => {
  const { isSearchOn } = useReportsContext();

  const { list } = useReportsContext();

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
