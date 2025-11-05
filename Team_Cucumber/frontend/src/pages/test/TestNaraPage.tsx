import { useEffect } from "react";
import { Toast, useToast } from "../../components";

export const TestNaraPage = () => {
  const msg = "안s";

  const toast = useToast();

  useEffect(() => {
    toast({
      msg,
    });
  }, [msg]);

  return (
    <div>
      <Toast />
    </div>
  );
};
