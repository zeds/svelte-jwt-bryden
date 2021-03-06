import adapter from '@sveltejs/adapter-auto';
// import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
//config.kit.target is no longer required, and should be removed
    //target: '#svelte',

    vite: {
      build: {
        minify: false
      },
      ssr: {
        noExternal: [/^@material\//, /^@smui(?:-extra)?\//],
      }
    }
	}
};

export default config;
