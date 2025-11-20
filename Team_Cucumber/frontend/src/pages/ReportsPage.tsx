import { useEffect, useState } from "react";
import { ReportsHeader, ReportsProvider } from "../components";
import type {
  ReportsCategoryType,
  ReportsContextType,
  ReportsListItemType,
  ReportsPathType,
  ReportText,
} from "../types";
import { Outlet, useLocation } from "react-router-dom";
import { reportsLists, reportsMap } from "../data";

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
  const [reportText, setReportText] = useState<ReportText | undefined>(
    undefined
  );

  // 전체 목록
  const lists = Object.values(reportsLists).flat();

  // 목록
  const list: ReportsListItemType[] = path.detail
    ? []
    : path.category
    ? keyword
      ? reportsLists[path.category as ReportsCategoryType].filter((l) =>
          l.text.includes(keyword)
        )
      : reportsLists[path.category as ReportsCategoryType]
    : keyword
    ? lists.filter((l) => l.text.includes(keyword))
    : reportsLists["reports"];

  const content = reportsMap[path.category as ReportsCategoryType];

  const handleReport = () => {
    setIsReported(true);
  };

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
    list,
    content,
    reportText,
    setReportText,
    handleReport,
  };

  return (
    <ReportsProvider value={value}>
      <article className="flex flex-col h-screen">
        <ReportsHeader />
        <Outlet />
      </article>
    </ReportsProvider>
  );
};
