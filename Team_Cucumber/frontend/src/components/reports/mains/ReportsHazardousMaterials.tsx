import { ReportsLayout } from "../../../layout";
import { BlockUserChecker, ReportsButton, ReportsMainTitle } from "../..";

const ReportsHazardousMaterials = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="위험한 물질" />
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

export default ReportsHazardousMaterials;
