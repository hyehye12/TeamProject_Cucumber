import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  useReportState,
} from "../../../components";

export const ReportsYouthDrugs = () => {
  useReportState();
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="청소년 유해약물" />
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
