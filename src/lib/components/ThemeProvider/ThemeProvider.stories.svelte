<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import Button from '../Button/Button.svelte'
  import ThemeProvider from './ThemeProvider.svelte'
</script>

<Meta
  title="Components/ThemeProvider"
  component={ThemeProvider}
  argTypes={{
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
  }}
/>

<Template id="base" let:args>
  <ThemeProvider {...args}>
    <Button>Click me</Button>
  </ThemeProvider>
</Template>

<Story template="base" name="Basic" />
