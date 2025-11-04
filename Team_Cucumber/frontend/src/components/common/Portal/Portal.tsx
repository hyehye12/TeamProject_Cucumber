import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Portal = ({ children, id, className }: PortalProps) => {
  const portal = (
    <div id={`${id ? `${id}_` : ""}portal`} className={className}>
      {children}
    </div>
  );

  return createPortal(portal, document.body, id);
};
