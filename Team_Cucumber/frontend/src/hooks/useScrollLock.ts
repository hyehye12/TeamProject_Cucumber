// 스크롤 방지 훅
import { useEffect } from "react";

const useScrollLock = (isLocked: boolean = true) => {
  useEffect(() => {
    // 훅이 잠금 상태가 아니면 아무것도 안 하고 종료
    if (!isLocked) return;

    // 클린업 시 원래 상태 복원을 위해 현재 body의 overflow 스타일을 캡처
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // 모달 열릴 때 body 가로, 세로 스크롤 방지(컴포넌트가 화면에서 나타날 때 실행)
    document.body.style.overflow = "hidden";

    return () => {
      // 잠금 해제 시 원래 스타일 복원(클린업 함수)
      // 컴포넌트가 화면에서 사라지기 직전, 또는 isLocked 값이 변경되어 이펙트가 재실행되기 직전에 실행
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]); // isLocked 값이 변경될 때마다 실행
};

export default useScrollLock;
