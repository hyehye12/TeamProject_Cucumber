import { useReportContext } from "./context";

interface ReportButtonProps {}

export const ReportButton = ({}: ReportButtonProps) => {
  const { type, onSubmit } = useReportContext();

  if (!type) return null;
  return (
    <button
      onClick={() => onSubmit(type)}
      className="w-full p-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 cursor-pointer"
    >
      신고하기
    </button>
  );
};
