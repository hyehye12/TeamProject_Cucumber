import {
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import { TabContextProvider, useTabContext } from "./context";
import type { TabContextType } from "./types";

type TabsProps = {
  children: ReactNode;
  className?: string;
};

export const Tabs = ({ children, className: _className }: TabsProps) => {
  const className = twMerge("", _className);

  return <div className={className}>{children}</div>;
};

type TabsRootProps = {
  children: ReactNode;
  defaultValue: string;
  className?: string;
};

export const TabsRoot = ({
  children,
  defaultValue,
  className: _className,
}: TabsRootProps) => {
  const className = twMerge("", _className);

  const [selection, setSelection] = useState("");

  const value: TabContextType = {
    selection,
    setSelection,
  };

  useEffect(() => {
    setSelection(defaultValue);
  }, []);

  return (
    <TabContextProvider value={value}>
      <div className={className}>{children}</div>
    </TabContextProvider>
  );
};

type TabsListProps = {
  children: ReactNode;
  className?: string;
};

export const TabsList = ({
  children,
  className: _className,
}: TabsListProps) => {
  const className = twMerge("w-full flex justify-around shadow-lg", _className);

  return <nav className={className}>{children}</nav>;
};

type ReactButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type TabsTriggerProps = ReactButtonProps & {
  children: ReactNode;
  className?: string;
  value: string;
  onClick?: () => void;
};

export const TabsTrigger = ({
  children,
  className: _className,
  value,
  onClick,
  ...props
}: TabsTriggerProps) => {
  const { selection, setSelection } = useTabContext();

  const isSelected = selection === value;

  const className = twMerge(
    "cursor-pointer p-4 flex-1",
    isSelected
      ? "border-black font-bold border-b-3"
      : "border-b-1 border-gray-200",
    _className
  );

  const handleClick = (value: string) => {
    setSelection(value);

    onClick && onClick();
  };

  return (
    <button
      {...props}
      className={className}
      value={value}
      onClick={() => handleClick(value)}
    >
      {children}
    </button>
  );
};

type TabsContentProps = {
  children: ReactNode;
  className?: string;
  value: string;
};

export const TabsContent = ({
  children,
  className: _className,
  value,
}: TabsContentProps) => {
  const className = twMerge("pt-4", _className);

  const { selection } = useTabContext();

  if (selection !== value) return null;

  return <nav className={className}>{children}</nav>;
};

export default Object.assign(Tabs, {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
