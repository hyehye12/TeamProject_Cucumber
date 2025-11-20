import { Button } from "../../common";
import { BlockUserChecker } from "../BlockUserChecker";
import { useReportsContext } from "../context";

export const ReportsTrademarkInfringement = () => {
  const { handleReport } = useReportsContext();
  return (
    <div className="p-8 flex flex-col h-full">
      <header>
        <p className="text-2xl font-bold mb-8">상표권 침해 물품</p>
      </header>
      <main className="flex-1 space-y-8">
        <p>
          거래 상대방이 게시글이나 채팅에서 가품/이미테이션을 거래한 경우
          판매금지 물품 판매 사유로 신고할 수 있습니다.
        </p>
        <p>
          당근 팀에게 신고해주시면 신고해주신 내용을 바탕으로 신고처리가
          진행됩니다.
        </p>
        <p>
          (*단, 가품 의심만으로는 처리가 어려울 수 있으며, 가품 여부를 확인할 수
          있는 근거가 명시된 경우 정확한 처리가 진행됩니다.)
        </p>
        {/* 링크로 수정해야 함 */}
        <p>가품 이미테이션은 판매할 수 없어요</p>
        <BlockUserChecker />
      </main>
      <footer>
        <Button onClick={handleReport} className="w-full">
          신고하기
        </Button>
      </footer>
    </div>
  );
};
