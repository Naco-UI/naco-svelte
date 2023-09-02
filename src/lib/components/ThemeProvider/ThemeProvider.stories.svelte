<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import { Button } from '$lib/index.ts'

  import ThemeProvider from './ThemeProvider.svelte'
</script>

<Meta title="ThemeProvider" component={ThemeProvider} argTypes={{
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
}}/>

<Template id="base" let:args>
  <ThemeProvider {...args}>
    <Button>
      Click me
    </Button>
  </ThemeProvider>
</Template>

<Story
  template="base"
  id="base"
  name="Base ThemeProvider"
/>
