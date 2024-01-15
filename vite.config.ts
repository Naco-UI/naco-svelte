import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '$storybook/docs': `${resolve(__dirname, '.storybook/components/docs')}`,
      '$storybook/stories': `${resolve(__dirname, '.storybook/components/stories')}`,
    },
  },
})
