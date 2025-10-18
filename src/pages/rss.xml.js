import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "shanth.me",
    description: "Scribbles",
    site: context.site,
    items: posts
      .filter(p => !p.data.draft)
      .sort((a,b)=>new Date(b.data.pubDate)-new Date(a.data.pubDate))
      .map(p => ({
        title: p.data.title,
        pubDate: new Date(p.data.pubDate),
        description: p.data.description,
        link: `/blog/${p.slug}/`,
      })),
  });
}
