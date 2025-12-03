import { useEffect, useState } from "react";
import { ReportsHeader, ReportsModal, ReportsProvider } from "../components";
import type {
  ReportInfo,
  ReportsCategoryType,
  ReportsContextType,
  ReportsListItemType,
  ReportsPathType,
} from "../types";
import { Outlet, useLocation } from "react-router-dom";
import { reportsLists } from "../data";

export const ReportsPage = () => {
  // 주소
  const { pathname, state } = useLocation();
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
  const [reportInfo, setReportInfo] = useState<ReportInfo>({
    opponent_id: "",
    product_id: "",
    report_text: "",
    report_field_id: "",
    report_type_id: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const [isLoading, setIsLoading] = useState(false);

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

  // 신고 페이지 입장 시 product_id 혹은 user_id 필요
  useEffect(() => {
    console.log(state);
    // if (!state) return;
    // const { product_id, user_id } = state;

    setReportInfo((prev) => ({
      ...prev,
      opponent_id: "uidShouldBeHere",
      product_id: "pidShouldBeHere",
    }));
  }, []);

  useEffect(() => {
    const [_, __, category, detail, deeper] = pathname.split("/");

    console.log("category", category);
    setPath({ category, detail, deeper });
  }, [pathname]);

  // 신고 전송
  useEffect(() => {
    if (!isReported) return;

    const {
      opponent_id,
      product_id,
      report_text,
      report_field_id,
      report_type_id,
    } = reportInfo;

    if (!opponent_id || !product_id || !report_field_id) return;

    setIsLoading(true);

    const handleReport = async () => {
      await fetch("", {
        method: "POST",
        body: JSON.stringify({
          opponent_id,
          product_id,
          report_text,
          report_field_id,
          report_type_id,
        }),
      });
    };

    const timer = setTimeout(() => {
      handleReport()
        .then((response) => console.log(response))
        .catch((e) => console.error(e))
        .finally(() => setIsLoading(false));
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isReported]);

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
    reportInfo,
    setReportInfo,
    handleReport,
    isModalOpen,
    onClose: handleClose,
    onOpen: handleOpen,
    title,
    setTitle,
    isLoading,
  };

  console.log("로딩", isLoading);

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
