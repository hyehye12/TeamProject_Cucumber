import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, Tabs, ProductCard, Radio } from "../../../components/common";
import BottomSheet from "../../../components/common/BottomSheet/BottomSheet";
import { MyTransactionsTab } from "./MyTransactionsTab";
import { NeighborhoodTransactionsTab } from "./NeighborhoodTransactionsTab";

export const AccountBook = () => {
    const navigate = useNavigate();
    const [isPeriodSheetOpen, setIsPeriodSheetOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(2025);
    const [selectedMonth, setSelectedMonth] = useState(11);

    const years = [2023, 2024, 2025];
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const handleConfirm = () => {
        setIsPeriodSheetOpen(false);
        // 선택된 연도와 월로 데이터 업데이트 로직 추가 가능
    };

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Button
                        onClick={() => setIsPeriodSheetOpen(true)}
                        className="bg-transparent hover:bg-transparent flex items-center gap-1 ml-2 p-0"
                    >
                        <Header.Title className="text-xl font-bold">{selectedYear}년 {selectedMonth}월 가계부</Header.Title>
                        <Icon name="down" className="text-lg" />
                    </Button>
                </Header.Left>
                <Header.Right>
                    <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="share" className="text-2xl" />
                    </Button>
                </Header.Right>
            </Header>

            <Tabs.Root defaultValue="my-transactions" className="flex-1 flex flex-col min-h-0">
                <Tabs.List className="border-b border-gray-200 shrink-0">
                    <Tabs.Trigger value="my-transactions">내 거래</Tabs.Trigger>
                    <Tabs.Trigger value="neighborhood-transactions" className="relative">
                        동네 거래
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="my-transactions" className="flex-1 overflow-y-auto">
                    <MyTransactionsTab />
                </Tabs.Content>

                <Tabs.Content value="neighborhood-transactions" className="flex-1 overflow-y-auto">
                    <NeighborhoodTransactionsTab />
                </Tabs.Content>
            </Tabs.Root>

            {/* 푸터 */}
            <div className="px-4 pb-4 shrink-0">
                <ProductCard.Contents className="text-xs text-center">
                    {selectedMonth}월에 거래한 게시글을 대상으로 계산했어요.
                </ProductCard.Contents>
            </div>

            {/* 기간 선택 바텀시트 */}
            <BottomSheet
                open={isPeriodSheetOpen}
                onClose={() => setIsPeriodSheetOpen(false)}
            >
                <div className="pb-4">
                    <ProductCard.Bold className="text-lg mb-6">기간 조회</ProductCard.Bold>
                    
                    <div className="flex gap-4 mb-6">
                        {/* 연도 선택 */}
                        <div className="flex-1">
                            <div className="space-y-2 max-h-64 overflow-y-auto">
                                {years.map((year) => (
                                    <label
                                        key={year}
                                        className={`w-full flex items-center gap-2 py-3 px-4 rounded-lg cursor-pointer ${
                                            selectedYear === year
                                                ? "font-bold text-black bg-gray-100"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <Radio
                                            id={`year-${year}`}
                                            checked={selectedYear === year}
                                            onChange={() => setSelectedYear(year)}
                                        />
                                        <span>{year}년</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 월 선택 */}
                        <div className="flex-1">
                            <div className="space-y-2 max-h-64 overflow-y-auto">
                                {months.map((month) => (
                                    <label
                                        key={month}
                                        className={`w-full flex items-center gap-2 py-3 px-4 rounded-lg cursor-pointer ${
                                            selectedMonth === month
                                                ? "font-bold text-black bg-gray-100"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <Radio
                                            id={`month-${month}`}
                                            checked={selectedMonth === month}
                                            onChange={() => setSelectedMonth(month)}
                                        />
                                        <span>{month}월</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 확인 버튼 */}
                    <Button
                        onClick={handleConfirm}
                        className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600"
                    >
                        확인
                    </Button>
                </div>
            </BottomSheet>
        </div>
    );
};

