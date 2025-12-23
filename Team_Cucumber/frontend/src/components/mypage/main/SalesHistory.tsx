import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, Tabs } from "../../../components/common";
import { allProducts } from "../../../data/mypage";
import { ProductListItem } from "../ProductListItem";

export const SalesHistory = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white h-screen flex flex-col">
            <Header className="bg-white">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                </Header.Left>
            </Header>
            <div className="px-4 py-2">
                <Header.Title className="text-xl font-bold">나의 판매내역</Header.Title>
            </div>

            <div className="flex gap-2 p-4">
                <Button className="flex-1 bg-orange-100 text-orange-500 font-bold py-3 rounded-md hover:bg-orange-200">
                    글쓰기
                </Button>
                <Button className="flex-1 bg-gray-100 text-black font-bold py-3 rounded-md hover:bg-gray-200 flex items-center justify-center gap-1">
                    <Icon name="gemini" />내 물건 가격 찾기
                </Button>
            </div>

            <Tabs.Root defaultValue="on-sale" className="flex-1 flex flex-col">
                <Tabs.List className="border-b border-gray-200">
                    <Tabs.Trigger value="on-sale">판매중</Tabs.Trigger>
                    <Tabs.Trigger value="sold-out">거래완료</Tabs.Trigger>
                    <Tabs.Trigger value="hidden">숨김</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content
                    value="on-sale"
                    className="flex-1 flex flex-col overflow-y-auto"
                >
                    {allProducts.length > 0 ? (
                        allProducts.map((product) => (
                            <ProductListItem key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-400">
                            <p>게시글이 없어요.</p>
                        </div>
                    )}
                </Tabs.Content>
                <Tabs.Content
                    value="sold-out"
                    className="flex-1 flex flex-col overflow-y-auto"
                >
                    {allProducts.length > 0 ? (
                        allProducts.map((product) => (
                            <ProductListItem 
                                key={product.id} 
                                product={product} 
                                showBadge={true}
                                badgeStatus="sold-out"
                            />
                        ))
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-400">
                            <p>게시글이 없어요.</p>
                        </div>
                    )}
                </Tabs.Content>
                <Tabs.Content
                    value="hidden"
                    className="flex-1 flex flex-col items-center justify-center text-gray-400"
                >
                    <p>게시글이 없어요.</p>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};
