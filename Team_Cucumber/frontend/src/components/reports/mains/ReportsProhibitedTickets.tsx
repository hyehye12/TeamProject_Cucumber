import { ReportsLayout } from "../../../layout";
import { BlockUserChecker, ReportsButton, ReportsMainTitle } from "../..";

const ReportsProhibitedTickets = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="거래 금지 티켓" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          경범죄 처벌법 정의상 '오프라인에서 정가를 초과해 되파는 티켓'이 암표에
          해당돼요. 암표매매를 포함하여, 철도 승차권을 거래하거나, 매크로
          프로그램으로 구매한 티켓을 상습적으로 재판매하는 경우에는 신고해
          주세요.
        </p>
        <p>
          국내법상 직접적인 단속 대상이 아이더라도, 아래의 경우 내부 정책에 따라
          신고 대상이 될 수 있어요.
        </p>
        <ul className="list-disc space-y-4 ml-10">
          <li>입장 전 본인 확인 절차가 있어 양도가 불가능한 일부 티켓</li>
          <li>사기에 악용될 시 이용자 피해 규모가 클 것으로 예상되는 경우</li>
        </ul>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsProhibitedTickets;
