import { ReportsLayout } from "../../../layout";
import {
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportsContext,
} from "../..";
import { useEffect, type ChangeEvent } from "react";

const ReportsOthers = () => {
  const { handleReport, reportText, setReportText } = useReportsContext();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportText({ type: "bans", text });
  };

  useEffect(() => {
    setReportText({ type: "bans", text: "" });
  }, []);

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="기타" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <Textarea
          placeholder="신고내용을 입력해주세요.(최대 300자)"
          className="border border-gray-200 mb-0"
          value={reportText?.text}
          onChange={handleChange}
        />
        <p className="text-right text-gray-400">{`${reportText?.text.length}/300`}</p>
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton onClick={handleReport} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsOthers;
