import type { ReportsCategoryType, ReportsListItemType } from "../types";

const reports: ReportsListItemType[] = [
  {
    text: "거래 금지 물품이에요.",
    path: "bans",
  },
  {
    text: "전문판매업자 같아요.",
    path: "professional",
  },
  {
    text: "사기인 것 같아요.",
    path: "frauds",
  },
  {
    text: "대리 결제(대출)/구매/판매 행위를 해요",
    path: "proxy",
    desc: "후불결제를 활용한 현금화 행위/상품권 예약 판매/대출 행위 등이 포함돼요.",
  },
  {
    text: "부적절한 행위가 있어요",
    path: "inappropriates",
  },
  {
    text: "작성자 신고하기",
    path: "users",
  },
];

const bans: ReportsListItemType[] = [
  {
    path: "living-animals",
    text: "생명이 있는 동물",
    desc: "식물 제외",
    type: "bans",
  },
  {
    path: "medical-products",
    text: "의약품 / 의료기기",
    desc: "체온계, 혈압계 제외 / 동물용 의약품, 한약, 다이어트약 포함",
    type: "bans",
  },
  {
    path: "trademark-infringement",
    text: "상표권 침해 물품",
    desc: "가품, 이미테이션, 위조품 등 포함",
    type: "bans",
  },
  {
    path: "copyright-infringement",
    text: "저작권 침해 물품",
    desc: "불법 음원, 불법 복제 소프트웨어·콘텐츠 포함",
    type: "bans",
  },
  {
    path: "youth-restricted-drugs",
    text: "청소년 유해약물",
    desc: "주류, 담배, 마약류, 칼라풍선류, 환각물질 포함",
    type: "bans",
  },
  {
    path: "youth-restricted-items",
    text: "청소년 유해물",
    desc: "음란물, 성인물, 성생활용품, 게임 아이템 포함",
    type: "bans",
  },
  {
    path: "health-supplement-guideline",
    text: "건강기능식품 개인간 거래 가이드라인 위반",
    desc: "소비기한 경과, 포장 개봉·훼손, 냉장 보관 필요 제품 등",
    type: "bans",
  },
  {
    path: "custom-made-products",
    text: "주문 제작 상품",
    desc: "예시: 주문 제작, 그림을 그려주는 행위 등",
    type: "bans",
  },
  {
    path: "", // personal-information
    text: "개인정보",
    desc: "신분증, 통장, 계정 포함",
    type: "bans",
  },
  {
    path: "prohibited-food",
    text: "거래 금지 식품",
    desc: "식중독·소분·포장 개봉·훼손, 소비기한 경과 등",
    type: "bans",
  },
  {
    path: "", // agricultural-products
    text: "농수산물 판매",
    desc: "",
    type: "bans",
  },
  {
    path: "prohibited-cosmetics",
    text: "거래 금지 화장품",
    desc: "직접 제조·소분, 용기 불량, 사용기한 경과, 화장품 샘플 포함",
    type: "bans",
  },
  {
    path: "dangerous-goods",
    text: "위험한 물건",
    desc: "총포·도검·화약류, 모의총포 및 부속품, 레이저포인터 포함",
    type: "bans",
  },
  {
    path: "hazardous-materials",
    text: "위험한 물질",
    desc: "농약, 유독물, 휘발유, 경유, LPG 포함",
    type: "bans",
  },
  {
    path: "military-police-uniforms",
    text: "군·경찰용품 / 제복류",
    desc: "유사경찰장비, 소방복 및 유사 제복류, 군마물품 포함",
    type: "bans",
  },
  {
    path: "", // government-supported-goods
    text: "정부 지원 물품",
    desc: "나라미, 지역사랑상품권, 온누리상품권, 각종 정부지원 바우처 포함",
    type: "bans",
  },
  {
    path: "", // glasses-contact-lenses
    text: "안경 / 콘택트렌즈",
    desc: "썬글라스, 컬러렌즈, 도수 선글라스, 도수 수정 포함",
    type: "bans",
  },
  {
    path: "prohibited-tickets",
    text: "거래 금지 티켓",
    desc: "오프라인 암표, 철도 승차권, 매크로 구매 티켓 재판매 행위",
    type: "bans",
  },
  {
    path: "fake-free-giveaway",
    text: "허위 무료 나눔",
    desc: "무료 나눔인 척하면서 물건을 팔거나, 가입·추천인 입력 등 행위 포함",
    type: "bans",
  },
  {
    path: "hazardous-products",
    text: "위해 우려 물품",
    desc: "KC인증 누락, 해외직구 후 1년 이내 제품, 리콜로 인한 화수·폐기 제품 포함",
    type: "bans",
  },
  {
    path: "others",
    text: "기타",
    desc: "현찰, 종량제봉투, 1,000만원 이상 상품, 100만원 이상 순금, 도난 물품 등",
    type: "bans",
  },
];

const frauds: ReportsListItemType[] = [
  {
    path: "fraud-seller-no-delivery",
    text: "[사기] 입금받은 판매자 잠적",
    desc: "물건 하자는 분쟁 조정 신청하기를 해주세요.",
    type: "frauds",
  },
  {
    path: "fraud-buyer-no-payment",
    text: "[사기] 물품을 전달받은 구매자 잠적",
    desc: "",
    type: "frauds",
  },
  {
    path: "fraud-external-channel",
    text: "[사기] 외부 채널 유도",
    desc: "",
    type: "frauds",
  },
];

const inappropriates: ReportsListItemType[] = [
  {
    path: "unusable-product",
    text: "사용할 수 없는 상품",
    desc: "",
    type: "inappropriates",
  },
  {
    path: "duplicate-post",
    text: "중복 게시글",
    desc: "",
    type: "inappropriates",
  },
  {
    path: "resell-at-higher-price",
    text: "나에게 구매 후 비싸게 재판매",
    desc: "",
    type: "inappropriates",
  },
  {
    path: "", // insult-or-defamation
    text: "비방 / 저격",
    desc: "",
    type: "inappropriates",
  },
  {
    path: "free-giveaway-or-money-request",
    text: "무료나눔 및 금전 요구 글",
    desc: "",
    type: "inappropriates",
  },
  {
    path: "suggest-report-item",
    text: "신고 항목 제안",
    desc: "",
    type: "inappropriates",
  },
];

const users: ReportsListItemType[] = [
  {
    path: "rude-user",
    text: "비매너 사용자예요",
    desc: "",
    type: "users",
  },
  {
    path: "dispute-during-transaction",
    text: "거래 중 분쟁이 발생했어요",
    desc: "",
    type: "users",
  },
  {
    path: "../frauds",
    text: "사기인 것 같아요",
    desc: "",
    type: "users",
  },
  {
    path: "abuse-or-hate-speech",
    text: "욕설 ・ 비방 ・ 혐오표현을 해요",
    desc: "",
    type: "users",
  },
  {
    path: "unwanted-romantic-chat",
    text: "연애 목적의 원하지 않는 대화를 시도해요",
    desc: "",
    type: "users",
  },
  {
    path: "inappropriate-sexual-behavior",
    text: "부적절한 성적 행위를 해요",
    desc: "",
    type: "users",
  },
  {
    path: "other-inappropriate-behavior",
    text: "기타 부적절한 행위가 있어요",
    desc: "",
    type: "users",
  },
  {
    path: "proxy-payment-or-trade",
    text: "대리 결제/구매/판매 행위를 해요",
    desc: "",
    type: "users",
  },
];

// 전문 판매업자
export const professional = {
  title: "전문판매업자 같아요",
  desc: `
  <div>
    <ul style="list-style-type: disc; margin-left:32px;">
      <li style="margin: 16px 0;">동일/유사한 제품을 단기간에 많이 판매하는 경우</li>
      <li style="margin: 16px 0;">동일 제품을 다양한 사이즈나 색상으로 판매하는 경우</li> 
      <li style="margin: 16px 0;">판매사이트, 카톡 채널, 네이버 밴드 등 영리를 위한 홍보하는 경우</li>  
      <li style="margin: 16px 0;">기타 영리적 목적이 확인되는 경우</li>  
    </ul>
    <div style="display:flex; flex-direction:column; gap: 20px;">
      <p>전문판매업자 사유로 신고할 수 있습니다.</p>
      <p>당근 팀에게 신고해주시면 신고해주신 내용을 바탕으로 전문판매업자 처리가 진행됩니다.</p>
      <p>자세한 내용은 '전문 판매업자 기준이 뭔가요?' 내용을 확인해주세요.</p>
    </div>
  </div>
`,
  type: "professional",
  isBlockUser: true,
  canReport: true,
};

export const proxy = {
  title: "대리 결제(대출)/구매/판매 행위를 해요",
  desc: `
대리 결제(대출)/구매/판매하는 행위를 하는 경우, 해당 신고 항목으로 신고할 수 있어요.

작성한 대리 결제(대출)/구매/판매 글로 인해 사기 피해가 발생한 경우,

대리로 게시글을 올린 계정도 사기 가해자로 간주하여
운영정책에 의해 최대 영구 이용이 제한될 수 있습니다.`,
  type: "proxy",
};

export const reportsLists: Record<
  ReportsCategoryType | "reports",
  ReportsListItemType[]
> = {
  reports,
  bans,
  professional: [],
  frauds,
  proxy: [],
  inappropriates,
  users,
};

export const reportsMap: Record<ReportsCategoryType, any> = {
  bans: {},
  professional,
  frauds: {},
  proxy,
  inappropriates: {},
  users: {},
};
