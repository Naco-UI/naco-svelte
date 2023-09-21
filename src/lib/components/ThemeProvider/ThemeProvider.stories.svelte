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

<Story name="Mixins">
  <div class="theme-mixins-example">—</div>
</Story>

<style lang="scss">
  .theme-mixins-example {
    color: var(--color-content-primary);
  }

  @include mac('.theme-mixins-example') {
    &::before {
      content: 'macOS';
    }
  }

  @include linux('.theme-mixins-example') {
    &::before {
      content: 'Linux';
    }
  }

  @include dark {
    .theme-mixins-example {
      &::after {
        content: 'Dark';
      }
    }
  }

  @include light('.theme-mixins-example::after') {
    content: 'Light';
  }
</style>
