export const GET_SECTIONS = `
query Sections($filters: SectionFiltersInput) {
  sections(filters: $filters) {
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
    }
  }
}
`;

export const GET_INFLUENCERS = `query Influencers {
  influencers {
    title,
    site_code,
    description,
    slug,
    content,
    template {
      slug
    }
  }
}`;
