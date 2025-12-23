import { Button } from "../../components/common";
import { useTabContext } from "../../components/common/Tabs/context";

interface TabSwitcherProps {
    targetTab: string;
}

export const TabSwitcher = ({ targetTab }: TabSwitcherProps) => {
    const { setSelection } = useTabContext();
    return (
        <Button
            onClick={() => setSelection(targetTab)}
            className="w-full bg-gray-100 text-black font-bold py-4 rounded-lg hover:bg-gray-200"
        >
            {targetTab === "neighborhood-transactions" ? "동네 거래 보러가기" : "내 거래 보러가기"}
        </Button>
    );
};

