import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    alias: {
      // this will match a file
      '$storybook/docs': './.storybook/components/docs/index.ts',
      '$storybook/stories': './.storybook/components/stories/index.ts',
      $lib: './src/lib',
      '$lib/*': './src/lib/*',
    },
  },
}

export default config
