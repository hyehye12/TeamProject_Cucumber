import { type ReactNode } from "react";

export interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export interface ModalRootProps {
  open: boolean;
  children: ReactNode;
  className?: string;
}

export interface ContentProps {
  children: ReactNode;
  className?: string;
}

export interface HeaderProps {
  className?: string;
  title: string;
}

export interface BodyProps {
  className?: string;
  children: ReactNode;
}

export interface FooterProps {
  className?: string;
  children: ReactNode;
}

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}
