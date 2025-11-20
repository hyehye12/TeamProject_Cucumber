import { Link } from "react-router-dom";
import { reportsLists } from "../../data";
import type { ReportsCategoryType, ReportsListItemType } from "../../types";
import { Icon } from "../common";
import { useReportsContext } from "./context";

export const ReportsMain = () => {
  const { path, keyword } = useReportsContext();

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

  return (
    <main>
      {list.length > 0 && !keyword && (
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
      {keyword && (
        <div>
          <p className="text-gray-400 text-md py-4">{`${list.length}개의 결과`}</p>
          {list.length > 0 && (
            <ul>
              {list.map((item, index) => {
                const { path, text, desc, type } = item;
                return (
                  <Link to={path} key={`${path}_${index}`}>
                    <li className="flex py-6 items-center border-t border-gray-100 last:border-b hover:bg-gray-50">
                      <div className="flex-1 space-y-1">
                        <p className="text-lg">
                          <span>{text}</span>
                          {desc && <span>{` : ${desc}`}</span>}
                        </p>
                        {type && (
                          <p className="text-sm text-gray-400">
                            {`[${
                              reportsLists["reports"].filter(
                                (r) => r.path === type
                              )[0].text
                            }]의 하위항목`}
                          </p>
                        )}
                      </div>
                      <Icon name="right" className="text-3xl" />
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}
          {list.length === 0 && (
            <p className="text-center text-gray-400 text-lg">
              검색결과가 없어요.
            </p>
          )}
        </div>
      )}
    </main>
  );
};
