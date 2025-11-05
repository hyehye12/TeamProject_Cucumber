import type { ChangeEvent } from "react";

export type PathType = {
  text: string;
  path: string;
};

export type ReportFieldType = PathType & {
  desc?: string;
};

export type ReportDataType = Record<
  string,
  {
    title: string;
    list?: ReportFieldType[];
    desc?: string;
    type?: string;
  }
>;

// 신고 접수를 위해 모야하는 값
export interface ReportSubmitType {
  reportType: string;
  toBeBlocked: boolean;
  opponentId?: string; // 상대방 아이디
  productId?: string; // 상품 아이디
}

export interface ReportContextType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  keyword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  list: ReportFieldType[] | undefined;
  desc: string | undefined;
  onBlock: () => void;
  onSubmit: (type: string) => void;
  type: string | undefined;
  isBlocked: boolean;
  page: string;
}
