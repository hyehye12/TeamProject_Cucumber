import { useEffect } from "react";
import {
  Portal,
  PrevButton,
  Textarea,
  Toast,
  useToast,
} from "../../components";

export const TestNaraPage = () => {
  const msg = "안녕하세요";

  const toast = useToast();

  useEffect(() => {
    toast({
      msg,
    });
  }, []);

  const handlePrevClick = () => {
    window.alert("안녕");
  };

  return (
    <div>
      <div className="flex ">
        <div className="p-4 border">
          <p>이전 페이지 이동 버튼</p>
          <PrevButton onClick={handlePrevClick} />
        </div>
      </div>
      {/*  TODO : 토스트의 위치는 Portal에 의해서 변경할 것  */}
      <Portal className="absolute bottom-4 w-full px-4">
        <Toast />
      </Portal>
      <Textarea placeholder="안녕하세요." className="focus:outline-1" />
    </div>
  );
};
