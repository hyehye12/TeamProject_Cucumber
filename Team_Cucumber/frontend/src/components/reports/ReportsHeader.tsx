import {
  PrevButton,
  ReportsSearchInput,
  SearchButton,
  useReportsContext,
  ReportsCancelButton,
  Header,
} from "../../components";

export const ReportsHeader = () => {
  const { isSearchOn, keyword, list } = useReportsContext();

  return (
    <Header className="mx-4">
      <Header.Left>
        {list && isSearchOn ? <ReportsSearchInput /> : <PrevButton />}
      </Header.Left>
      <Header.Right>
        {list.length === 0 && !keyword ? (
          <></>
        ) : isSearchOn ? (
          <ReportsCancelButton>취소</ReportsCancelButton>
        ) : (
          <SearchButton />
        )}
      </Header.Right>
    </Header>
  );
};
