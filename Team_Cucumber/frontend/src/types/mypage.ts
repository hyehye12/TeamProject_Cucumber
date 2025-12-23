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

export interface ReviewTag {
  text: string;
  count: number;
}

export interface Review {
  id: number;
  reviewerName: string;
  role: string;
  location: string;
  timeAgo: string;
  content: string;
}