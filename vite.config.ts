import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

const testExclude = [
  '**/node_modules/**',
  'src/app.d.ts',
  '.storybook/**/*',
  'storybook-static/**/*',
  'scripts/**/*',
  '**/*.{md,jsx,tsx,js,cjs}',
  '**/*.stories.svelte',
  '**/*.types.ts',
  '**/index.ts',
  '**/.svelte-kit/**',
  '**/.pnpm/**',
]

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    exclude: [...configDefaults.exclude, ...testExclude],
    include: ['src/**/*.test.ts'],
    environment: 'happy-dom',
    coverage: {
      exclude: [...testExclude],
      enabled: true,
      provider: 'v8',
      reporter: ['html'],
    },
  },
  resolve: {
    alias: {
      '$storybook/docs': `${resolve(__dirname, '.storybook/components/docs')}`,
      '$storybook/stories': `${resolve(__dirname, '.storybook/components/stories')}`,
    },
  },
})
