import { useReportsContext } from "../../reports";
import Modal from "./Modal";

export const ReportsModal = () => {
  const { isModalOpen, title, onClose, setReportInfo, setIsReported } =
    useReportsContext();

  const handleClick = () => {
    setReportInfo((prev) => ({
      ...prev,
      report_field_id: "",
      report_type_id: "",
    }));
    onClose();
  };

  return (
    <Modal open={isModalOpen}>
      <Modal.Overlay onClick={onClose} />
      <Modal.Content>
        <Modal.Header title={title} className="mb-8" />
        <Modal.Footer>
          <Modal.CancelButton onClick={handleClick}>취소</Modal.CancelButton>
          <Modal.ConfirmButton
            className="bg-red-400"
            onClick={() => setIsReported(true)}
          >
            신고하기
          </Modal.ConfirmButton>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
