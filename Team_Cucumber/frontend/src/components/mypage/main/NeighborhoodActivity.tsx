import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, Tabs, ProductCard } from "../../../components/common";
import { NeighborhoodPostItem } from "../NeighborhoodPostItem";

interface NeighborhoodPost {
    id: number;
    title: string;
    content: string;
    location: string;
    timeAgo: string;
}

export const NeighborhoodActivity = () => {
    const navigate = useNavigate();

    // 게시글 데이터 (실제로는 API에서 가져올 데이터)
    const writtenPosts: NeighborhoodPost[] = [
        {
            id: 1,
            title: "맛집 추천해주세요",
            content: "맛집추천할만한곳있나요?",
            location: "일원본동",
            timeAgo: "22초 전"
        }
    ];
    const commentedPosts: NeighborhoodPost[] = [];
    const savedPosts: NeighborhoodPost[] = [];

    const handlePostClick = (id: number) => {
        console.log("게시글 상세", id);
    };

    const handleWriteClick = () => {
        // 동네생활 글쓰기 페이지로 이동
    };

    const handleBrowseClick = () => {
        // 동네생활 둘러보기 페이지로 이동
    };

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">동네생활 활동</Header.Title>
                </Header.Left>
            </Header>

            <Tabs.Root defaultValue="written" className="flex-1 flex flex-col min-h-0">
                <Tabs.List className="border-b border-gray-200 shrink-0">
                    <Tabs.Trigger value="written">작성한 글</Tabs.Trigger>
                    <Tabs.Trigger value="commented">댓글단 글</Tabs.Trigger>
                    <Tabs.Trigger value="saved">저장한 글</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="written" className="flex-1 overflow-y-auto">
                    {writtenPosts.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center px-4">
                            <ProductCard.Contents className="text-gray-400 mb-8 mt-15 text-center">첫 동네 이야기를 이웃에게 알려주세요.</ProductCard.Contents>
                            <Button className="bg-gray-100 text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200" onClick={handleWriteClick}>
                                동네생활 글쓰기
                            </Button>
                        </div>
                    ) : (
                        <div>
                            {writtenPosts.map((post) => (
                                <NeighborhoodPostItem
                                    key={post.id}
                                    post={post}
                                    onClick={handlePostClick}
                                />
                            ))}
                        </div>
                    )}
                </Tabs.Content>

                <Tabs.Content value="commented" className="flex-1 overflow-y-auto">
                    {commentedPosts.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center px-4">
                            <ProductCard.Contents className="text-gray-400 mb-8 mt-15 text-center">댓글 단 글을 확인할 수 있어요.</ProductCard.Contents>
                            <Button className="bg-gray-100 text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200" onClick={handleBrowseClick}>
                                동네생활 둘러보기
                            </Button>
                        </div>
                    ) : (
                        <div>
                            {commentedPosts.map((post) => (
                                <NeighborhoodPostItem
                                    key={post.id}
                                    post={post}
                                    onClick={handlePostClick}
                                />
                            ))}
                        </div>
                    )}
                </Tabs.Content>

                <Tabs.Content value="saved" className="flex-1 overflow-y-auto">
                    {savedPosts.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center px-4">
                            <ProductCard.Contents className="text-gray-400 mb-8 mt-15 text-center">다시 보고 싶은 글을 저장하세요. 저장한글은 나만 볼 수 있어요.</ProductCard.Contents>
                            <Button className="bg-gray-100 text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200" onClick={handleBrowseClick}>
                                동네생활 둘러보기
                            </Button>
                        </div>
                    ) : (
                        <div>
                            {savedPosts.map((post) => (
                                <NeighborhoodPostItem
                                    key={post.id}
                                    post={post}
                                    onClick={handlePostClick}
                                />
                            ))}
                        </div>
                    )}
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};

