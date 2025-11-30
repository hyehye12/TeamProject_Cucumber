import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  useReportState,
} from "../../../components";

const ReportsDangerousGoods = () => {
  useReportState();
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="위험한 물건" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsDangerousGoods;
