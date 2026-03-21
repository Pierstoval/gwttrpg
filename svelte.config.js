import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import rehypeClassNames from 'rehype-class-names';
import remarkGfm from 'remark-gfm';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) => filename.includes('node_modules') ? undefined : { runes: true }
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [remarkGfm],
			rehypePlugins: [
				[rehypeClassNames, {'table': ' table '}],
			]
		}),
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
