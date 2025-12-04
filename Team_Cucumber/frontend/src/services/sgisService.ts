import type { LocationData } from "@/types/location";

class SGISService {
  private consumerKey: string;
  private consumerSecret: string;

  // 타입 선언 + 초기값 할당 동시에. = null: 처음 시작할 때 값은 null
  private accessToken: string | null = null;
  private tokenExpiry: number | null = null;

  private baseURL: string = import.meta.env.DEV
    ? "/sgis-api" // 개발 환경: 프록시 서버
    : "https://sgisapi.kostat.go.kr"; // 배포 환경: 실제 API

  constructor() {
    // 환경변수에서 API 키 읽어오기
    this.consumerKey = import.meta.env.VITE_SGIS_KEY || "";
    this.consumerSecret = import.meta.env.VITE_SGIS_SECRET || "";
  }

  async getAccessToken(): Promise<string> {
    // 토큰이 유효하면 재사용
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    const url = `${this.baseURL}/OpenAPI3/auth/authentication.json?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;

    try {
      // API 호출 시도
      const response = await fetch(url); // 서버에 요청
      const data = await response.json(); // 받은 데이터를 JavaScript 객체로 변환

      if (data.result && data.result.accessToken) {
        const token: string = data.result.accessToken;

        // 재사용 위해서 클래스 속성에 저장
        this.accessToken = token;

        // 토큰 만료 시간을 23시간으로 계산
        this.tokenExpiry = Date.now() + 23 * 60 * 60 * 1000;
        return token;
      }
      throw new Error("토큰 발급 실패");
    } catch (error) {
      console.error("SGIS 인증 실패:", error);
      throw error;
    }
  }

  /**
   * 시도 목록 조회
   */
  async getSidoList(): Promise<LocationData[]> {
    const token = await this.getAccessToken();
    const url = `${this.baseURL}/OpenAPI3/addr/stage.json?accessToken=${token}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // 에러 체크
      if (!data.result || !Array.isArray(data.result)) {
        console.error("시도 목록 조회 실패:", data);
        return [];
      }

      return data.result.map((item: any) => ({
        code: item.cd,
        name: item.addr_name,
        level: "sido" as const,
      }));
    } catch (error) {
      console.error("시도 목록 조회 오류:", error);
      return [];
    }
  }

  /**
   * 시군구 목록 조회
   */
  async getSigunguList(sidoCode: string): Promise<LocationData[]> {
    const token = await this.getAccessToken();
    const url = `${this.baseURL}/OpenAPI3/addr/stage.json?accessToken=${token}&cd=${sidoCode}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // 에러 체크
      if (!data.result || !Array.isArray(data.result)) {
        console.warn(` 시군구 목록이 없습니다 (${sidoCode}):`, data);
        return [];
      }

      return data.result.map((item: any) => ({
        code: item.cd,
        name: item.addr_name,
        level: "sigungu" as const,
        parentCode: sidoCode,
      }));
    } catch (error) {
      console.error(`시군구 목록 조회 오류 (${sidoCode}):`, error);
      return [];
    }
  }

  /**
   * 읍면동 목록 조회
   */
  async getEupmyeondongList(sigunguCode: string): Promise<LocationData[]> {
    const token = await this.getAccessToken();
    const url = `${this.baseURL}/OpenAPI3/addr/stage.json?accessToken=${token}&cd=${sigunguCode}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // 에러 체크
      if (!data.result || !Array.isArray(data.result)) {
        console.warn(`⚠️ 읍면동 목록이 없습니다 (${sigunguCode}):`, data);
        return [];
      }

      return data.result.map((item: any) => ({
        code: item.cd,
        name: item.addr_name,
        level: "eupmyeondong" as const,
        parentCode: sigunguCode,
      }));
    } catch (error) {
      console.error(`❌ 읍면동 목록 조회 오류 (${sigunguCode}):`, error);
      return [];
    }
  }
}

// 객체 생성(싱글톤 인스턴스)
export const sgisService = new SGISService();
