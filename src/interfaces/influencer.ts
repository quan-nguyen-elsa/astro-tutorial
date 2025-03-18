export interface Influencer {
  title: string;
  description: string;
  content?: any;
  slug: string;
  site_code: string;
  template: {
    slug: string;
  };
}

export interface InfluencerResponse {
  influencers: Influencer[]
}

interface Section {
  layout: string;
  section_list: SectionList[];
}

export interface SectionList extends Record<string, any> {
  section_name: string;
  section_title: Record<string, any>;
  section_link: Record<string, any>;
}

export interface SectionResponse {
  sections: Section[];
}

interface Variant {
  code: string;
  base_price: number;
  price: number;
  currency: string;
  discount_percent: number;
  interface: {
    package: string;
    package_name: string;
    is_featured: boolean;
    button_text: string;
  }
};

interface Catalog {
  code: string;
  variants: Variant[];
}

export interface WebsiteInfo {
  catalogs: Catalog[];
}