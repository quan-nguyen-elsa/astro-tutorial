export const GET_ARTICLES = `query Articles($locale: I18NLocaleCode, $sort: [String]) {
  articles(locale: $locale, sort: $sort) {
    title
    slug
    description
    cover {
      url
      alternativeText
    }
    createdAt
    category {
      name
      slug
    }
    layout
    author {
      name
      avatar {
        url
      }
    }
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
      avatar {
        url
      }
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

export const GET_CATEGORIES = `query Categories($locale: I18NLocaleCode) {
  categories(locale: $locale) {
    name
    slug
  }
}`;

export const GET_ARTICLES_IN_CATEGORY = `query Articles($filters: ArticleFiltersInput) {
  articles(filters: $filters) {
    title
    slug
  }
}`;
