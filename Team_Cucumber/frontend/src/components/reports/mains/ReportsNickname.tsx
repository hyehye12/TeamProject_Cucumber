import { ReportsLayout } from "../../../layout";
import { BlockUserChecker, ReportsButton, ReportsMainTitle } from "../..";

const ReportsNickname = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="" />
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
