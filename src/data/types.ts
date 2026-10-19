export interface LandingSpec {
  label: string;
  value: string;
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingSeoBlock {
  title: string;
  paragraphs: string[];
}

export interface LandingQuantityField {
  label: string;
  unit: string;
  defaultValue: number;
  min: number;
}

export interface LandingItem {
  slug: string;
  name: string;
  icon: string;
  price: string;
  priceUnit: string;
  shortDesc: string;
  heroDesc: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  orderLabel: string;
  quantityField?: LandingQuantityField;
  specs: LandingSpec[];
  applications: string[];
  advantages: string[];
  seoBlocks: LandingSeoBlock[];
  faq: LandingFaq[];
  related?: string[];
}

export interface LandingGroup {
  basePath: string;
  parentPath: string;
  parentLabel: string;
  items: LandingItem[];
}
