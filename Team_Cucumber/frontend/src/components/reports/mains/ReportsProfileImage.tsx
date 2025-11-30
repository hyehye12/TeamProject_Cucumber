import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  useReportState,
} from "../../../components";

const ReportsProfileImage = () => {
  useReportState();

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="프로필 사진 신고" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          다른 사람의 초상권이 초상권이 침해될 수 있는 사진/저작권에 위배되는
          사진/선정적 사진 등을 게시하는 경우 신고 접수 시 운영정책에 의하여
          프로필 사진이 삭제되며, 지속적으로 신고받는 경우 이용제한 될 수
          있습니다.
        </p>
        <p>
          사생활 침해/저작권침해/선정성 게시물로 피해를 받고 계신 경우 신고해
          주세요.
        </p>
        <p>[신고 시 유의사항]</p>
        <ul className="list-decimal ml-6 space-y-4">
          <li>
            저작권침해 게시중단에 대한 신고는 게시물이 저작권을 위배한다는
            근거가 있어야 합니다.
          </li>
          <li>
            신고된 게시물이 정당한 권리로 게시됨을 증빙할 수 있는 경우 재게시
            요청이 가능합니다.
          </li>
          <li>
            재게시된 게시물에 대해서는 다시 게시중단ㅇ르 요청할 수 없으며,
            이후의 절차는 당사자 간의 협의 또는 관계 행정기관 심의판단이나 법원
            판결을 통해 해결하셔야 합니다.
          </li>
        </ul>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsProfileImage;
