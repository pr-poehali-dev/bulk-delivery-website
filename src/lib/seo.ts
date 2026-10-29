import type { LandingItem } from "@/data/types";
import type { BlogPost } from "@/data/blog";

export const SITE_NAME = "РостовТехРезерв";

interface SeoInput {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  jsonLd?: object;
}

// Page meta for head(): title, description, keywords, og-tags, canonical, JSON-LD.
export function seoHead({ title, description, keywords, path, jsonLd }: SeoInput) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
  ];
  if (keywords) meta.push({ name: "keywords", content: keywords });
  return {
    meta,
    links: [{ rel: "canonical", href: path }],
    scripts: jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] : [],
  };
}

export function landingJsonLd(item: LandingItem): object {
  const numericPrice = item.price.replace(/\D/g, "");
  const faqLd = {
    "@type": "FAQPage",
    mainEntity: item.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const productLd: Record<string, unknown> = {
    "@type": "Product",
    name: item.name,
    description: item.heroDesc,
  };
  if (numericPrice) {
    productLd.offers = {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: numericPrice,
      availability: "https://schema.org/InStock",
    };
  }
  return { "@context": "https://schema.org", "@graph": [productLd, faqLd] };
}

export function blogPostJsonLd(post: BlogPost): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        inLanguage: "ru",
        author: { "@type": "Organization", name: "РостовТехРезерв" },
        publisher: { "@type": "Organization", name: "РостовТехРезерв" },
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
