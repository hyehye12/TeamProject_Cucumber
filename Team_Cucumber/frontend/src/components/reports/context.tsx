import { createContext, useContext, type ReactNode } from "react";
import type { ReportContextType } from "../../types";

export const ReportContext = createContext<ReportContextType | null>(null);

interface ReportProviderProps {
  children: ReactNode;
  value: ReportContextType;
}

export const ReportProvider = ({ children, value }: ReportProviderProps) => {
  return (
    <ReportContext.Provider value={value}>{children}</ReportContext.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(ReportContext);

  if (!context) throw new Error("에러");

  return context;
};
