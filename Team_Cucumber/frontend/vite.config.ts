import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // /sgis-api로 시작하는 모든 요청
      "/sgis-api": {
        target: "https://sgisapi.kostat.go.kr", // 실제 API 주소
        changeOrigin: true, // Host 헤더를 target에 맞춤 -> 서버가 localhost가 아닌 실제 도메인에서 온 것처럼 인식
        rewrite: (path) => path.replace(/^\/sgis-api/, ""), // 경로에서 /sgis-api 제거
        secure: false, // SSL 인증서 검증 안 함 (개발용)
      },
    },
  },
});
