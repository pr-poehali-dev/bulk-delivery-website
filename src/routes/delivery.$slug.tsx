import { createFileRoute, redirect } from "@tanstack/react-router";
import LandingPage from "@/pages/LandingPage";
import { materialsGroup } from "@/data/materials";
import { landingJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/delivery/$slug")({
  loader: ({ params }) => {
    const item = materialsGroup.items.find((i) => i.slug === params.slug);
    if (!item) throw redirect({ to: "/delivery", replace: true });
    return { slug: item.slug };
  },
  head: ({ loaderData }) => {
    const item = loaderData ? materialsGroup.items.find((i) => i.slug === loaderData.slug) : undefined;
    if (!item) return {};
    return seoHead({
      title: item.metaTitle,
      description: item.metaDescription,
      keywords: item.keywords,
      path: `/delivery/${item.slug}`,
      jsonLd: landingJsonLd(item),
    });
  },
  component: DeliveryLanding,
});

function DeliveryLanding() {
  return <LandingPage group={materialsGroup} />;
}
