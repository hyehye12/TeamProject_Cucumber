import { twMerge } from "tailwind-merge";
import { Checkbox } from "../common";
import { useReportsContext } from "./context";
import type { ChangeEvent } from "react";

interface BlockUserChecker {
  className?: string;
}

export const BlockUserChecker = ({
  className: _className,
}: BlockUserChecker) => {
  const { isBlockUser, setIsBlockUser } = useReportsContext();

  const className = twMerge("my-8 space-y-2", _className);

  const handleBlock = (e: ChangeEvent<HTMLInputElement>) => {
    setIsBlockUser(e.target.checked);
  };

  return (
    <div className={className}>
      <div className="flex gap-2">
        <Checkbox
          id="block-user"
          onChange={handleBlock}
          checked={isBlockUser}
          className="text-xl"
        />
        <label htmlFor="block-user">이 사용자의 글 보지 않기</label>
      </div>
      <p className="text-gray-400">{`('나의 당근 > 설정 > 게시글 미노출 사용자 관리'에서 취소할 수 있습니다.)`}</p>
    </div>
  );
};
