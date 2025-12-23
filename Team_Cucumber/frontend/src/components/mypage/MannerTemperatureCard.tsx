import { Icon, ProductCard } from "../../components/common";

interface MannerTemperatureCardProps {
    temperature: number;
}

export const MannerTemperatureCard = ({ temperature }: MannerTemperatureCardProps) => {
    const temperaturePercentage = ((temperature - 30) / 20) * 100;

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
                <ProductCard.Bold className="text-lg text-gray-900">매너온도</ProductCard.Bold>
                <Icon name="infoCircle" className="text-gray-400" />
            </div>
            <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-orange-500">{temperature}°C</div>
                <div className="text-3xl">😊</div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                <div 
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: `${temperaturePercentage}%` }}
                ></div>
            </div>
            <div className="space-y-3">
                <div>
                    <ProductCard.Contents className="text-sm mb-1">
                        재거래희망률 -% <span className="text-gray-400">표시될 만큼 충분히 거래하지 않았어요.</span>
                    </ProductCard.Contents>
                </div>
                <div>
                    <ProductCard.Contents className="text-sm mb-1">
                        응답률 -% <span className="text-gray-400">표시될 만큼 충분히 채팅하지 않았어요.</span>
                    </ProductCard.Contents>
                </div>
            </div>
        </div>
    );
};

