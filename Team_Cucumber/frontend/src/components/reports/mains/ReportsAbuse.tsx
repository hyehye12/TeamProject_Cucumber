import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportsContext,
  useReportState,
} from "../..";
import { type ChangeEvent } from "react";

const ReportsAbuse = () => {
  const { handleReport, reportInfo, setReportInfo } = useReportsContext();

  useReportState();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportInfo((prev) => ({ ...prev, report_text: text }));
  };

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="욕설 · 비방 · 혐오표현을 해요" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          어떤 상황에서도 욕설, 비방, 혐오표현 등의 언행을 지양하고 있어요.
          상대방의 언행으로 속상하셨다면 신고할 수 있어요.
        </p>
        <p>
          아래 자주 묻는 질문을 통해 당근에서 지켜야 할 매너를 확인할 수 있어요.
        </p>
        <div>
          <a href="" className="text-blue-400 underline">
            당근에서 지켜야 할 매너
          </a>
        </div>
        <div>
          <Textarea
            placeholder="신고내용을 입력해주세요.(최대 300자)"
            className="border border-gray-200 mb-0"
            value={reportInfo?.report_text}
            onChange={handleChange}
          />
          <p className="text-right text-gray-400">{`${reportInfo?.report_text.length}/300`}</p>
        </div>
        <BlockUserChecker />
        <p className="text-gray-500">
          이 항목으로 신고하면 서로의 게시글이 보이지 않고, 서로 더 이상 채팅을
          보낼 수 없어요.
        </p>
        <p className="text-gray-400">{`('나의 당근 > 설정 > 차단 사용자 관리'에서 취소할 수 있습니다.)`}</p>
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton onClick={handleReport} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsAbuse;
