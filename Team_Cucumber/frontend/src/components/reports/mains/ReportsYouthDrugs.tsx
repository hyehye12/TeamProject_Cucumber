import { ReportsLayout } from "../../../layout";
import { BlockUserChecker } from "../BlockUserChecker";
import { ReportsButton } from "../ReportsButton";
import { ReportsMainTitle } from "../ReportsMainTitle";

export const ReportsYouthDrugs = () => {
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
