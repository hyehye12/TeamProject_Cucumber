import Button from "../../components/common/Button/Button";
import ConfirmModal from "../../components/common/Modal/ConfirmModal";
import NeighborhoodAuthModal from "../../components/common/Modal/NeighborhoodAuthModal";
import { useState } from "react";

export const TestJoowonPage = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const regionName = "일원본";

  const handleConfirm = () => {
    console.log("확인 버튼");
  };

  // 버튼 컴포넌트(확인버튼) 클릭 시 모달 열림
  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button className="w-1/2" onClick={handleModalOpen}>
        확인
      </Button>

      {/* 모달 닫기 */}
      {showModal && (
        <NeighborhoodAuthModal
          onClose={() => setShowModal(false)}
          region={regionName}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};
