import { useEffect, type ReactNode } from "react";

interface ConfirmModalProps {
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  children?: ReactNode; // 유연성 위해서
  confirmButtonText: string;
  cancelButtonText: string;
}

const ConfirmModal = ({
  onClose,
  onConfirm,
  title,
  children,
  confirmButtonText,
  cancelButtonText,
}: ConfirmModalProps) => {
  // 스크롤 방지 기능
  useEffect(() => {
    // 모달이 열릴 때 body의 스크롤 방지
    document.body.style.overflow = "hidden";
    // 모달이 닫힐 때 body 스크롤 방지 해제
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []); // 빈 배열로 최초 마운트 시 한 번 실행

  // 확인 버튼 핸들러
  const handleConfirmClick = () => {
    // onConfirm prop이 전달되었을 때만 실행
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  // 취소 버튼
  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
      <div className="bg-white rounded-2xl p-5">
        {/* 제목 영역 */}
        {title && <h1 className="text-2xl font-bold mb-3">{title}</h1>}

        {/* 내용 영역 */}
        <div className="text-center">{children}</div>

        {/* 버튼 영역 */}
        <div className="flex gap-3 mt-4">
          {/* 취소 버튼 */}
          <button
            onClick={handleCancelClick}
            className="flex-1 bg-gray-200 rounded-md font-bold py-3 hover:bg-gray-300 cursor-pointer"
          >
            {cancelButtonText}
          </button>
          {/* 확인 버튼 */}
          <button
            onClick={handleConfirmClick}
            className="flex-1 bg-orange-500 rounded-md font-bold py-3 text-white hover:bg-orange-300 cursor-pointer"
          >
            {confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
