import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { BASE_PATH } from "../config";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${context.site}${BASE_PATH}posts/${post.data.slug}`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
