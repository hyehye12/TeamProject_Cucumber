import { ReportBlockUser, ReportButton } from "../../components";
import { useReportContext } from "./context";

interface ReportContentProps {}

export const ReportContent = ({}: ReportContentProps) => {
  const { desc, type } = useReportContext();
  if (!desc || !type) return null;
  return (
    <div>
      {/* 내용 */}
      <div>
        <p>{desc}</p>
      </div>
      <ReportBlockUser />
      <ReportButton />
    </div>
  );
};

export default ReportContent;
