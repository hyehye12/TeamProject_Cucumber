import { type SectionItem } from "../components";
import { 오리 } from "../assets";

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
