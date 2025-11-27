import { type ChangeEvent } from "react";
import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportsContext,
  useReportState,
} from "../../../components";

const ReportsFraudSeller = () => {
  const { handleReport, reportInfo, setReportInfo } = useReportsContext();

  useReportState();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportInfo((prev) => ({ ...prev, text }));
  };

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="[사기] 입금받은 판매자 잠적" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          판매자에게 입금을 하였음에도 배송을 미루거나 답장이 없는 경우 당근에
          알려주세요.
        </p>
        <p>거래 문제를 해결해 달라는 안내 메시즈를 발송해 드릴게요.</p>
        <p>
          당장 휴대폰을 볼 수 없는 상황이거나 알람이 꺼져있어 답장이 늦어질 수도
          있어요.
        </p>
        <p>
          거래 문제가 발생하여 마음 상하시겠지만 어떠한 상황이더라도 상대방을
          비방/욕설 등의 언행을 하면 거래 문제와는 별개로 비매너 경고 또는 이용
          제재될 수 있는 점 유의해 주세요.
        </p>
        <p>아래 자주 묻는 질문을 통해 더 자세한 내용을 확인할 수 있어요.</p>
        <p>
          물건 하자는 채팅방 내{" "}
          <strong>[분쟁조정] or [당근조정을 신청합니다.]</strong>라는 문구를
          입력해 주시면 빠르게 도움드려요.
        </p>
        <div>
          <a href="" className="text-blue-400 underline">
            중고거래 사기를 주의하세요.
          </a>
        </div>
        <div>
          <a href="" className="text-blue-400 underline">
            사기를 당했을 때는 어떻게 하나요?
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
        <ReportsButton onClick={handleReport} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsFraudSeller;
