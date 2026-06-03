import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { t } from '@/lib/utils';

export const GET: APIRoute = async ({ site }) => {
  const blogs = await getCollection('blogs');

  const sortedBlogs = blogs.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: t('rss.title'),
    description: t('rss.description'),
    site: site ?? '',
    stylesheet: '/rss/styles.xsl',
    items: sortedBlogs.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
    })),
  });
};