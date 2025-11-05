import { Icon } from "../common";
import { useReportContext } from "./context";

interface ReportBlockUserProps {}

export const ReportBlockUser = ({}: ReportBlockUserProps) => {
  const { onBlock, isBlocked } = useReportContext();
  return (
    <div className="space-y-2 my-4">
      <div className="flex items-center gap-2">
        <button className="text-2xl cursor-pointer" onClick={onBlock}>
          {isBlocked ? (
            <Icon name="checkBoxFill" className="text-blue-400" />
          ) : (
            <Icon name="boxOutline" className="text-gray-400" />
          )}
        </button>
        <p onClick={onBlock}>이 사용자의 글 보지 않기</p>
      </div>
      <p className="text-gray-500">{`('나의 당근 > 설정 > 게시글 미노출 사용자 관리'에서 취소할 수 잇습니다.)`}</p>
    </div>
  );
};
