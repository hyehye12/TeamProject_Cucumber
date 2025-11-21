import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import NeighborhoodAuthModal from "../../components/common/Modal/NeighborhoodAuthModal";
import { useState } from "react";

export const TestJoowonPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button className="w-1/2" onClick={() => setShowModal(true)}>
        확인
      </Button>
      <Modal open={showModal}>
        <Modal.Overlay onClick={() => setShowModal(false)} />
        <Modal.Content>
          <Modal.Header title="모달 title" />
          <Modal.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            cupiditate obcaecati modi quasi, inventore iusto impedit aliquam
            voluptatibus ea. Eum amet saepe vel fugiat sed hic id nihil voluptas
            culpa.
          </Modal.Body>
          <Modal.Footer>
            <Modal.CancelButton onClick={() => setShowModal(false)}>
              취소
            </Modal.CancelButton>
            <Modal.ConfirmButton onClick={handleConfirm}>
              확인
            </Modal.ConfirmButton>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {/* <NeighborhoodAuthModal
        open={showModal}
        onClose={() => setShowModal(false)}
        region="역삼"
        onConfirm={handleConfirm}
      /> */}
    </div>
  );
};
