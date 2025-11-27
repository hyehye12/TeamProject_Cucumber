import { ReportsLayout } from "../../../layout";
import {
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportsContext,
  useReportState,
} from "../../../components";
import { type ChangeEvent } from "react";

const ReportsOthers = () => {
  const { handleReport, reportInfo, setReportInfo } = useReportsContext();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportInfo((prev) => ({ ...prev, report_text: text }));
  };

  useReportState();

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="기타" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <Textarea
          placeholder="신고내용을 입력해주세요.(최대 300자)"
          className="border border-gray-200 mb-0"
          value={reportInfo?.report_text}
          onChange={handleChange}
        />
        <p className="text-right text-gray-400">{`${reportInfo?.report_text.length}/300`}</p>
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton onClick={handleReport} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsOthers;
