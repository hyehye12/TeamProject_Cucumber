import type { ButtonHTMLAttributes } from "react";

export type ReactButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ReportsContextType = {
  keyword: string;
  setKeyword: (keyword: string) => void;
  isSearchOn: boolean;
  setIsSearchOn: (isSearchOn: boolean) => void;
  path: ReportsPathType;
  isBlockUser: boolean;
  setIsBlockUser: (isBlockUser: boolean) => void;
  isReported: boolean;
  setIsReported: (isReported: boolean) => void;
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
  isBlockUser?: boolean;
  canReport?: boolean;
}

export type ReportsCategoryType =
  | "bans"
  | "professional"
  | "frauds"
  | "proxy"
  | "inappropriates"
  | "users";
