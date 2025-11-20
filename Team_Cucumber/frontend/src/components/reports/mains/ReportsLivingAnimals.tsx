import { Button } from "../../common";
import { BlockUserChecker } from "../BlockUserChecker";
import { useReportsContext } from "../context";

export const ReportsLivingAnimals = () => {
  const { handleBlock } = useReportsContext();

  return (
    <div className="p-8 flex flex-col h-full">
      <header>
        <p className="text-2xl font-bold">생명이 있는 동물</p>
      </header>
      <main className="flex-1">
        <BlockUserChecker />
      </main>
      <footer>
        <Button onClick={handleBlock} className="w-full">
          신고하기
        </Button>
      </footer>
    </div>
  );
};
