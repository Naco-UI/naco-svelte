import { ThemeProvider } from '../../src/lib/components/ThemeProvider'

const schemeValues = [
  {
    title: 'Light',
    value: 'light',
    icon: 'circlehollow',
  },
  {
    title: 'Dark',
    value: 'dark',
    icon: 'circle',
  },
]

const osValues = [
  {
    title: 'macOS',
    icon: 'button',
    value: 'mac',
  },
  {
    title: 'Linux (GTK)',
    icon: 'cpu',
    value: 'linux',
  },
]

export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'Global color scheme',
    defaultValue: 'light',
    toolbar: {
      title: 'Scheme',
      items: schemeValues,
    },
    availableThemes: schemeValues,
  },
  os: {
    name: 'OS',
    description: 'Global OS theme',
    defaultValue: 'mac',
    toolbar: {
      title: 'OS',
      items: osValues,
    },
    availableThemes: schemeValues,
  },
}

export const withThemeProvider = (_, context) => {
  const os = context?.globals?.os;
  const scheme = context?.globals?.scheme;

  return {
    Component: ThemeProvider,
    props: { os, scheme }
  }
};
