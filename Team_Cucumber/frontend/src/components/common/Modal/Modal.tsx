import type {
  OverlayProps,
  ContentProps,
  ModalRootProps,
  HeaderProps,
  BodyProps,
  FooterProps,
  ButtonProps,
} from "./Modal.types";
import useScrollLock from "../../../hooks/useScrollLock";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

const ModalRoot = ({ open, children, className }: ModalRootProps) => {
  useScrollLock(open);
  if (!open) return null;

  // rootElement의 타입: HTMLElement | null
  const rootElement = document.getElementById("root");

  // 타입스크립트 오류 방지 코드
  // rootElement의 타입: HTMLElement (null 제거됨)
  if (!rootElement) return null;

  // createPortal(children, domNode, key?)
  return createPortal(
    // twMerge(기본스타일, 덮어쓰기/추가스타일)
    <div
      className={twMerge(
        "absolute inset-0 z-50 flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>,
    rootElement // 타입 안전: HTMLElement만 전달
  );
};

const Overlay = ({ onClick, className }: OverlayProps) => {
  return (
    <div
      className={twMerge("absolute inset-0 bg-black/50 z-40", className)}
      onClick={onClick}
    ></div>
  );
};

// Content는 오직 카드 UI 역할만, 위치 제어는 ModalRoot
const Content = ({ children, className }: ContentProps) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-2xl p-5 shadow-lg w-full max-w-md z-50",
        className
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

const Header = ({ title, className }: HeaderProps) => {
  return (
    <header className={twMerge("text-2xl font-bold mb-3", className)}>
      {title}
    </header>
  );
};

const Body = ({ children, className }: BodyProps) => {
  // 혹시 모를 외부 className 병합 및 Tailwind 충돌 방지
  return <main className={twMerge("", className)}>{children}</main>;
};

const Footer = ({ children, className }: FooterProps) => {
  return (
    <footer className={twMerge("flex gap-3 mt-4 justify-end", className)}>
      {children}
    </footer>
  );
};

const CancelButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex-1 bg-gray-200 rounded-md font-bold p-3 w-full hover:bg-gray-300 cursor-pointer whitespace-nowrap min-w-[110px]",
        className
      )}
    >
      {children}
    </button>
  );
};

const ConfirmButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex-1 bg-orange-500 rounded-md font-bold p-3 w-full text-white hover:bg-orange-600 cursor-pointer whitespace-nowrap min-w-[110px]",
        className
      )}
    >
      {children}
    </button>
  );
};

// Compound Component Pattern
const Modal = Object.assign(ModalRoot, {
  Overlay,
  Content,
  Header,
  Body,
  Footer,
  CancelButton,
  ConfirmButton,
});

// ccp는 export default가 적합
// 예: Modal.Header ->어떤 컴포넌트의 Header인지 명확
export default Modal;
