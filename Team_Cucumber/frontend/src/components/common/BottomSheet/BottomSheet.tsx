import React, { useRef } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import useScrollLock from "../../../hooks/useScrollLock";
import { SheetTransition } from "../PageTransition";
import { twMerge } from "tailwind-merge";

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  timeout?: number;
  className?: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  onClose,
  children,
  timeout = 300,
  className: _className,
}) => {
  const className = twMerge(
    "rounded-t-2xl rounded-b-none w-full max-w-none p-5 shadow-lg bg-white",
    _className
  );
  // 바텀시트 영역에 붙일 ref (CSSTransition용)
  const nodeRef = useRef<HTMLDivElement | null>(null);

  // 페이지 스크롤 잠금
  useScrollLock(open);

  // 포탈로 body에 바로 렌더링
  return createPortal(
    <div className="fixed inset-0 z-50 flex flex-col justify-end pointer-events-none">
      {/*  Overlay: 기존 Modal.Overlay 재사용 - 이건 그냥 딱 나타나기만 하고 안 올라옴 */}
      {open && (
        <Modal.Overlay
          className="flex-1 pointer-events-auto" // 필요하면 색/투명도 조절
          onClick={onClose} //배경 클릭 시 닫기
        />
      )}

      <SheetTransition
        in={open}
        timeout={timeout}
        animation="bottom-sheet"
        unmountOnExit
        nodeRef={nodeRef}
      >
        {/* 애니메이션 걸릴 실제 DOM 요소 */}
        <div
          ref={nodeRef}
          className="relative z-50 w-full max-w-none pointer-events-auto"
        >
          <Modal.Content className={className}>{children}</Modal.Content>
        </div>
      </SheetTransition>
    </div>,
    document.body
  );
};

export default BottomSheet;
