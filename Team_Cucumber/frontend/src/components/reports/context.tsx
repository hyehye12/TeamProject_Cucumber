import { createContext, useContext, type ReactNode } from "react";
import type { ReportsContextType } from "../../types";

export const ReportsContext = createContext<ReportsContextType | null>(null);

interface ReportsProviderProps {
  children: ReactNode;
  value: ReportsContextType;
}

export const ReportsProvider = ({ children, value }: ReportsProviderProps) => {
  return <ReportsContext value={value}>{children}</ReportsContext>;
};

export const useReportsContext = () => {
  const context = useContext(ReportsContext);

  if (!context) throw new Error("ReportsProvider 안에서 사용해주세요.");

  return context;
};
