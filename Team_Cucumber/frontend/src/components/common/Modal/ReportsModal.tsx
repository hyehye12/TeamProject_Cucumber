import { useReportsContext } from "../../reports";
import Modal from "./Modal";

export const ReportsModal = () => {
  const { isModalOpen, title, onClose } = useReportsContext();

  return (
    <Modal open={isModalOpen}>
      <Modal.Overlay onClick={onClose} />
      <Modal.Content>
        <Modal.Header title={title} className="mb-8" />
        <Modal.Footer>
          <Modal.CancelButton onClick={() => onClose()}>
            취소
          </Modal.CancelButton>
          <Modal.ConfirmButton className="bg-red-400" onClick={() => {}}>
            신고하기
          </Modal.ConfirmButton>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
