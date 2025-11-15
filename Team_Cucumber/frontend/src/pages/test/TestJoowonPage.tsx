import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import NeighborhoodAuthModal from "../../components/common/Modal/NeighborhoodAuthModal";
import { useState } from "react";

export const TestJoowonPage = ({}) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button className="w-1/2" onClick={() => setShowModal(true)}>
        확인
      </Button>
      {/* <Modal open={showModal}>
        <Modal.Header title="모달 title" />
        <Modal.Body>모달 body</Modal.Body>
        <Modal.Footer>
          <Modal.CancelButton onClick={() => setShowModal(false)}>
            취소
          </Modal.CancelButton>
          <Modal.ConfirmButton onClick={handleConfirm}>
            확인
          </Modal.ConfirmButton>
        </Modal.Footer>
      </Modal> */}
      <NeighborhoodAuthModal
        open={showModal}
        onClose={() => setShowModal(false)}
        region="역삼"
        onConfirm={handleConfirm}
      />
    </div>
  );
};
