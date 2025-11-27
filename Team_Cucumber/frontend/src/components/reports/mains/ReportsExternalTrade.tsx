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

const ReportsExternalTrade = () => {
  const { handleReport, reportInfo, setReportInfo } = useReportsContext();

  useReportState();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportInfo((prev) => ({ ...prev, report_text: text }));
  };

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="[사기] 외부 채널 유도" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>다음과 같은 경우 사기 사유로 신고할 수 있습니다.</p>
        <ul className="list-disc ml-10 space-y-4">
          <li>
            카카오톡, 문자, 오픈채팅 등 외부 메신저로 대화를 유도하는 경우
          </li>
          <li>가짜 쇼핑몰 사이트에 따로 물품을 등록하라고 요구하는 경우</li>
          <li>안전 결제를 위장한 가짜 사이트를 통한 결제를 유도하는 경우</li>
        </ul>
        <p>
          당근 팀에게 신고해주시면, 서비스 내에서 할 수 있는 모든 조치를 취하고
          최대한 도움을 드리겠습니다.
        </p>
        <p>
          해당 거래 채팅방에서 사기 피해 관련 내용을 충분히 남겨주시면 증거로
          활용될 수 있으니 외부 연락 수단보다는 당근 채팅을 이용해주세요.
        </p>
        <div>
          <a href="" className="text-blue-400 underline">
            경찰서에 신고하는 방법 보러 가기
          </a>
        </div>
        <div>
          <Textarea
            placeholder="[피싱 사이트 이름, 주소(URL)] 등을 남겨주세요. 신속하게 처리해 드릴게요. (최대 300자)"
            className="border border-gray-200 mb-0"
            value={reportInfo?.report_text}
            onChange={handleChange}
          />
          <p className="text-right text-gray-400">{`${reportInfo?.report_text.length}/300`}</p>
        </div>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton onClick={handleReport} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsExternalTrade;
