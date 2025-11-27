import { type ChangeEvent } from "react";
import {
  BlockUserChecker,
  ReportsButton,
  ReportsMainTitle,
  Textarea,
  useReportState,
} from "../../../components";
import { useReportsContext } from "../context";
import { ReportsLayout } from "../../../layout";

export const ReportsProxy = () => {
  const { reportInfo, setReportInfo } = useReportsContext();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setReportInfo((prev) => ({ ...prev, text }));
  };

  useReportState();

  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="대리 결제(대출)/구매/판매 행위를 해요" />
      </ReportsLayout.Header>
      <ReportsLayout.Main>
        <p>
          대리 결제(대출)/구매/판매하는 행위를 하는 경우, 해당 신고 항목으로
          신고할 수 있어요.
        </p>
        <p>
          작성한 대리 결제(대출)/구매/판매 글로 인한 사기 피해가 발생한 경우,
        </p>
        <p>
          <strong>대리로 게시글을 올린 계정도 사기 가해자로 간주</strong>하여
          운영정책에 의해 최대 <strong>영구 이용이 제한</strong>될 수 있습니다.
        </p>
        <Textarea
          placeholder="신고내용을 입력해주세요.(최대 300자)"
          className="border border-gray-200 mb-0"
          value={reportInfo?.report_text}
          onChange={handleChange}
        />
        <p className="text-right text-gray-400">{`${reportInfo?.report_text.length}/300`}</p>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};
