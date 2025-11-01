import { useEffect } from "react";
import { Toast, useToast } from "../../components";

export const TestNaraPage = () => {
  const msg = "안녕하세요";

  const toast = useToast();

  useEffect(() => {
    toast({
      msg,
    });
  }, []);

  return (
    <div>
      <Toast />
    </div>
  );
};
