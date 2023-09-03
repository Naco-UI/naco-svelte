import { create } from '@storybook/theming'

export const theme = create({
  base: 'light',
  brandTitle: 'Naco UI',
  brandImage: '/images/logo-storybook.svg',
  fontBase:
    '"SF Pro Display",system-ui,-apple-system,BlinkMacSystemFont,"Helvetica Neue","Helvetica","Arial",sans-serif',
  brandTarget: '_self',
})
