import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, ProductCard } from "../../../components/common";

export const CustomerCenter = () => {
    const navigate = useNavigate();

    const serviceCategories = [
        "중고거래",
        "당근알바",
        "비즈프로필",
        "당근광고",
        "삶은당근 이벤트",
        "당근부동산",
        "커뮤니티",
        "당근중고차",
        "당근페이",
        "당근 포장주문"
    ];

    const handleCategoryClick = (category: string) => {
        console.log("카테고리 선택:", category);
        // 카테고리별 상세 페이지로 이동하거나 처리
    };

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">고객센터</Header.Title>
                </Header.Left>
            </Header>

            <div className="flex-1 overflow-y-auto px-4 py-6">
                {/* 챗봇 인사말 */}
                <div className="flex items-start gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                        <Icon name="carrot" className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                        <ProductCard.Title className="text-base text-gray-900 leading-relaxed">
                            안녕하세요, 우디 님! 궁금한 점을 빠르게 도와드리는 당근 AI예요. 어떤 서비스가 궁금하신가요?
                        </ProductCard.Title>
                    </div>
                </div>

                {/* 서비스 카테고리 버튼들 */}
                <div className="flex flex-wrap gap-2">
                    {serviceCategories.map((category, index) => (
                        <Button
                            key={index}
                            onClick={() => handleCategoryClick(category)}
                            className="px-4 py-2 rounded-full border border-gray-300 bg-white text-black text-sm font-medium hover:bg-gray-50 active:bg-gray-100"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

