import { create } from "zustand";
import type { ToastStoreType, ToastType } from "../types";

// 초기값
const initialToast: ToastType = {
  msg: "",
};

export const useToastStore = create<ToastStoreType>((set) => ({
  // 초기 토스트 값
  toast: initialToast,
  // 토스트 설정
  setToast: (toast: ToastType) => {
    set(() => ({ toast }));
  },
  // 토스트 비우기
  clearToast: () => {
    set(() => ({ toast: initialToast }));
  },
  // 토스트 여닫기 상태
  isOpen: false,
  // 토스 여닫기 상태 변경
  setIsOpen: (isOpen: boolean) => {
    set(() => ({
      isOpen,
    }));
  },
}));
