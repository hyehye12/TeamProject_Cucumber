export interface ToastType {
  msg: string;
}

export interface ToastStoreType {
  toast: ToastType;
  setToast: (toast: ToastType) => void;
  clearToast: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
