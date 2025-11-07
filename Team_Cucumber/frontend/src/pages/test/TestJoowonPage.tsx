import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

export const TestJoowonPage = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const regionName = "일원본";

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button className="w-1/2" onClick={handleModalOpen}>
        확인
      </Button>

      {/* 모달 닫기 */}
      {showModal && <Modal region={regionName} onClose={handleModalClose} />}
    </div>
  );
};
