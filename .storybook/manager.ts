import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'My custom Storybook',
    brandUrl: 'https://example.com',
    brandImage: '/images/logo-storybook.svg',
    brandTarget: '_self',
  }),
});
