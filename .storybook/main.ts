import type { StorybookConfig } from '@storybook/sveltekit'
import { mergeConfig } from 'vite'

const version = process.env.NACO_VERSION ?? ''

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.svelte'],
  staticDirs: [{ from: '../images', to: '/images' }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        NACO_VERSION: version,
      },
      server: {
        fs: {
          allow: [`${process.cwd()}/docs`],
        },
      },
    })
  },
}
export default config
