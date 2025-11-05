import { useNavigate } from "react-router-dom";
import { Icon } from "../common";
import { useReportContext } from "./context";

interface ReportHeaderNormalProps {}

export const ReportHeaderNormal = ({}: ReportHeaderNormalProps) => {
  const navigate = useNavigate();

  const { onOpen, list } = useReportContext();
  return (
    <div className="flex justify-between items-center">
      <button
        className="py-4 text-2xl cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <Icon name="left" />
      </button>

      {list && (
        <button className="p-4 text-2xl cursor-pointer" onClick={onOpen}>
          <Icon name="search" />
        </button>
      )}
    </div>
  );
};

export default ReportHeaderNormal;
