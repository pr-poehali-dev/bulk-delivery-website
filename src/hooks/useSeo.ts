import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function useSeo({ title, description, keywords }: SeoProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    setMetaTag("name", "description", description);
    if (keywords) setMetaTag("name", "keywords", keywords);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + window.location.pathname);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, keywords]);
}

export function useJsonLd(data: object) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
}
