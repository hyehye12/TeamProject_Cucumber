import { type ReactNode } from "react";

export interface OverlayProps {
  onClick?: () => void;
}

export interface ModalRootProps {
  open: boolean;
  children: ReactNode;
}

export interface HeaderProps {
  title: string;
}

export interface BodyProps {
  children: ReactNode;
}

export interface FooterProps {
  children: ReactNode;
}

export interface ModalButtonProps {
  children: ReactNode;
  onClick: () => void;
}
