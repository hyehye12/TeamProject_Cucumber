import { ReportsLayout } from "../../../layout";
import { BlockUserChecker, ReportsButton, ReportsMainTitle } from "../..";

const ReportsMoneyRequest = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="무료나눔 및 금전 요구 글" />
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

export default ReportsMoneyRequest;
