import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  useReportState,
} from "../../../components";

const ReportsNickname = () => {
  useReportState();
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="사용자 닉네임 신고" />
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

export default ReportsNickname;
