import type { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";

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
  handleReport: () => void;
  list: ReportsListItemType[];
  reportInfo: ReportInfo;
  setReportInfo: Dispatch<SetStateAction<ReportInfo>>;
  isModalOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  title: string;
  setTitle: (title: string) => void;
};

export interface ReportsPathType {
  category?: string;
  detail?: string;
  deeper?: string;
}

export interface ReportsListItemType {
  path: string;
  text: string;
  desc?: string;
  field?: string;
  type?: string;
  isBlockUser?: boolean;
  canReport?: boolean;
}

export type ReportsCategoryType =
  | "bans"
  | "professional"
  | "frauds"
  | "proxy"
  | "inappropriates"
  | "users"
  | "others"
  | "dispute";

export interface ReportChatroomType {
  id: string;
  user: {
    profileUrl: string;
    name: string;
  };
  title: string;
}

export interface ReportInfo {
  opponent_id?: string;
  product_id?: string;
  report_text: string;
  report_field_id?: string;
  report_type_id?: string;
}
