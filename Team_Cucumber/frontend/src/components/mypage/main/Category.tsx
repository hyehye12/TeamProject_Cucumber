import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, ProductCard } from "../../../components/common";
import type { icons } from "../../../components/common/Icon/icons";

type IconName = keyof typeof icons;

interface Category {
    id: string;
    name: string;
    icon: IconName;
    bgColor: string;
}

const categories: Category[] = [
    { id: "digital", name: "디지털기기", icon: "laptop", bgColor: "bg-blue-50" },
    { id: "furniture", name: "가구/인테리어", icon: "armchair", bgColor: "bg-amber-50" },
    { id: "baby", name: "유아동", icon: "baby", bgColor: "bg-pink-50" },
    { id: "women-clothing", name: "여성의류", icon: "shirt", bgColor: "bg-rose-50" },
    { id: "women-accessories", name: "여성잡화", icon: "bag", bgColor: "bg-gray-50" },
    { id: "men-fashion", name: "남성패션/잡화", icon: "shirt", bgColor: "bg-green-50" },
    { id: "appliances", name: "생활가전", icon: "microwave", bgColor: "bg-slate-50" },
    { id: "kitchen", name: "생활/주방", icon: "chefHat", bgColor: "bg-orange-50" },
    { id: "sports", name: "스포츠/레저", icon: "tent", bgColor: "bg-emerald-50" },
    { id: "hobby", name: "취미/게임/음반", icon: "gamepad", bgColor: "bg-purple-50" },
    { id: "beauty", name: "뷰티/미용", icon: "lipstick", bgColor: "bg-pink-50" },
    { id: "plant", name: "식물", icon: "plant", bgColor: "bg-green-50" },
    { id: "processed-food", name: "가공식품", icon: "bottle", bgColor: "bg-red-50" },
    { id: "health-food", name: "건강기능식품", icon: "bottle", bgColor: "bg-yellow-50" },
    { id: "pet", name: "반려동물용품", icon: "pets", bgColor: "bg-amber-50" },
    { id: "ticket", name: "티켓/교환권", icon: "ticket", bgColor: "bg-yellow-50" },
    { id: "book", name: "도서", icon: "book", bgColor: "bg-blue-50" },
    { id: "children-book", name: "유아도서", icon: "childCare", bgColor: "bg-pink-50" },
    { id: "other", name: "기타 중고물품", icon: "box", bgColor: "bg-gray-50" },
    { id: "buy", name: "삽니다", icon: "priceTag", bgColor: "bg-orange-50" },
];

export const Category = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">중고거래</Header.Title>
                </Header.Left>
            </Header>

            <div className="flex-1 overflow-y-auto px-4 py-4">
                {/* 상단 기능 버튼 */}
                <div className="flex gap-3 mb-6">
                    <Button className="flex-1 bg-pink-50 text-black py-4 rounded-lg hover:bg-pink-100 flex flex-col items-center gap-2">
                        <div className="flex gap-1">
                            <Icon name="sparkles" className="text-orange-500 text-xl" />
                            <Icon name="sparkles" className="text-orange-500 text-xl" />
                        </div>
                        <ProductCard.Contents className="text-xs">AI 물품 추천</ProductCard.Contents>
                    </Button>
                    <Button className="flex-1 bg-blue-50 text-black py-4 rounded-lg hover:bg-blue-100 flex flex-col items-center gap-2">
                        <Icon name="scanLine" className="text-blue-600 text-2xl" />
                        <ProductCard.Contents className="text-xs">내 물건 가격 찾기</ProductCard.Contents>
                    </Button>
                    <Button className="flex-1 bg-pink-50 text-black py-4 rounded-lg hover:bg-pink-100 flex flex-col items-center gap-2">
                        <Icon name="flame" className="text-red-500 text-2xl" />
                        <ProductCard.Contents className="text-xs">인기매물</ProductCard.Contents>
                    </Button>
                </div>

                {/* 카테고리 섹션 */}
                <div className="mb-6">
                    <ProductCard.Bold className="text-lg mb-4">카테고리</ProductCard.Bold>
                    <div className="grid grid-cols-4 gap-4">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                className="bg-transparent hover:bg-transparent p-0 flex flex-col items-center gap-2"
                            >
                                <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center`}>
                                    <Icon name={category.icon} className="text-2xl text-gray-700" />
                                </div>
                                <ProductCard.Contents className="text-xs text-center">{category.name}</ProductCard.Contents>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

