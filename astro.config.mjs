import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, {
        target: '_blank',
        rel: ['noopener', 'noreferrer'],
        content: { type: 'text', value: ' (opens in new tab)' },
        contentProperties: { className: ['sr-only'] },
      }],
    ],
  },
});
