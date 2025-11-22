import { ReportsLayout } from "../../../layout";
import { BlockUserChecker, ReportsButton, ReportsMainTitle } from "../..";

const ReportsHazardousProducts = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="위해 우려 물품" />
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

export default ReportsHazardousProducts;
