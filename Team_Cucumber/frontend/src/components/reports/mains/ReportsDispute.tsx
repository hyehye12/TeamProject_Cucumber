import { ReportsLayout } from "../../../layout";
import {
  BlockUserChecker,
  ChatroomItem,
  ReportsButton,
  ReportsMainTitle,
  useReportState,
} from "../..";
import type { ReportChatroomType } from "../../../types";
import { useState } from "react";

const userChatroomList: ReportChatroomType[] = [
  {
    id: "1",
    user: {
      profileUrl: "",
      name: "행식",
    },
    title: "갤럭시 노트9 128g",
  },
  {
    id: "2",
    user: {
      profileUrl: "",
      name: "무무",
    },
    title: "노트 9팜니다",
  },
  {
    id: "3",
    user: {
      profileUrl: "",
      name: "이여",
    },
    title: "갤럭시 노트9 512G 팝니다.",
  },
];

const ReportsDispute = () => {
  const [selected, setSelected] = useState("");

  useReportState();

  const handleSelection = (id: string) => {
    setSelected(id);
  };

  return (
    <ReportsLayout>
      <ReportsLayout.Main>
        <ReportsMainTitle title="거래 대상자와의 채팅을 선택해주세요." />
        <p className="text-gray-400">채팅방을 최신순으로 보여드릴게요.</p>
        <ul className="space-y-4">
          {userChatroomList.map((chatroom) => (
            <li key={chatroom.id}>
              <ChatroomItem
                chatroom={chatroom}
                onClick={handleSelection}
                checked={chatroom.id === selected}
              />
            </li>
          ))}
        </ul>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer>
        <ReportsButton disabled={!selected} />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsDispute;
