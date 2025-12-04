import { type SectionItem } from "../components";
import { 오리 } from "../assets";
import type { Product } from "../types/mypage";

export const productMockItems = [
  {
    id: "1",
    title: "안녕하세요.물건사라",
    price: "450,000원",
    location: "성수동",
    timeAgo: "5분 전",
    imageUrl: 오리,
    chats: 3,
    likes: 10,
  },
];

export const mockItems = [
  {
    title: "따끈한 붕어빵 생각나는 계절",
    subtitle: "붕어빵 가계 가까이 가면 당근머니 받아요",
    imageurl:
      "https://marketplace.canva.com/tGj-U/MAGw80tGj-U/1/tl/canva-bungeoppang-MAGw80tGj-U.png",
  },
  {
    title: "빵지순례 지도 만드실 분",
    subtitle: "총 4,000만원 상당 선물 드려요",
    imageurl:
      "https://img.lovepik.com/png/20231102/Chocolate-Chip-Cookie-Candy-House-cartoon-candy-snow-house-Christmas_459592_wh1200.png",
  },
  {
    title: "테슬라 1대 쏩니다",
    subtitle: "내 차 조회하면 테슬라 모델 Y 드려요",
    imageurl:
      "https://cdn-icons-png.freepik.com/256/3097/3097144.png?semt=ais_white_label",
  },
  {
    title: "테슬라 0원부터 빵집 지도까지",
    subtitle: "남녀노소 모두 참여 가능해요",
    imageurl:
      "https://cdn-icons-png.freepik.com/256/3097/3097144.png?semt=ais_white_label",
  },
];

export const mockUsers = [
  { id: 1, nickname: "우디", temperature: 36.5 },
  { id: 2, nickname: "버즈", temperature: 37.1 },
  { id: 3, nickname: "제시", temperature: 36.1 },
];

export const dealMenuItems: SectionItem[] = [
  { icon: "receipt", label: "판매내역" },
  { icon: "shoppingBasket", label: "구매내역" },
  { icon: "gemini", label: "내 물건 가격 찾기" },
  { icon: "bookMarked", label: "중고거래 가계부" },
];

export const interestMenuItems: SectionItem[] = [
  { icon: "likeOutline", label: "관심목록", to: "likelist" },
  { icon: "priceTag", label: "키워드 알림 설정" },
];

export const activityMenuItems: SectionItem[] = [
  { icon: "notebook", label: "내 동네생활 글" },
];

export const settingMenuItems: SectionItem[] = [
  { icon: "location", label: "내 동네 설정" },
  { icon: "target", label: "동네 인증하기" },
  { icon: "setting", label: "웹 설정" },
];

export const supportMenuItems: SectionItem[] = [
  { icon: "megaphone", label: "공지사항" },
  { icon: "headset", label: "고객센터" },
  { icon: "paperPlane", label: "의견 남기기" },
  { icon: "carrot", label: "오이 더 알아보기" },
  { icon: "infoCircle", label: "약관 및 정책" },
];

// 찜한 상품 목데이터
export const likedProducts: Product[] = [
  {
    id: 1,
    title: "주토피아 닉 주디 팝시클 닉 당근 주디 인형 키링 가방고리",
    price: 12000,
    image: "https://via.placeholder.com/300",
    isLiked: true,
    category: "피규어/인형",
    tags: ["주토피아", "닉", "주디", "인형", "키링"],
    likeCount: 12,
    chatCount: 3,
    location: "삼성1동",
    timeAgo: "2시간 전",
    status: "on-sale",
  },
];

// 전체 상품 목데이터 (추천 계산용)
export const allProducts: Product[] = [
  {
    id: 1,
    title: "주토피아 닉 주디 팝시클 닉 당근 주디 인형 키링 가방고리",
    price: 12000,
    image: "https://via.placeholder.com/300",
    isLiked: true,
    category: "피규어/인형",
    tags: ["주토피아", "닉", "주디", "인형", "키링"],
    likeCount: 12,
    chatCount: 3,
    location: "삼성1동",
    timeAgo: "2시간 전",
    status: "on-sale",
  },
  {
    id: 2,
    title: "디즈니 주토피아 주디 닉 클로하우저 인형",
    price: 4000,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "주디", "닉", "클로하우저", "디즈니"],
    likeCount: 8,
    chatCount: 1,
    location: "역삼동",
    timeAgo: "30분 전",
    status: "on-sale",
  },
  {
    id: 3,
    title: "[디즈니 정품 신상] 주토피아2 주디 인형 키링",
    price: 4500,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "주디", "디즈니", "정품", "키링"],
    likeCount: 15,
    chatCount: 5,
    location: "강남구",
    timeAgo: "1시간 전",
    status: "on-sale",
  },
  {
    id: 4,
    title: "주토피아 인형 주디, 닉",
    price: 18000,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "주디", "닉", "인형"],
    likeCount: 20,
    chatCount: 7,
    location: "서초동",
    timeAgo: "3시간 전",
    status: "on-sale",
  },
  {
    id: 5,
    title: "주토피아 닉 1개 주디 1개",
    price: 5000,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "닉", "주디"],
    likeCount: 6,
    chatCount: 2,
    location: "잠실동",
    timeAgo: "45분 전",
    status: "on-sale",
  },
  {
    id: 6,
    title: "주토피아 키링 인형 세트 (새상품)",
    price: 5000,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "키링", "인형", "세트"],
    likeCount: 9,
    chatCount: 4,
    location: "송파동",
    timeAgo: "1시간 전",
    status: "on-sale",
  },
  {
    id: 7,
    title: "세타필 주토피아 주디 인형 키링 스티커",
    price: 4000,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "주디", "키링", "스티커"],
    likeCount: 7,
    chatCount: 1,
    location: "삼성동",
    timeAgo: "2시간 전",
    status: "on-sale",
  },
  {
    id: 8,
    title: "주토피아 닉 주디 플러시 인형 대형",
    price: 25000,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "닉", "주디", "플러시", "인형"],
    likeCount: 18,
    chatCount: 6,
    location: "역삼동",
    timeAgo: "4시간 전",
    status: "on-sale",
  },
  {
    id: 9,
    title: "디즈니 주토피아 피규어 컬렉션",
    price: 15000,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "디즈니", "피규어", "컬렉션"],
    likeCount: 11,
    chatCount: 3,
    location: "강남구",
    timeAgo: "5시간 전",
    status: "on-sale",
  },
  {
    id: 10,
    title: "주토피아 주디 경찰관 코스튬 인형",
    price: 8000,
    image: "https://via.placeholder.com/300",
    isLiked: false,
    category: "피규어/인형",
    tags: ["주토피아", "주디", "경찰관", "코스튬", "인형"],
    likeCount: 13,
    chatCount: 4,
    location: "서초동",
    timeAgo: "6시간 전",
    status: "on-sale",
  },
];
