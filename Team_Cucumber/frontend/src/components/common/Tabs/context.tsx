import { createContext, useContext, type ReactNode } from "react";
import type { TabContextType } from "./types";

export const TabContext = createContext<TabContextType | null>(null);

export interface TabContextProviderProps {
  children: ReactNode;
  value: TabContextType;
}

export const TabContextProvider = ({
  children,
  value,
}: TabContextProviderProps) => {
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTabContext = () => {
  const context = useContext(TabContext);

  if (!context) throw new Error("TabContextProvider 안에서 사용되어야 합니다.");

  return context;
};
