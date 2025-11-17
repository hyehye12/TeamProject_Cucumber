import React, { createRef, useRef } from "react";
import { useLocation, type Location } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type Animation = "slide-left" | "slide-right";

interface PageTransitionProps {
  animation?: Animation;
  timeout?: number;
  className?: string;
  unmountOnExit?: boolean;
  children: (fixedLocation: Location) => React.ReactNode;
}

//페이지 전환 컴포넌트 내부에서 처리
export const PageTransition = ({
  animation = "slide-left",
  timeout = 700,
  className: _className,
  unmountOnExit = true,
  children,
}: PageTransitionProps) => {
  const location = useLocation();

  // css transition을 활용하기 위해 페이지가 들어가고 나가는 것에 값을 정해줘야 제대로 작동. ref 활용.
  const refs = useRef<Map<string, React.RefObject<HTMLDivElement | null>>>(
    new Map()
  );

  const getNodeRef = (key: string): React.RefObject<HTMLDivElement | null> => {
    const existingRef = refs.current.get(key);
    if (existingRef) return existingRef;

    const newRef = createRef<HTMLDivElement | null>();
    refs.current.set(key, newRef);
    return newRef;
  };

  const nodeRef = getNodeRef(location.key);

  const className = ["min-h-[50vh] will-change-transform", _className].join(
    " "
  );

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        nodeRef={nodeRef}
        classNames={animation}
        timeout={timeout}
        unmountOnExit={unmountOnExit}
      >
        <div ref={nodeRef} className={className}>
          {children(location)} {/*fixedLocation*/}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};
