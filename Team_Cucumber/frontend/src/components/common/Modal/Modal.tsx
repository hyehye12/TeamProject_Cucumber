import type {
  ModalRootProps,
  HeaderProps,
  BodyProps,
  FooterProps,
  ModalButtonProps,
} from "./Modal.types";
import useScrollLock from "../../../hooks/useScrollLock";
import { createPortal } from "react-dom";

const ModalRoot = ({ open, children }: ModalRootProps) => {
  useScrollLock(open);

  if (!open) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
      <div
        className="bg-white rounded-2xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
  // createPortal(children, domNode, key?)
  return createPortal(modalContent, document.body);
};

const Header = ({ title }: HeaderProps) => {
  return <h1 className="text-2xl font-bold mb-3">{title}</h1>;
};

const Body = ({ children }: BodyProps) => {
  return <div>{children}</div>;
};

const Footer = ({ children }: FooterProps) => {
  return <div className="flex gap-3 mt-4">{children}</div>;
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
  Header,
  Body,
  Footer,
  CancelButton,
  ConfirmButton,
});

export default Modal;
