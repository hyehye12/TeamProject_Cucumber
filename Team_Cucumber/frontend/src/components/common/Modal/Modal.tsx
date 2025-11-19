import type {
  OverlayProps,
  ModalRootProps,
  HeaderProps,
  BodyProps,
  FooterProps,
  ModalButtonProps,
} from "./Modal.types";
import useScrollLock from "../../../hooks/useScrollLock";
import { createPortal } from "react-dom";
import type React from "react";

const ModalRoot = ({ open, children }: ModalRootProps) => {
  useScrollLock(open);
  if (!open) return null;
  // createPortal(children, domNode, key?)
  return createPortal(
    <div className="fixed inset-0 z-50">{children}</div>,
    document.body
  );
};

const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-40" onClick={onClick}></div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-2xl p-5 shadow-lg w-[50%] max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const Header = ({ title }: HeaderProps) => {
  return <h1 className="text-2xl font-bold mb-3">{title}</h1>;
};

const Body = ({ children }: BodyProps) => {
  return <div>{children}</div>;
};

const Footer = ({ children }: FooterProps) => {
  return <div className="flex gap-3 mt-4 justify-end">{children}</div>;
};

const CancelButton = ({ children, onClick }: ModalButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex-1 bg-gray-200 rounded-md font-bold p-3 w-full hover:bg-gray-300 cursor-pointer"
    >
      {children}
    </button>
  );
};

const ConfirmButton = ({ children, onClick }: ModalButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex-1 bg-orange-500 rounded-md font-bold p-3 w-full text-white hover:bg-orange-600 cursor-pointer"
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

export default Modal;
