import { useEffect, type ChangeEvent } from "react";
import { ReportsLayout } from "../../../layout";
import {
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportsContext,
} from "../..";

const ReportsSuggestReportItem = () => {
  const { handleReport, reportText, setReportText } = useReportsContext();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportText({ type: "inappropriate", text });
  };

  useEffect(() => {
    setReportText({ type: "inappropriate", text: "" });
  }, []);
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="신고 항목 제안" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>앞의 신고 항목에서 적당한 사유를 찾지 못하셨나요?</p>
        <p>
          원하시는 신고 항목이 없는 경우 제안해주세요. 정기적으로 검토하여 신고
          항목 개선에 활용됩니다
        </p>
        <p>
          * 제안해주신 내용에 <strong>따로 답변은 드리지 않아요.</strong>
        </p>
        <div>
          <Textarea
            placeholder="신고내용을 입력해주세요.(최대 300자)"
            className="border border-gray-200 mb-0"
            value={reportText?.text}
            onChange={handleChange}
          />
          <p className="text-right text-gray-400">{`${reportText?.text.length}/300`}</p>
        </div>
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton onClick={handleReport} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsSuggestReportItem;
