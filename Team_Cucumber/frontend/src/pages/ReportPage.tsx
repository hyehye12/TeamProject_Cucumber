import { useLocation } from "react-router-dom";
import { ReportFieldList, ReportHeader } from "../components";
import { reports } from "../data";
import { useEffect, useState, type ChangeEvent } from "react";
import type {
  ReportContextType,
  ReportDataType,
  ReportSubmitType,
} from "../types";
import ReportContent from "../components/reports/ReportContent";
import { ReportProvider } from "../components/reports/context";

export const ReportPage = () => {
  const { pathname } = useLocation();

  const [page, setPage] = useState("landing");
  const [report, setReport] = useState<ReportSubmitType>({
    reportType: "",
    toBeBlocked: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const page = pathname.split("/reports/")[1];

    setPage(page ?? "landing");
    // 페이지 이동 시 초기화되어야 할 데이터 주의 할 것
    setKeyword("");
    setReport({
      reportType: "",
      toBeBlocked: false,
    });
    setIsOpen(false);
  }, [pathname]);

  console.log(page);

  const { title, list, desc, type } = reports[page as keyof ReportDataType];

  const handleBlockUser = () => {
    setReport((prev) => ({
      ...prev,
      toBeBlocked: !prev.toBeBlocked,
    }));
  };

  const handleSubmit = (type: string) => {
    setReport((prev) => ({
      ...prev,
      type,
    }));
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    setKeyword(keyword);
  };

  const value: ReportContextType = {
    isOpen,
    onClose,
    onOpen,
    keyword,
    onChange: handleChange,
    list,
    desc,
    onBlock: handleBlockUser,
    onSubmit: handleSubmit,
    type,
    isBlocked: report.toBeBlocked,
    page,
  };

  return (
    <ReportProvider value={value}>
      <div className="h-full flex flex-col px-4">
        {/* 헤더 */}
        <ReportHeader />

        <main className="flex-1">
          {/* 타이틀 */}
          <div>
            <p className="font-bold text-2xl py-4">{title}</p>
          </div>
          {/* 목록 */}
          <ReportFieldList />
          {/* 단일 */}
          <ReportContent />
        </main>
      </div>
    </ReportProvider>
  );
};
