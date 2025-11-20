import { useEffect, useState } from "react";
import { ReportsFooter, ReportsHeader, ReportsProvider } from "../components";
import type { ReportsContextType, ReportsPathType } from "../types";
import { Outlet, useLocation } from "react-router-dom";

export const ReportsPage = () => {
  // 주소
  const { pathname } = useLocation();
  // 검색어 상태 관리
  const [keyword, setKeyword] = useState("");
  // 검색창 여닫기 상태 관리
  const [isSearchOn, setIsSearchOn] = useState(false);
  // 피신고자 차단 여부
  const [isBlockUser, setIsBlockUser] = useState(false);
  // 신고 여부 상태 관리
  const [isReported, setIsReported] = useState(false);
  const [path, setPath] = useState<ReportsPathType>({
    category: undefined,
    detail: undefined,
  });
  ``;

  useEffect(() => {
    const [_, __, category, detail] = pathname.split("/");

    console.log(category);
    setPath({ category, detail });
  }, [pathname]);

  const value: ReportsContextType = {
    keyword,
    setKeyword,
    isSearchOn,
    setIsSearchOn,
    path,
    isBlockUser,
    setIsBlockUser,
    isReported,
    setIsReported,
  };

  return (
    <ReportsProvider value={value}>
      <article className="flex flex-col h-screen">
        <ReportsHeader />
        <Outlet />
        <ReportsFooter />
      </article>
    </ReportsProvider>
  );
};
