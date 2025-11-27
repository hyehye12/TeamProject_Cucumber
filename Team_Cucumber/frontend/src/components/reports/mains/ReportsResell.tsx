import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportsContext,
  useReportState,
} from "../../../components";
import { type ChangeEvent } from "react";

const ReportsResell = () => {
  const { reportInfo, setReportInfo } = useReportsContext();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportInfo((prev) => ({ ...prev, report_text: text }));
  };

  useReportState();

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="나에게 구매 후 비씨게 재판매" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          어떠한 경우에도 당근에서 구매하거나 나눔 받은 물건을 더 높은 가겨으로
          재판매할 수 없습니다. 반복적으로 재판매하는 사용자를 발견할 경우
          알려주세요.
        </p>
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
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton disabled={!reportInfo.report_text} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsResell;
