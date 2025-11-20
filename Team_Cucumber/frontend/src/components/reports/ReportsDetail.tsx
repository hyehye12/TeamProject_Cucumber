import { useEffect, useRef } from "react";
import { useReportsContext } from "./context";
import { BlockUserChecker } from "./BlockUserChecker";

interface ReportsDetail {}

export const ReportsDetail = ({}: ReportsDetail) => {
  const descRef = useRef<HTMLDivElement>(null);
  const { path, content } = useReportsContext();

  useEffect(() => {
    if (!descRef.current) return;

    const desc = descRef.current;

    desc.innerHTML = content.desc;
  }, [path]);

  if (!content) return null;

  return (
    <div>
      <p className="font-bold text-lg">{content.title}</p>
      <div ref={descRef} />
      {content.isBlockUser && <BlockUserChecker />}
    </div>
  );
};
