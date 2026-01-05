import type { ReactNode } from "react";
import { ProductCard } from "../../components/common";

interface StatCardProps {
    title: string;
    subtitle?: string;
    value: string | number | ReactNode;
    description?: string;
    footer?: string;
    icon?: ReactNode;
    iconBgColor?: string;
}

export const StatCard = ({
    title,
    subtitle,
    value,
    description,
    footer,
    icon,
    iconBgColor = "bg-gray-50",
}: StatCardProps) => {
    const isValueString = typeof value === "string";
    const isValueNumber = typeof value === "number";
    const isValueReactNode = !isValueString && !isValueNumber;

    return (
        <div className="bg-white m-4 p-6 rounded-lg shadow-sm border border-gray-100">
            {subtitle && (
                <div className="flex items-center justify-between mb-4">
                    <ProductCard.Bold className="text-lg">{title}</ProductCard.Bold>
                </div>
            )}
            {!subtitle && <ProductCard.Bold className="text-lg mb-4">{title}</ProductCard.Bold>}
            {subtitle && <ProductCard.Contents className="text-sm mb-4">{subtitle}</ProductCard.Contents>}
            {icon && (
                <div className={`${iconBgColor} p-4 rounded-lg mb-4 flex items-center justify-center h-32`}>
                    {icon}
                </div>
            )}
            {isValueReactNode ? (
                value
            ) : isValueString && value.includes("원") ? (
                <div className="text-3xl font-bold text-orange-500 mb-2">{value}</div>
            ) : (
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{subtitle || title}</span>
                    <span className="text-lg font-bold text-orange-500">{value}</span>
                </div>
            )}
            {description && (
                <ProductCard.Contents className="text-sm text-gray-600 leading-relaxed mb-2">
                    {description}
                </ProductCard.Contents>
            )}
            {footer && <ProductCard.Contents className="text-xs text-gray-400">{footer}</ProductCard.Contents>}
        </div>
    );
};

