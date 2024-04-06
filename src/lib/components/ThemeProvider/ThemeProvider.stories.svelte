<script context="module" lang="ts">
  import ThemeProvider from './ThemeProvider.svelte'

  export const meta = {
    title: 'Components/ThemeProvider',
    component: ThemeProvider,
    argTypes: {
      os: {
        defaultValue: 'mac',
        options: ['mac', 'linux'],
        control: 'select',
      },
      scheme: {
        defaultValue: 'light',
        options: ['light', 'dark'],
        control: 'select',
      },
    },
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { Button } from '../Button'
  import { Stack } from '../Stack'
  import Toggle from '../Toggle/Toggle.svelte'
  import { Typography } from '../Typography'
  import BodyThemeProvider from './BodyThemeProvider.svelte'
  import { createThemeContext } from './context'

  let bodyClass = false

  const themeContext = createThemeContext({ os: 'mac', scheme: 'light' })
</script>

<Story name="Basic" let:args>
  <ThemeProvider {...args}>
    <Button>Click me</Button>
  </ThemeProvider>
</Story>

<Story name="Body">
  <BodyThemeProvider context={themeContext} disabled={!bodyClass}>
    <Stack align="center" direction="horizontal" gap="m">
      <Toggle bind:checked={bodyClass} />
      <Typography>Set style classes on body element</Typography>
    </Stack>
  </BodyThemeProvider>
</Story>
