import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TabsRootProps = {
  children: ReactNode;
  className?: string;
};

export const TabsRoot = ({
  children,
  className: _className,
}: TabsRootProps) => {
  const className = twMerge("", _className);

  return <div className={className}>{children}</div>;
};

type TabsListProps = {
  children: ReactNode;
  className?: string;
};

export const TabsList = ({
  children,
  className: _className,
}: TabsListProps) => {
  const className = twMerge("", _className);

  return <nav className={className}>{children}</nav>;
};

type ReactButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type TabsTriggerProps = ReactButtonProps & {
  children: ReactNode;
  className?: string;
};

export const TabsTrigger = ({
  children,
  className: _className,
  ...props
}: TabsTriggerProps) => {
  const className = twMerge("cursor-pointer p-4", _className);

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

type TabsIndicatorProps = {
  children: ReactNode;
  className?: string;
};

export const TabsIndicator = ({
  children,
  className: _className,
}: TabsIndicatorProps) => {
  const className = twMerge("", _className);

  return <nav className={className}>{children}</nav>;
};

type TabsContentProps = {
  children: ReactNode;
  className?: string;
};

export const TabsContent = ({
  children,
  className: _className,
}: TabsContentProps) => {
  const className = twMerge("", _className);

  return <nav className={className}>{children}</nav>;
};

type TabsProps = {
  children: ReactNode;
  className?: string;
};

export const Tabs = ({ children, className: _className }: TabsProps) => {
  const className = twMerge("", _className);

  return <div className={className}>{children}</div>;
};

export default Object.assign(Tabs, {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Indicator: TabsIndicator,
  Content: TabsContent,
});
