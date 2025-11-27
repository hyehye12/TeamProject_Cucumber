import { type ChangeEvent } from "react";
import { ReportsLayout } from "../../../layout";
import {
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportsContext,
  useReportState,
} from "../../../components";

const ReportsSexualBehavior = () => {
  const { handleReport, reportInfo, setReportInfo } = useReportsContext();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportInfo((prev) => ({ ...prev, report_text: text }));
  };

  useReportState();

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="부적절한 성적 행위를 해요" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <div>
          <Textarea
            placeholder="신고내용을 입력해주세요.(최대 300자)"
            className="border border-gray-200 mb-0"
            value={reportInfo?.report_text}
            onChange={handleChange}
          />
          <p className="text-right text-gray-400">{`${reportInfo?.report_text.length}/300`}</p>
        </div>
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

export default ReportsSexualBehavior;
