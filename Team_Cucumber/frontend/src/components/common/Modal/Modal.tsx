interface ModalProps {
  region: string;
  onClose: () => void;
}

const Modal = ({ region, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
      <div className="bg-white rounded-2xl p-5">
        <h1 className="text-2xl font-bold mb-3">동네인증</h1>
        <p>글을 작성하려면 {region}동의 동네인증이 필요해요.</p>
        {/* gap은 부모가 flex / grid일 때만 동작 */}
        <div className="flex gap-3 mt-4">
          {/* flex-1: 자식이 남은 공간 균등하게 차지 */}
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 rounded-md font-bold py-2  hover:bg-gray-100 cursor-pointer"
          >
            취소
          </button>
          <button className="flex-1 bg-orange-500 rounded-md font-bold py-2  text-white hover:bg-orange-300 cursor-pointer">
            동네인증하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
