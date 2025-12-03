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

const ReportsPolitics = () => {
  const { reportInfo, setReportInfo } = useReportsContext();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportInfo((prev) => ({ ...prev, report_text: text }));
  };

  useReportState();

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="정치/종교 대화를 시도해요" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          갑자기 채팅방에서 거래와 관계없는 정치 및 종교 포교를 하는 경우
          정치/종교 대화를 시도해요 항목으로 신고할 수 있습니다.
        </p>
        <p>
          당근 팀에게 신고해주시면, 서비스 내에서 할 수 있는 모든 조치를 취하고
          최대한 도움을 드리겠습니다.
        </p>
        <p>
          해당 채팅방 메시지 신고를 해주실경우 고객센터에서 면밀한 확인이
          가능해요.
        </p>
        <div>
          <a href="" className="text-blue-400 underline">
            신고하는 방법 보러 가기
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
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton disabled={!reportInfo.report_text} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsPolitics;
