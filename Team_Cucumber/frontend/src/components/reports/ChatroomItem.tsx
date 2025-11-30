import { defaultProfileImage } from "../../assets";
import type { ReportChatroomType } from "../../types";
import { Radio } from "../common";

interface ChatroomItem {
  chatroom: ReportChatroomType;
  onClick: (id: string) => void;
  checked: boolean;
}

export const ChatroomItem = ({ chatroom, onClick, checked }: ChatroomItem) => {
  const { id, user, title } = chatroom;
  return (
    <button
      className="w-full flex justify-between items-center border border-gray-200 rounded-lg p-4"
      onClick={() => onClick(id)}
    >
      <label className="flex items-center gap-4" htmlFor={id}>
        <span className="w-fit h-fit bg-gray-100 rounded-full object-cover p-2">
          <img
            src={defaultProfileImage}
            alt={`${user.name}프로필 이미지`}
            className="w-12 h-12 rounded-full "
          />
        </span>
        <span>
          <p className="text-start">{user.name}</p>
          <p className="text-gray-400">{title}</p>
        </span>
      </label>
      <Radio id={id} name="chatroom" checked={checked} className="text-3xl" />
    </button>
  );
};
