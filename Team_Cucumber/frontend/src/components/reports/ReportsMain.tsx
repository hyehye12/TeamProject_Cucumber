import { Link } from "react-router-dom";
import { reportsLists } from "../../data";
import type { ReportsCategoryType, ReportsListItemType } from "../../types";
import { Icon } from "../common";
import { useReportsContext } from "./context";

export const ReportsMain = () => {
  const { path } = useReportsContext();

  const list: ReportsListItemType[] = path.detail
    ? []
    : path.category
    ? reportsLists[path.category as ReportsCategoryType]
    : reportsLists["reports"];

  console.log(list);
  return (
    <main>
      {list.length > 0 && (
        <div>
          <p className="font-bold text-2xl py-8">
            게시글을 신고하는 이유를 선택해주세요.
          </p>
          <ul>
            {list.map((item, index) => {
              const { path, text, desc } = item;
              return (
                <Link to={path} key={`${path}_${index}`}>
                  <li className="flex py-6 items-center border-t border-gray-100 last:border-b hover:bg-gray-50">
                    <div className="flex-1">
                      <p className="text-lg">{text}</p>
                      {desc && <p className="text-sm text-gray-400">{desc}</p>}
                    </div>
                    <Icon name="right" className="text-3xl" />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
};
