import { Button } from "../../common";
import { useReportsContext } from "../context";

export const ReportsMedicalProducts = () => {
  const { handleReport } = useReportsContext();
  return (
    <div className="p-8 flex flex-col h-full">
      <header>
        <p className="text-2xl font-bold mb-8">의약품 / 의료기기</p>
      </header>
      <main className="flex-1 space-y-2">
        <p>일반적인 식품 또는 음료는 당근에서 거래할 수 있어요.</p>
        <p>의약품, 의료기기에 해당하는 경우에만 신고해주세요.</p>
      </main>
      <footer>
        <Button onClick={handleReport} className="w-full">
          신고하기
        </Button>
      </footer>
    </div>
  );
};
