import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  nickname: string;
  phone: string;
  location: string;
  profileImage?: string; // optional
  email?: string; // optional
  createdAt?: Date; // optional
}

interface AuthState {
  // 상태(변할 수 있는 데이터)
  user: User | null;
  isLoggedIn: boolean;

  // 액션(상태를 바꾸는 함수)
  login: (userData: User) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  setLocation: (location: string) => void;
}

// Zustand Store 생성
export const useAuthStore = create<AuthState>()(
  // persist(... , { name: "..." }): 브라우저의 localStorage에 자동 저장
  persist(
    // set(): 저장된 정보를 업데이트하는 함수
    (set) => ({
      // 초기 상태
      user: null,
      isLoggedIn: false,

      // 로그인 함수
      login: (userData) => {
        set({
          user: {
            ...userData,
            createdAt: userData.createdAt || new Date(),
          },
          isLoggedIn: true,
        });
      },

      // 로그아웃 함수
      logout: () => {
        set({
          user: null,
          isLoggedIn: false,
        });
      },

      // 프로필 업데이트
      updateProfile: (data) => {
        set((state) => ({
          // 새로 설정할 상태의 속성명: 현재 user 정보 ? {기존 정보 복사, 새 정보 덮어쓰기}
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },

      // 위치 설정
      setLocation: (location) => {
        set((state) => ({
          user: state.user ? { ...state.user, location } : null,
        }));
      },
    }),
    {
      name: "auth-storage", // localStorage 키 이름
    }
  )
);
