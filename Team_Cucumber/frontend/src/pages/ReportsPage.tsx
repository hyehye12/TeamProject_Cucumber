import { useEffect, useState } from "react";
import { ReportsHeader, ReportsProvider } from "../components";
import type { ReportsContextType, ReportsPathType } from "../types";
import { Outlet, useLocation } from "react-router-dom";

export const ReportsPage = () => {
  const { pathname } = useLocation();
  const [keyword, setKeyword] = useState("");
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [path, setPath] = useState<ReportsPathType>({
    category: undefined,
    detail: undefined,
  });

  useEffect(() => {
    const [_, __, category, detail] = pathname.split("/");

    setPath({ category, detail });
  }, [pathname]);

  const value: ReportsContextType = {
    keyword,
    setKeyword,
    isSearchOn,
    setIsSearchOn,
    path,
  };

  return (
    <ReportsProvider value={value}>
      <ReportsHeader />
      <Outlet />
    </ReportsProvider>
  );
};
