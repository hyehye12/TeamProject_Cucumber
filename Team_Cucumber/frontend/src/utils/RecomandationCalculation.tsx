import type { Product } from "../types";

{
  /*제목에서 키워드 추출*/
}
const extractKeywordsFromTitle = (title: string): string[] => {
  const keywords = title
    .replace(/[^\w\sㄱ-ㅎ가-힣]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 1);

  return keywords;
};

{
  /*
  찜한 상품 기반 추천 상품 계산
 */
}
export const getRecommendedProducts = (
  allProducts: Product[],
  likedProducts: Product[],
  limit: number = 6
): Product[] => {
  if (likedProducts.length === 0) {
    return allProducts
      .filter((p) => !p.isLiked)
      .sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0))
      .slice(0, limit);
  }

  const likedTags = new Set<string>();
  const likedCategories = new Set<string>();
  const totalPrice = likedProducts.reduce((sum, p) => sum + p.price, 0);
  const avgPrice = totalPrice / likedProducts.length;

  likedProducts.forEach((product) => {
    if (product.tags.length > 0) {
      product.tags.forEach((tag) => likedTags.add(tag));
    } else {
      const keywords = extractKeywordsFromTitle(product.title);
      keywords.forEach((keyword) => likedTags.add(keyword));
    }
    likedCategories.add(product.category);
  });

  const scoredProducts = allProducts
    .filter((product) => !product.isLiked)
    .map((product) => {
      let score = 0;

      if (likedCategories.has(product.category)) {
        score += 10;
      }

      const productKeywords =
        product.tags.length > 0
          ? product.tags
          : extractKeywordsFromTitle(product.title);

      productKeywords.forEach((keyword) => {
        if (likedTags.has(keyword)) {
          score += 2;
        }
      });

      const priceDiff = Math.abs(product.price - avgPrice);
      if (priceDiff < 3000) {
        score += 3;
      } else if (priceDiff < 5000) {
        score += 2;
      } else if (priceDiff < 10000) {
        score += 1;
      }

      if (score <= 10) {
        score += (product.likeCount || 0) * 0.05;
      }

      return { product, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (Math.abs(b.score - a.score) < 0.1) {
        return Math.random() - 0.5;
      }
      return b.score - a.score;
    });

  return scoredProducts.slice(0, limit).map((item) => item.product);
};
