import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, ProductCard, Checkbox } from "../../../components/common";

export const KeywordEdit = () => {
    const navigate = useNavigate();
    const [keywords] = useState(["키움"]);
    const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);

    const handleToggleKeyword = (index: number) => {
        if (selectedKeywords.includes(index)) {
            setSelectedKeywords(selectedKeywords.filter((i) => i !== index));
        } else {
            setSelectedKeywords([...selectedKeywords, index]);
        }
    };

    const handleSelectAll = () => {
        if (selectedKeywords.length === keywords.length) {
            setSelectedKeywords([]);
        } else {
            setSelectedKeywords(keywords.map((_, index) => index));
        }
    };

    const handleDelete = () => {
        // 삭제 로직 (UI만 구현)
        console.log("삭제할 키워드:", selectedKeywords);
    };

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">키워드 편집</Header.Title>
                </Header.Left>
            </Header>

            <div className="flex-1 overflow-y-auto px-4 py-4">
                {keywords.length > 0 ? (
                    <div>
                        {keywords.map((keyword, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 py-4 border-b border-gray-100"
                            >
                                <Checkbox
                                    id={`keyword-${index}`}
                                    checked={selectedKeywords.includes(index)}
                                    onChange={() => handleToggleKeyword(index)}
                                />
                                <ProductCard.Bold className="text-base">{keyword}</ProductCard.Bold>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <ProductCard.Contents className="text-gray-400">등록된 키워드가 없어요.</ProductCard.Contents>
                    </div>
                )}
            </div>

            {/* 하단 버튼 */}
            <div className="px-4 pb-4 shrink-0 flex gap-3">
                <Button
                    onClick={handleSelectAll}
                    className="flex-1 bg-gray-100 text-black font-bold py-3 rounded-lg hover:bg-gray-200"
                >
                    전체 선택
                </Button>
                <Button
                    onClick={handleDelete}
                    disabled={selectedKeywords.length === 0}
                    className={`flex-1 font-bold py-3 rounded-lg ${
                        selectedKeywords.length > 0
                            ? "bg-gray-100 text-black hover:bg-gray-200"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                >
                    삭제하기
                </Button>
            </div>
        </div>
    );
};

