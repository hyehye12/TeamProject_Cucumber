import { ReportsLayout } from "../../../layout";
import {
  ReportsButton,
  ReportsMainTitle,
  useReportState,
} from "../../../components";

export const ReportsMedicalProducts = () => {
  useReportState();
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="의약품 / 의료기기" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>일반적인 식품 또는 음료는 당근에서 거래할 수 있어요.</p>
        <p>의약품, 의료기기에 해당하는 경우에만 신고해주세요.</p>
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};
