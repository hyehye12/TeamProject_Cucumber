import Modal from "./Modal";

interface NeighborhoodAuthModalProps {
  open: boolean;
  region: string;
  onClose: () => void;
  onConfirm: () => void;
}

const NeighborhoodAuthModal = ({
  open,
  onClose,
  region,
  onConfirm,
}: NeighborhoodAuthModalProps) => {
  return (
    <Modal open={open}>
      <Modal.Header title="동네인증" />
      <Modal.Body>글을 작성하려면 {region}동의 동네인증이 필요해요.</Modal.Body>
      <Modal.Footer>
        <Modal.CancelButton onClick={onClose}>취소</Modal.CancelButton>
        <Modal.ConfirmButton onClick={onConfirm}>
          동네인증하기
        </Modal.ConfirmButton>
      </Modal.Footer>
    </Modal>
  );
};

export default NeighborhoodAuthModal;
