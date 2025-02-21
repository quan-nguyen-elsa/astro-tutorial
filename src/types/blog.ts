export interface ImageResponse {
  url: string;
  width: number;
  height: number;
}

export interface BlogGraphQLResponse {
  nodes: Blog[];
  pageInfo: {
    pageCount: number;
    page: number;
  };
}

export interface Blog {
  author: {
    name: string;
  };
  publishedAt: string;
  slug: string;
  title: string;
  description: string;
  cover: ImageResponse;
  category: {
    slug: string;
    name: string;
  };
}

export interface PaginationInfo {
  page: number;
  pageCount: number;
}

export interface Post {
  author: {
    name: string;
  };
  publishedAt: string;
  slug: string;
  title: string;
  description: string;
  cover: ImageResponse;
  blocks: (SingleMedia | MultiMedia | Quote | RichText)[];
}

export interface SingleMedia {
  file: {
    url: string;
    width: number;
    height: number;
  };
}
export interface MultiMedia {
  files: ImageResponse[];
}
export interface Quote {
  title: string;
  body: string;
}
export interface RichText {
  body: string;
}
