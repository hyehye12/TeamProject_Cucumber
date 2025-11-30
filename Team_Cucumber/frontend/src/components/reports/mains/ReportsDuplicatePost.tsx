import { ReportsLayout } from "../../../layout";
import { ReportsButton, ReportsMainTitle, useReportState } from "../..";

const ReportsDuplicatePost = () => {
  useReportState();

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="중복 게시글" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          당근은 최대 2개의 지역에서 사용할 수 있고 서로 다른 동네에서는 똑같은
          게시글을 작성할 수 있어요. 신고하고자 하는 게시글이 같은 동네에서
          작성된 경우에만 신고해주세요.
        </p>
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsDuplicatePost;
