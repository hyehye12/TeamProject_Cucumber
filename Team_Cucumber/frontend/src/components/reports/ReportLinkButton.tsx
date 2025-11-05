import { Link } from "react-router-dom";
import type { ReportFieldType } from "../../types";
import { Icon } from "../common";

interface ReportLinkButtonProps {
  field: ReportFieldType;
  className?: string;
}

export const ReportLinkButton = ({
  field,
  className: _className,
}: ReportLinkButtonProps) => {
  const { text, path, desc } = field;

  const className = [
    "flex justify-between items-center py-6 hover:bg-gray-50",
    _className,
  ].join(" ");

  return (
    <Link to={path}>
      <div className={className}>
        <div>
          <p className="font-semibold">{text}</p>
          {field.desc && <p className="text-gray-500">{desc}</p>}
        </div>
        <Icon name="right" className="text-2xl" />
      </div>
    </Link>
  );
};
