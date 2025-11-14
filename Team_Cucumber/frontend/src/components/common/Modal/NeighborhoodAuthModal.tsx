// 동네인증 모달
import ConfirmModal from "./ConfirmModal";

interface NeighborhoodAuthModalProps {
  onClose: () => void;
  region: string;
  onConfirm: () => void; // 동네 인증 로직
}

const NeighborhoodAuthModal = ({
  onClose,
  region,
  onConfirm,
}: NeighborhoodAuthModalProps) => {
  return (
    <ConfirmModal
      onClose={onClose}
      onConfirm={onConfirm}
      title="동네인증"
      confirmButtonText="동네인증하기"
      cancelButtonText="취소"
    >
      <p>글을 작성하려면 {region}동의 동네인증이 필요해요.</p>
    </ConfirmModal>
  );
};

export default NeighborhoodAuthModal;
