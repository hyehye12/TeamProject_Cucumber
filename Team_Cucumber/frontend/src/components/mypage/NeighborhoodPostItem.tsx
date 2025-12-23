import { ProductCard } from "../../components/common";

interface NeighborhoodPost {
    id: number;
    title: string;
    content: string;
    location: string;
    timeAgo: string;
}

interface NeighborhoodPostItemProps {
    post: NeighborhoodPost;
    onClick: (id: number) => void;
}

export const NeighborhoodPostItem = ({ post, onClick }: NeighborhoodPostItemProps) => {
    return (
        <ProductCard
            className="px-4 py-4 border-b border-gray-100 hover:bg-gray-50"
            onClick={() => onClick(post.id)}
        >
            <div className="space-y-1">
                <ProductCard.Title className="text-base font-medium text-gray-900">
                    {post.title}
                </ProductCard.Title>
                <ProductCard.Title className="text-base text-gray-900">
                    {post.content}
                </ProductCard.Title>
                <ProductCard.Contents className="text-sm mt-2">
                    {post.location} · {post.timeAgo}
                </ProductCard.Contents>
            </div>
        </ProductCard>
    );
};

