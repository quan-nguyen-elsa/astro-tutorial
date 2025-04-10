export interface Article {
  title: string;
  slug: string;
  layout: string;
}

export interface ArticleResponse {
  articles: Article[];
}