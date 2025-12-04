import { ProductCard, Button, Icon } from "../common";
import { Link } from "react-router-dom";

type IconName = React.ComponentProps<typeof Icon>["name"];

export interface SectionItem {
  icon: IconName;
  label?: string;
  to?: string;
}

interface SectionProps {
  title?: string;
  items: SectionItem[];
}

export const MyPageMenuSection = ({ title, items }: SectionProps) => {
  return (
    <ProductCard className="flex flex-col m-4 w-auto h-auto gap-3 py-3 border-b bg-white border-gray-100 p-4 rounded-xl ">
      <ProductCard.Bold>{title}</ProductCard.Bold>

      {items.map((item) => {
        const button = (
          <Button
            key={item.label}
            className="bg-white hover:bg-gray-200 text-black text-xl flex flex-row items-center border-r-gray-100"
          >
            <Icon name={item.icon} className="mr-3" />
            {item.label}
            <Icon name="right" className="ml-auto text-gray-400" />
          </Button>
        );
        if (item.to) {
          return (
            <Link key={item.label} to={item.to}>
              {button}
            </Link>
          );
        }

        return button;
      })}
    </ProductCard>
  );
};
