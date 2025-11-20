import type { ButtonHTMLAttributes } from "react";

export type ReactButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ReportsContextType = {
  keyword: string;
  setKeyword: (keyword: string) => void;
  isSearchOn: boolean;
  setIsSearchOn: (isSearchOn: boolean) => void;
  path: ReportsPathType;
};

export interface ReportsPathType {
  category?: string;
  detail?: string;
}

export interface ReportsListItemType {
  path: string;
  text: string;
  desc?: string;
  type?: ReportsCategoryType;
}

export type ReportsCategoryType =
  | "reports"
  | "bans"
  | "professional"
  | "frauds"
  | "proxy"
  | "inappropriates"
  | "users";
