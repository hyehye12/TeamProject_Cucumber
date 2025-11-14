import { useToastStore } from "../../../stores";
import type { ToastType } from "../../../types";

export const useToast = () => {
  const { setToast, setIsOpen } = useToastStore();

  const toast = (t: ToastType) => {
    setToast(t);
    setIsOpen(true);
  };

  return toast;
};
