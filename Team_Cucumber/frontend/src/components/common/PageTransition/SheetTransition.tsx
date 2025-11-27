import { CSSTransition } from "react-transition-group";

type Animation = "slide-left" | "slide-right" | "bottom-sheet" | "fade";

interface SheetTransitionProps {
  in: boolean;
  animation?: Animation;
  timeout?: number;
  className?: string;
  unmountOnExit?: boolean;
  nodeRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

export const SheetTransition = ({
  in: inProp,
  animation = "bottom-sheet",
  timeout = 700,
  className: _className,
  unmountOnExit = true,
  nodeRef,
  children,
}: SheetTransitionProps) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={timeout}
      classNames={animation}
      unmountOnExit={unmountOnExit}
      nodeRef={nodeRef}
      mountOnEnter // ✅ 처음엔 아예 렌더 X, in=true 될 때 처음 렌더
      appear
    >
      {children}
    </CSSTransition>
  );
};
