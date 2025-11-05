import { useReportContext } from "./context";
import { ReportLinkButton } from "../../components";
import { reportAll } from "../../data";
import type { ReportFieldType } from "../../types";

interface ReportFieldListProps {}

export const ReportFieldList = ({}: ReportFieldListProps) => {
  const { list, keyword, page } = useReportContext();
  if (!list) return null;

  // 랜딩 페이지에서 검색하는 경우에는 세부 페이지에서의 검색 결과도 같이 떠야 함

  let filtered: ReportFieldType[] = [];

  if (page === "landing" && keyword) {
    const searched: ReportFieldType[] = [];
    Object.entries(reportAll).forEach((r) => {
      console.log(r);
      const [field, list] = r;

      const result = list.filter((i) => i.text.includes(keyword));

      console.log("필드", field);

      const index = Object.keys(reportAll).findIndex((k) => k === field);

      console.log("순서", index);

      if (result.length !== 0 && index !== 0) {
        const category = reportAll["landing"][index - 1];

        if (searched.findIndex((s) => s.text === category.text) === -1)
          searched.push(category);
      }
      searched.push(...result);
    });

    filtered.push(...searched);
  } else {
    filtered = list.filter((i) => i.text.includes(keyword));
  }

  return (
    <div className="border-t border-gray-200">
      {filtered.map((field) => (
        <ReportLinkButton
          field={field}
          key={field.text}
          className="border-b border-gray-200"
        />
      ))}
    </div>
  );
};
