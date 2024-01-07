<script context="module">
  import NacoTheme from './NacoTheme.svelte'

  export const meta = {
    title: 'Components/NacoTheme',
    component: NacoTheme,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import Stack from '../Stack/Stack.svelte'
  import Typography from '../Typography/Typography.svelte'
</script>

<Story
  args={{
    manifest: {
      prefix: 'theme-preview',
      common: {
        color: {
          background: 'var(--color-content-accent)',
        },
      },
    },
  }}
  let:args
  name="Basic"
>
  <NacoTheme {...args} let:os let:scheme>
    <div class="theme-preview">
      <Stack align="center" justify="center" fullHeight>
        <Typography color="white">{os}</Typography>
        <Typography color="white">{scheme}</Typography>
      </Stack>
    </div>
  </NacoTheme>
</Story>

<style lang="scss">
  .theme-preview {
    height: 100px;
    background-color: var(--theme-preview-color-background);
  }
</style>
