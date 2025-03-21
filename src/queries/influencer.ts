export const GET_SECTIONS = `
query Sections($filters: SectionFiltersInput, $locale: I18NLocaleCode) {
  sections(filters: $filters, locale: $locale) {
    layout
    section_list {
      ... on ComponentSharedBenefitSection {
        section_name
        section_title {
          span_wrap
          title
        }
        section_link {
          link
          name
        }
        benefit_image {
          url
        }
        list_item {
          item
        }
      }
      ... on ComponentSharedNovaFeature {
        section_name
        section_title {
          title
          span_wrap
        }
        section_link {
          link
          name
        }
        list_feature {
          title
          sub_title
          description
          thumbnail {
            url
          }
        }
      }
      ... on ComponentSharedFeedback {
        section_name
        section_title {
          span_wrap
          title
        }
        feedback {
          comment
          commenter
          commenter_avatar {
            url
          }
          commenter_job
        }
      }
      ... on ComponentSharedLearningPath {
        section_name
        section_title {
          span_wrap
          title
        }
        description
        image1
        image2
      }
      ... on ComponentInfluencerComparison {
        section_name
        section_title {
          span_wrap
          title
        }
        comparison_list {
          is_free
          is_true
          title
        }
      }
    }
  }
}
`;

export const GET_INFLUENCERS = `query Template($locale: I18NLocaleCode) {
  influencers(locale: $locale) {
    site_code
    title
    description
    slug
    locale
    template_section {
      template {
        slug
      }
      section_list {
        ... on ComponentSharedBenefitSection {
          section_name
          section_title {
            span_wrap
            title
          }
          section_link {
            link
            name
          }
          benefit_image {
            url
          }
          list_item {
            item
          }
        }
        ... on ComponentSharedNovaFeature {
          section_name
          section_title {
            title
            span_wrap
          }
          section_link {
            link
            name
          }
          list_feature {
            title
            sub_title
            description
            thumbnail {
              url
            }
          }
        }
        ... on ComponentSharedFeedback {
          section_name
          section_title {
            span_wrap
            title
          }
          feedback {
            comment
            commenter
            commenter_avatar {
              url
            }
            commenter_job
          }
        }
        ... on ComponentSharedLearningPath {
          section_name
          section_title {
            span_wrap
            title
          }
          description
          image1
          image2
        }
        ... on ComponentInfluencerComparison {
          section_name
          section_title {
            span_wrap
            title
          }
          comparison_list {
            is_free
            is_true
            title
          }
        }
      }
    }
  }
}`;
