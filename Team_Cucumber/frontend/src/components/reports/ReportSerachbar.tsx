import { Icon } from "../common";
import { useReportContext } from "./context";

interface ReportSerachbarProps {}

export const ReportSerachbar = ({}: ReportSerachbarProps) => {
  const { onClose, onChange, keyword } = useReportContext();
  return (
    <div className="flex justify-between gap-4">
      <div className="flex-1 flex items-center bg-gray-200 rounded-lg ml-2">
        <Icon name="search" className="ml-4 text-2xl text-gray-400" />
        <input
          type="text"
          className=" w-full pl-2 pr-4 py-2 outline-0"
          placeholder="신고항목 검색"
          onChange={onChange}
          value={keyword}
        />
      </div>
      <button onClick={onClose} className="p-4 cursor-pointer">
        취소
      </button>
    </div>
  );
};

export default ReportSerachbar;
