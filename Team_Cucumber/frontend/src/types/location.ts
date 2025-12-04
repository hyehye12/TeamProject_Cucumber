export interface LocationData {
  code: string;
  name: string;
  level: "sido" | "sigungu" | "eupmyeondong";
  parentCode?: string;
}

export interface RandomLocationGroup {
  sido: string;
  sigungu: string;
  dongs: string[];
}
