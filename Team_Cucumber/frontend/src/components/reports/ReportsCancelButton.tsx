import { twMerge } from "tailwind-merge";
import type { ReactButtonProps } from "../../types";
import { Button } from "../common";
import { useReportsContext } from "./context";
import type { ReactNode } from "react";

type ReportsCancelButtonProps = ReactButtonProps & {
  children: ReactNode;
};

export const ReportsCancelButton = ({
  children,
  className: _className,
  ...props
}: ReportsCancelButtonProps) => {
  const { setIsSearchOn } = useReportsContext();

  const className = twMerge(
    "font-normal text-black bg-transparent hover:bg-transparent hover:font-semibold",
    _className
  );

  const handleClick = () => {
    setIsSearchOn(false);
  };

  return (
    <Button className={className} {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};
