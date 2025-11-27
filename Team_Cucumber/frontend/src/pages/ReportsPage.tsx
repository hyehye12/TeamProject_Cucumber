import { useEffect, useState } from "react";
import { ReportsHeader, ReportsModal, ReportsProvider } from "../components";
import type {
  ReportsCategoryType,
  ReportsContextType,
  ReportsListItemType,
  ReportsPathType,
  ReportText,
} from "../types";
import { Outlet, useLocation } from "react-router-dom";
import { reportsLists } from "../data";

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
    deeper: undefined,
  });
  const [reportText, setReportText] = useState<ReportText | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // 전체 목록
  const lists = Object.values(reportsLists).flat();

  const list: ReportsListItemType[] =
    !path.category && !path.detail
      ? keyword
        ? lists.filter((l) => l.text.includes(keyword))
        : reportsLists["reports"]
      : (path.detail === "dispute" && !path.deeper) ||
        (path.detail === "others" && path.category === "users" && !path.deeper)
      ? keyword
        ? reportsLists[path.detail as ReportsCategoryType].filter((l) =>
            l.text.includes(keyword)
          )
        : reportsLists[path.detail as ReportsCategoryType]
      : !path.detail && path.category
      ? keyword
        ? reportsLists[path.category as ReportsCategoryType].filter((l) =>
            l.text.includes(keyword)
          )
        : reportsLists[path.category as ReportsCategoryType]
      : [];

  const handleReport = () => {
    setIsReported(true);
  };

  useEffect(() => {
    const [_, __, category, detail, deeper] = pathname.split("/");

    console.log("category", category);
    setPath({ category, detail, deeper });
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
    reportText,
    setReportText,
    handleReport,
    isModalOpen,
    onClose: handleClose,
    onOpen: handleOpen,
    title,
    setTitle,
  };

  return (
    <ReportsProvider value={value}>
      <ReportsModal />
      <article className="flex flex-col h-screen">
        <ReportsHeader />
        <Outlet />
      </article>
    </ReportsProvider>
  );
};
