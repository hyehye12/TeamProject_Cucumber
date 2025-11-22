import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportsContext,
} from "../..";
import { useEffect, type ChangeEvent } from "react";

const ReportsFraudBuyer = () => {
  const { handleReport, reportText, setReportText } = useReportsContext();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportText({ type: "fraud", text });
  };

  useEffect(() => {
    setReportText({ type: "fraud", text: "" });
  }, []);

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="[사기] 물품을 전달받은 구매자 잠적" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          구매자에게 물품을 전달하였음에도 입금이 미뤄지거나 연락이 없는 경우
          당근에 알려주세요.
        </p>
        <p>채팅을 확인해 달라는 안내 메시지를 발송해 드릴게요.</p>
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
            value={reportText?.text}
            onChange={handleChange}
          />
          <p className="text-right text-gray-400">{`${reportText?.text.length}/300`}</p>
        </div>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton onClick={handleReport} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsFraudBuyer;
