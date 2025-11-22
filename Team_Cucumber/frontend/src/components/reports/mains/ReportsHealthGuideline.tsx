import { ReportsLayout } from "../../../layout";
import { ReportsButton, ReportsMainTitle } from "../..";

const ReportsHealthGuideline = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="건강기능식품 개인간 거래 가이드라인 위반" />
      </ReportsLayout.Header>
      <ReportsLayout.Main className="my-8">
        <h1 className="text-lg font-bold">
          가이드라인에 따라 아래의 경우에는 건강기능식품을 판매할 수 없어요.
        </h1>
        <ul className="list-disc ml-10 space-y-4 mt-4">
          <li>소비기한 경과 제품</li>
          <li>해외 직구 제품</li>
          <li>냉장 보관 제품</li>
          <li>소분 판매 제품</li>
          <li>포장 개봉·훼손 제품</li>
          <li>회수/판매 중지 대상 제품[식품안전나라 링크]</li>
          <li>
            부당한 표시·광고
            <ul className="list-disc ml-10 space-y-4 mt-4">
              <li>
                질병의 예방 및 치료에 효능이 있는 것으로 인식할 우려가 있는 표시
                또는 광고
              </li>
              <li>의약품으로 인식할 우려가 있는 표시 또는 광고</li>
              <li>거짓·과장된 표시 또는 광고</li>
              <li>소비자를 기만하는 표시 또는 광고</li>
              <li>
                객관적인 근거 없이 자기 또는 자기의 제품을 다른 영업자나 다른
                영업자의 제품과 부당하게 비교하는 표시 또는 광고
              </li>
              <li>다른 업체 또는 제품을 비방하는 표시 또는 광고</li>
            </ul>
          </li>
        </ul>
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsHealthGuideline;
