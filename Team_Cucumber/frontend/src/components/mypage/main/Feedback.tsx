import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, ProductCard, Textarea } from "../../../components/common";

export const Feedback = () => {
    const navigate = useNavigate();
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [feedbackText, setFeedbackText] = useState("");

    const ratings = [
        { value: 1, label: "매우 아쉬움" },
        { value: 2, label: "" },
        { value: 3, label: "" },
        { value: 4, label: "" },
        { value: 5, label: "매우 만족" },
    ];

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="close" className="text-2xl" />
                    </Button>
                </Header.Left>
            </Header>

            <div className="flex-1 overflow-y-auto px-4 py-4">
                {/* 제목 */}
                <div className="mb-6">
                    <div className="flex items-center gap-2">
                        <ProductCard.Bold className="text-xl">오이에 대한 의견을 알려주세요</ProductCard.Bold>
                    </div>
                </div>

                {/* 안내 문구 */}
                <div className="mb-6">
                    <ProductCard.Contents className="text-base mb-4">
                        당근에 대한 의견을 자유롭게 남겨주실 수 있어요.
                    </ProductCard.Contents>
                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                            <ProductCard.Contents className="text-sm text-gray-600">
                                • 보내주신 의견에 대한 답변을 드리지 않아요. 답변이 필요하시면 고객센터에서 문의해주세요.
                            </ProductCard.Contents>
                        </li>
                        <li>
                            <Button 
                                onClick={() => navigate("/mypage/customer-center")}
                                className="bg-transparent hover:bg-transparent p-0 text-left"
                            >
                                <ProductCard.Contents className="text-sm text-gray-600">
                                    [고객센터 바로가기]
                                </ProductCard.Contents>
                            </Button>
                        </li>
                    </ul>
                </div>

                {/* 만족도 평가 */}
                <div className="mb-6">
                    <ProductCard.Bold className="text-base mb-4">
                        1. 당근 앱 사용에 대한 전반적인 만족도를 알려주세요.
                    </ProductCard.Bold>
                    <div className="flex items-center justify-between mb-2">
                        {ratings.map((rating) => (
                            <div key={rating.value} className="flex flex-col items-center">
                                <Button
                                    onClick={() => setSelectedRating(rating.value)}
                                    className={`w-12 h-12 rounded-lg font-bold text-lg ${
                                        selectedRating === rating.value
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {rating.value}
                                </Button>
                                {rating.label && (
                                    <ProductCard.Contents className="text-xs mt-1 text-center">
                                        {rating.label}
                                    </ProductCard.Contents>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 자유 의견 입력 */}
                <div className="mb-6">
                    <ProductCard.Bold className="text-base mb-4">
                        2. 당근에 대해 가지고 있는 의견을 자유롭게 나눠주세요. (선택)
                    </ProductCard.Bold>
                    <Textarea
                        placeholder="답변을 적어주세요."
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        rows={8}
                        className="border border-gray-300"
                    />
                </div>

                {/* 추가 안내 문구 */}
                <div className="mb-6">
                    <ul className="space-y-2">
                        <li>
                            <ProductCard.Contents className="text-sm text-gray-600">
                                • 보내주신 의견에 대한 개선이나 기능 출시가 있을 때는 안내 메시지를 발송해 드려요.
                            </ProductCard.Contents>
                        </li>
                        <li>
                            <ProductCard.Contents className="text-sm text-gray-600">
                                • 궁금한 내용이 있으시다면 고객센터에서 물어보세요.
                            </ProductCard.Contents>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 제출하기 버튼 */}
            <div className="px-4 pb-4 shrink-0">
                <Button
                    className={`w-full py-4 rounded-lg font-bold ${
                        selectedRating !== null
                            ? "bg-orange-500 hover:bg-orange-600 text-white"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={selectedRating === null}
                    onClick={() => {
                        // 제출 로직 (UI만 구현)
                    }}
                >
                    제출하기
                </Button>
            </div>
        </div>
    );
};

