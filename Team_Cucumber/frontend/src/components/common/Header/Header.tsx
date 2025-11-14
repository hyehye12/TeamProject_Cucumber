import type { HtmlHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderRootProps {
  children: ReactNode;
  className?: string;
}

export const HeaderRoot = ({
  children,
  className: _className,
}: HeaderRootProps) => {
  const className = twMerge("flex items-center", _className);

  return <header className={className}>{children}</header>;
};

interface HeaderLeftProps {
  children: ReactNode;
  className?: string;
}

// 왼쪽
export const HeaderLeft = ({
  children,
  className: _className,
}: HeaderLeftProps) => {
  // 왼쪽이 오른쪽을 제외한 모든 너비를 차지함
  // 왼쪽의 모든 요소들은 세로 가운데 정렬
  const className = twMerge("flex-1 flex items-center", _className);

  return <div className={className}>{children}</div>;
};

type ReactParagraghProps = HtmlHTMLAttributes<HTMLParagraphElement>;

type HeaderTitleProps = ReactParagraghProps & {
  children: ReactNode;
  className?: string;
};

// 타이틀
export const HeaderTitle = ({
  children,
  className: _className,
}: HeaderTitleProps) => {
  const className = twMerge("font-bold truncate", _className);

  return <p className={className}>{children}</p>;
};

interface HeaderRightProps {
  children: ReactNode;
  className?: string;
}

export const HeaderRight = ({
  children,
  className: _className,
}: HeaderRightProps) => {
  // 오른쪽의 모든 요소들은 세로 가운데 정렬
  const className = twMerge("flex items-center", _className);
  return <div className={className}>{children}</div>;
};

export default Object.assign(HeaderRoot, {
  Left: HeaderLeft,
  Right: HeaderRight,
  Title: HeaderTitle,
});
