import { Button, Icon, ProductCard } from "../../components/common";
import BottomSheet from "../../components/common/BottomSheet/BottomSheet";

interface NeighborhoodSelectionSheetProps {
    open: boolean;
    onClose: () => void;
    neighborhoodName: string;
    nearbyCount: number;
    onReset?: () => void;
    onApply?: () => void;
}

export const NeighborhoodSelectionSheet = ({
    open,
    onClose,
    neighborhoodName,
    nearbyCount,
    onReset,
    onApply,
}: NeighborhoodSelectionSheetProps) => {
    const handleReset = () => {
        onReset?.();
        onClose();
    };

    const handleApply = () => {
        onApply?.();
        onClose();
    };

    return (
        <BottomSheet open={open} onClose={onClose}>
            <div className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <ProductCard.Bold className="text-lg">알림 받을 동네 ?</ProductCard.Bold>
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <Icon name="questionCircle" className="text-gray-600 text-sm" />
                    </div>
                </div>
                <ProductCard.Contents className="text-sm text-gray-500 mb-4">
                    {neighborhoodName}과 근처 동네 {nearbyCount}개
                </ProductCard.Contents>

                {/* 지도 영역 */}
                <div className="w-full h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 opacity-50"></div>
                    <ProductCard.Contents className="text-gray-500 relative z-10">지도 영역</ProductCard.Contents>
                </div>

                {/* 범위 슬라이더 */}
                <div className="mb-6">
                    <div className="flex justify-between mb-2">
                        <ProductCard.Contents className="text-sm">가까운 동네</ProductCard.Contents>
                        <ProductCard.Contents className="text-sm">먼 동네</ProductCard.Contents>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="80"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                            background: "linear-gradient(to right, #f97316 0%, #f97316 80%, #e5e7eb 80%, #e5e7eb 100%)",
                        }}
                    />
                </div>

                {/* 버튼 */}
                <div className="flex gap-3">
                    <Button
                        onClick={handleReset}
                        className="flex-1 bg-gray-100 text-black font-bold py-3 rounded-lg hover:bg-gray-200"
                    >
                        초기화
                    </Button>
                    <Button
                        onClick={handleApply}
                        className="flex-1 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600"
                    >
                        적용하기
                    </Button>
                </div>
            </div>
        </BottomSheet>
    );
};

