import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReportsContext } from "./context";

export const useReportState = () => {
  const { path, setReportInfo } = useReportsContext();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) return;
    const { field, type } = state;

    setReportInfo((prev) => ({
      ...prev,
      report_field_id: field,
      report_type_id: type,
    }));
  }, [path]);
};
