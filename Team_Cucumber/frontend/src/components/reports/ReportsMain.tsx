import {
  useReportsContext,
  ReportsDetail,
  ReportsList,
} from "../../components";

export const ReportsMain = () => {
  const { list, keyword } = useReportsContext();

  return (
    <main className="flex-1 p-4">
      <ReportsList />
      {list.length === 0 && !keyword && <ReportsDetail />}
    </main>
  );
};
