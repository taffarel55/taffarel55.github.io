import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import sveltePreprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
				rehypeKatexSvelte,
				{
					macros: {
						'\\CC': '\\mathbb{C}',
						'\\vec': '\\mathbf'
					}
				}
			],
			remarkPlugins: [remarkMath]
		}),
		importAssets()
	]
};

export default config;
