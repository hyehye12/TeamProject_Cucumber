import { ReportHeaderNormal, ReportSerachbar } from "../../components";
import { useReportContext } from "./context";

interface ReportHeaderProps {}

export const ReportHeader = ({}: ReportHeaderProps) => {
  const { isOpen } = useReportContext();
  return (
    <header className="mt-4">
      {isOpen ? <ReportSerachbar /> : <ReportHeaderNormal />}
    </header>
  );
};

export default ReportHeader;
