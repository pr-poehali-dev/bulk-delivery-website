import type { BlogPost } from "./types";
import { postsMaterials } from "./postsMaterials";
import { postsEquipment } from "./postsEquipment";
import { postsGarbage } from "./postsGarbage";

export const blogPosts: BlogPost[] = [...postsMaterials, ...postsEquipment, ...postsGarbage].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
);

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const blogTags = ["Все", "Материалы", "Спецтехника", "Вывоз мусора", "Советы"] as const;

export type { BlogPost, BlogBlock, BlogTag } from "./types";
