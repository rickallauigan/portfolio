import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
  const posts = (
    await getCollection('writing', ({ data }) => !data.draft)
  ).sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
  return rss({
    title: 'Rick Allauigan — Engineering writing',
    description:
      'Build logs and technical writing about backend, platform, DevSecOps, and cloud security.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.id}/`,
    })),
  });
}
