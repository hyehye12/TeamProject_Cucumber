import { Button, Icon, ProductCard } from "../../components/common";

interface ProfileCardProps {
    nickname: string;
    userId: string;
    joinDate: string;
    locationInfo: string;
    locationDetail: string;
}

export const ProfileCard = ({ nickname, userId, joinDate, locationInfo, locationDetail }: ProfileCardProps) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <Icon name="user" className="text-3xl text-gray-400" />
                </div>
                <div className="flex-1">
                    <ProductCard.Bold className="text-xl text-gray-900 mb-1">{nickname}</ProductCard.Bold>
                    <ProductCard.Contents className="text-sm mb-1">{userId}</ProductCard.Contents>
                    <ProductCard.Contents className="text-sm mb-4">최근 3일 이내 활동</ProductCard.Contents>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Icon name="bookMarked" className="text-base" />
                            <ProductCard.Contents>{joinDate}</ProductCard.Contents>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Icon name="location" className="text-base" />
                            <ProductCard.Contents>{locationInfo}</ProductCard.Contents>
                        </div>
                        <ProductCard.Contents className="text-xs text-gray-400 ml-6">{locationDetail}</ProductCard.Contents>
                    </div>
                </div>
            </div>
            <Button className="w-full bg-gray-100 text-black font-medium py-3 rounded-lg hover:bg-gray-200">
                프로필 수정
            </Button>
        </div>
    );
};

