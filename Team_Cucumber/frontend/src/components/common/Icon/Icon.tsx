import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { icons } from "./icons";

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type IconProps = ReactSpanProps & {
  name: keyof typeof icons;
  className?: string;
};

export const Icon: FC<IconProps> = ({
  name,
  className: _className,
  ...props
}) => {
  const className = ["", _className].join(" ");

  const Comp = icons[name];

  return (
    <span {...props} className={className} aria-hidden={true}>
      <Comp />
    </span>
  );
};
