export interface LocationData {
  code: string;
  name: string;
  level: "sido" | "sigungu" | "eupmyeondong";
  parentCode?: string;
  parentName?: string; // 상위 지역명 저장용
}

export interface RandomLocationGroup {
  sido: string;
  sigungu: string;
  dongs: string[];
}
