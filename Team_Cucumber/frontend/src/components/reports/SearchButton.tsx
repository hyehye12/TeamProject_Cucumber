import { twMerge } from "tailwind-merge";
import type { ReactButtonProps } from "../../types";
import { Button, Icon } from "../common";
import { useReportsContext } from "./context";

type SearchButtonProps = ReactButtonProps & {};

export const SearchButton = ({
  className: _className,
  ...props
}: SearchButtonProps) => {
  const { setIsSearchOn } = useReportsContext();

  const className = twMerge(
    "bg-white text-black text-2xl hover:bg-gray-100 rounded-full",
    _className
  );

  const handleClick = () => {
    setIsSearchOn(true);
  };
  return (
    <Button className={className} {...props} onClick={handleClick}>
      <Icon name="search" />
    </Button>
  );
};
