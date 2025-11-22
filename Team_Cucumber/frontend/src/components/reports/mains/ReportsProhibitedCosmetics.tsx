import { ReportsLayout } from "../../../layout";
import { BlockUserChecker, ReportsButton, ReportsMainTitle } from "../..";

const ReportsProhibitedCosmetics = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="거래 금지 화장품" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          증정용 화장품 샘플은 개인 간 거래할 수 없어요. 다만 호텔 어메니티느
          증정용 화장품 샘플에 해당하지 않아요. 이 점을 참고하여 신고해주세요.
        </p>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsProhibitedCosmetics;
