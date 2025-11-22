import { ReportsLayout } from "../../../layout";
import { BlockUserChecker, ReportsButton, ReportsMainTitle } from "../..";

const ReportsUnder14 = () => {
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

export default ReportsUnder14;
