import type { Parameters } from '@storybook/svelte'

import './global.css'
import { theme } from './theme'
import { withThemeProvider, globalTypes } from './decorators/withThemeProvider'

export const parameters: Parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Documentation',
        'Documentation/Development',
        'Components',
        'Layouts',
        'Actions',
        'Utilities',
      ],
      includeName: true,
    },
  },
  docs: {
    theme,
  },
}

export { globalTypes }

export const decorators = [withThemeProvider]
