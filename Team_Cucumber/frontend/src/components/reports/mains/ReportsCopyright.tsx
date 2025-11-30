import { ReportsLayout } from "../../../layout";
import { BlockUserChecker } from "../BlockUserChecker";
import { ReportsButton } from "../ReportsButton";
import { ReportsMainTitle } from "../ReportsMainTitle";
import { useReportState } from "../useReportState";

export const ReportsCopyright = () => {
  useReportState();
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="저작권 침해 물품" />
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
