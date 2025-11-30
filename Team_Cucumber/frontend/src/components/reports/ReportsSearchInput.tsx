import type { ChangeEvent } from "react";
import { Icon } from "../common";
import { useReportsContext } from "./context";
import { twMerge } from "tailwind-merge";

interface ReportsSearchInputProps {
  className?: string;
}

export const ReportsSearchInput = ({
  className: _className,
}: ReportsSearchInputProps) => {
  const { setKeyword } = useReportsContext();

  const className = twMerge(
    "py-2 pl-10 pr-3 bg-gray-100 w-full rounded outline-0",
    _className
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    setKeyword(keyword);
  };

  return (
    <div className="relative flex-1">
      <input
        type="text"
        className={className}
        placeholder="신고항목 검색"
        onChange={handleChange}
      />
      <Icon name="search" className="absolute top-3 left-3 text-gray-400" />
    </div>
  );
};
