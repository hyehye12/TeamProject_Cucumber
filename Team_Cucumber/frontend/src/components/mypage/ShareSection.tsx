import { Icon, ProductCard, Button } from "../../components/common";

interface ShareSectionProps {
    title: string;
    description: string;
}

export const ShareSection = ({ title, description }: ShareSectionProps) => {
    return (
        <div className="bg-white m-4 p-6 rounded-lg shadow-sm border border-gray-100">
            <ProductCard.Bold className="text-lg mb-2">{title}</ProductCard.Bold>
            <ProductCard.Contents className="text-xs mb-4">
                {description}
            </ProductCard.Contents>
            <div className="flex gap-4 justify-center">
                <Button className="bg-transparent hover:bg-transparent flex flex-col items-center gap-2 p-0">
                    <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
                        <ProductCard.Bold className="text-white text-sm">TALK</ProductCard.Bold>
                    </div>
                    <ProductCard.Contents className="text-xs">카카오톡</ProductCard.Contents>
                </Button>
                <Button className="bg-transparent hover:bg-transparent flex flex-col items-center gap-2 p-0">
                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                        <Icon name="share" className="text-white text-xl" />
                    </div>
                    <ProductCard.Contents className="text-xs">공유하기</ProductCard.Contents>
                </Button>
            </div>
        </div>
    );
};

