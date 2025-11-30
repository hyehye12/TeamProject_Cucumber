import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
} from "../../../components";

export const ReportsProfessional = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="전문 판매업자 같아요" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <ul className="list-disc ml-10">
          <li className="my-4">
            동일/유사한 제품을 단기간에 많이 판매하는 경우
          </li>
          <li className="my-4">
            동일 제품을 다양한 사이즈나 색상으로 판매하는 경우
          </li>
          <li className="my-4">
            판매사이트, 카톡 채널, 네이버 밴드 등 영리를 위한 홍보하는 경우
          </li>
          <li className="my-4">기타 영리적 목적이 확인되는 경우</li>
        </ul>
        <div className="flex flex-col gap-1.5">
          <p>전문판매업자 사유로 신고할 수 있습니다.</p>
          <p>
            당근 팀에게 신고해주시면 신고해주신 내용을 바탕으로 전문판매업자
            처리가 진행됩니다.
          </p>
          <p>
            자세한 내용은 '전문 판매업자 기준이 뭔가요?' 내용을 확인해주세요.
          </p>
        </div>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};
