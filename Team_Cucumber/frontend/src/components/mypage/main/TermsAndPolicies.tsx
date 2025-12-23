import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, ProductCard } from "../../../components/common";

export const TermsAndPolicies = () => {
    const navigate = useNavigate();

    const policyItems = [
        "서비스 이용약관",
        "당근 개인정보 처리방침",
        "운영정책",
        "당근비즈니스 개인정보 처리방침",
        "위치기반서비스 이용약관",
    ];

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">약관 및 정책</Header.Title>
                </Header.Left>
            </Header>

            <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-0">
                    {policyItems.map((item, index) => (
                        <ProductCard
                            key={index}
                            className="flex items-center justify-between py-4 border-b border-gray-100 bg-transparent hover:bg-gray-50 cursor-pointer"
                            onClick={() => {
                                // 클릭 로직 (UI만 구현)
                            }}
                        >
                            <ProductCard.Contents className="text-base text-black">{item}</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

