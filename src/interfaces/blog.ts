export interface Article {
  title: string;
  slug: string;
  layout: string;
  cover: Record<string, any>;
  category: Record<string, any>;
  createdAt: string;
  description: string;
}

export interface ArticleResponse {
  articles: Article[];
}

export interface Category {
  name: string;
  slug: string;
}

export interface CategoryResponse {
  categories: Category[];
}
