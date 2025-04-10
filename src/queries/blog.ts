export const GET_ARTICLES = `query Articles($locale: I18NLocaleCode) {
  articles(locale: $locale) {
    title
    slug
    layout
  }
}`;

export const GET_ARTICLE = `query Articles($locale: I18NLocaleCode, $filters: ArticleFiltersInput) {
  articles(locale: $locale, filters: $filters) {
    title
    slug
    layout
    description
    cover {
      url
      alternativeText
    }
    publishedAt
    author {
      name
    }
    blocks {
      ... on ComponentSharedQuote {
        body
        title
      }
      ... on ComponentSharedMedia {
        file {
          url
        }
      }
      ... on ComponentSharedRichText {
        body
      }
    }
    sidebar {
      related_posts_title
    }
  }
}`;

export const GET_ARTICLES_IN_CATEGORY = `query Articles($filters: ArticleFiltersInput) {
  articles(filters: $filters) {
    title
    slug
  }
}`;
