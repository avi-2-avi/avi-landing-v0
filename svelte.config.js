import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),

	],
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		paths: {
			base: dev ? '' : '/avi-landing-v0',
		},
		appDir: 'src'
	}
};

export default config;
