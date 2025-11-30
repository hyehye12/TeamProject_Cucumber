import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  useReportState,
} from "../../../components";

const ReportsUnusableProduct = () => {
  useReportState();
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="사용할 수 없는 상품" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          상품 상태가 매우 좋지 않거나 연식이 오래되어서 더 이상 사용할 수 없는
          상품을 신고해주세요.
        </p>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsUnusableProduct;
