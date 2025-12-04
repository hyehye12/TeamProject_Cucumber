export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  isLiked: boolean;
  category: string;
  tags: string[];
  likeCount?: number;
  chatCount?: number;
  location?: string;
  timeAgo?: string;
  status?: "on-sale" | "reserved" | "sold-out";
}
