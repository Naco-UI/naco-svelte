import type { Parameters } from '@storybook/svelte'

import './global.css'
import { theme } from './theme'
import { withThemeProvider, globalTypes } from './decorators/withThemeProvider'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Documentation', 'Documentation/Development', 'Components', 'Actions'],
      includeName: true,
    },
  },
  docs: {
    theme,
  },
}

export { globalTypes }

export const decorators = [withThemeProvider]
