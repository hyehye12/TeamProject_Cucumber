import type { ReactNode } from "react";
import type { ReactDiv, ReactFooter, ReactHeader, ReactMain } from "../types";
import { twMerge } from "tailwind-merge";

type ReportsRoot = ReactDiv & {
  children: ReactNode;
};

const ReportsRoot = ({
  children,
  className: _className,
  ...props
}: ReportsRoot) => {
  const className = twMerge("p-8 flex flex-col h-full", _className);
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

type ReportsHeader = ReactHeader & {
  children: ReactNode;
};

const ReportsHeader = ({
  children,
  className: _className,
  ...props
}: ReportsHeader) => {
  const className = twMerge("", _className);
  return (
    <header className={className} {...props}>
      {children}
    </header>
  );
};

type ReportsMain = ReactMain & {
  children: ReactNode;
};

const ReportsMain = ({
  children,
  className: _className,
  ...props
}: ReportsMain) => {
  const className = twMerge("flex-1", _className);
  return (
    <main className={className} {...props}>
      {children}
    </main>
  );
};

type ReportsFooter = ReactFooter & {
  children: ReactNode;
};

const ReportsFooter = ({
  children,
  className: _className,
  ...props
}: ReportsFooter) => {
  const className = twMerge("", _className);
  return (
    <footer className={className} {...props}>
      {children}
    </footer>
  );
};

const ReportsLayout = Object.assign(ReportsRoot, {
  Header: ReportsHeader,
  Main: ReportsMain,
  Footer: ReportsFooter,
});

export default ReportsLayout;
