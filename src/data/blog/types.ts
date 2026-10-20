export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type BlogTag = "Материалы" | "Спецтехника" | "Вывоз мусора" | "Советы";

export interface BlogLink {
  label: string;
  href: string;
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  excerpt: string;
  date: string;
  dateISO: string;
  tag: BlogTag;
  readTime: string;
  blocks: BlogBlock[];
  faq: BlogFaq[];
  related: BlogLink[];
}
