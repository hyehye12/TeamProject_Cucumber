import {
  type ComponentProps,
  type HtmlHTMLAttributes,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "../Icon";

type ProductCardRootProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export const ProductCardRoot = ({
  children,
  className: _className,
  ...rest
}: ProductCardRootProps) => {
  const className = twMerge("flex gap-3 py-3", _className);
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

// 사진
type ProductCardImageProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export const ProductCardImage = ({
  children,
  className: _className,
  ...rest
}: ProductCardImageProps) => {
  const className = twMerge("relative overflow-hidden rounded-xl", _className);
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

//타이틀
type ProductCardTextProps = HtmlHTMLAttributes<HTMLParagraphElement>;

type ProductCardTitleProps = ProductCardTextProps & {
  children: ReactNode;
  className?: string;
};

export const ProductCardTitle = ({
  children,
  className: _className,
  ...rest
}: ProductCardTitleProps) => {
  const className = twMerge("line-clamp-2", _className);

  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

//가격
type ProductCardBoldProps = ProductCardTextProps & {
  children: ReactNode;
  className?: string;
};

export const ProductCardBold = ({
  children,
  className: _className,
  ...rest
}: ProductCardBoldProps) => {
  const className = twMerge("font-bold", _className);

  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

//지역 & 글 올린 시간
type ProductCardContentsProps = ProductCardTextProps & {
  children: ReactNode;
  className?: string;
};

export const ProductCardContents = ({
  children,
  className: _className,
  ...rest
}: ProductCardContentsProps) => {
  const className = twMerge("text-gray-500 text-xs", _className);

  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

//찜 & 채팅 수
type ProductCardStatProps = {
  chatCount?: number;
  likeCount?: number;
  className?: string;
  children?: ReactNode;
};

export const ProductCardStats = ({
  chatCount = 0,
  likeCount = 0,
  className: _className,
}: ProductCardStatProps) => {
  // 둘 다 0이면 안 보이게
  if (chatCount === 0 && likeCount === 0) return null;

  const className = twMerge("flex gap-2 text-[11px] text-gray-500", _className);

  return (
    <div className={className}>
      {chatCount > 0 && (
        <span className="inline-flex items-center gap-1">
          <Icon name="chat" className="w-3 h-3" />
          <span>{chatCount}</span>
        </span>
      )}

      {likeCount > 0 && (
        <span className="inline-flex items-center gap-1">
          <Icon name="likeFill" className="w-3 h-3" />
          <span>{likeCount}</span>
        </span>
      )}
    </div>
  );
};

// 거래 상태 뱃지
type ProductStatus = "on-sale" | "reserved" | "sold-out";

type ProductStatusBadgeProps = {
  status?: ProductStatus;
};

export const ProductStatusBadge = ({ status }: ProductStatusBadgeProps) => {
  if (!status || status === "on-sale") return null;

  const label = status === "reserved" ? "예약중" : "거래완료";
  const color =
    status === "reserved"
      ? "bg-orange-100 text-orange-700"
      : "bg-gray-100 text-gray-700";

  return (
    <span className={`rounded px-2 py-0.5 text-[11px] font-medium ${color}`}>
      {label}
    </span>
  );
};

//displayName
ProductCardRoot.displayName = "ProductCard";
ProductCardImage.displayName = "ProductCard.Image";
ProductCardTitle.displayName = "ProductCard.Title";
ProductCardBold.displayName = "ProductCard.Bold";
ProductCardContents.displayName = "ProductCard.Contents";
ProductStatusBadge.displayName = "ProductCard.Badge";
ProductCardStats.displayName = "ProductCard.Stat";

export default Object.assign(ProductCardRoot, {
  Image: ProductCardImage,
  Title: ProductCardTitle,
  Bold: ProductCardBold,
  Contents: ProductCardContents,
  Badge: ProductStatusBadge,
  Stat: ProductCardStats,
});
