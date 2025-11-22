import { ReportsLayout } from "../../../layout";
import { ReportsButton, ReportsMainTitle } from "../..";

const ReportsUnder14 = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="만 14세 미만 사용자에요" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          거래 상대방이 게시글이나 채팅에서 나이를 언급한 경우 만 14세 미만의
          대상자라면 당근을 사용할 수 없습니다.
        </p>
        <p>
          당근 팀에게 신고해주시면 신고해주신 내용을 바탕으로 신고처리가
          진행됩니다.
        </p>
        <p>
          (*단, 외모상의 추측이나 예상 만으로는 처리가 어려우며, 명확한 나이가
          확인되는 경우에 처리됩니다.)
        </p>
        <div>
          <a href="" className="text-blue-400 underline">
            만 14세 미만도 당근을 이용할 수 있나요?
          </a>
        </div>
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsUnder14;
