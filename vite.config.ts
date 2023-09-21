import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '$lib/components/ThemeProvider/themes/mixins/theme.mixins' as *;
        `,
      },
    },
  },
})
