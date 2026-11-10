import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../consts';
import { getPapers } from '../lib/content';

export async function GET(context: APIContext) {
  const papers = await getPapers();
  return rss({
    title: `${SITE.title} · Paper Reviews`,
    description: SITE.description,
    site: context.site!,
    items: papers.map((p) => ({
      title: p.data.title,
      description: p.data.description ?? p.data.paper.title,
      pubDate: p.data.date,
      link: `/papers/${p.id}/`,
    })),
  });
}
