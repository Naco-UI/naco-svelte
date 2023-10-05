<script context="module">
  import { isDark, isLinux, isMac } from './environment.js'
  export const meta = {
    title: 'Utilities/environment',
    component: isDark,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import Stack from '$lib/components/Stack/Stack.svelte'
  import Toggle from '$lib/components/Toggle/Toggle.svelte'
  import Typography from '$lib/components/Typography/Typography.svelte'
</script>

<Story name="Basic">
  <Stack gap="l" maxWidth={200}>
    <Stack justify="space-between" align="center" direction="horizontal" gap="l">
      <Typography>Dark</Typography>
      <Toggle disabled checked={$isDark} />
    </Stack>
    <Stack justify="space-between" align="center" direction="horizontal" gap="l">
      <Typography>macOS</Typography>
      <Toggle disabled checked={isMac} />
    </Stack>
    <Stack justify="space-between" align="center" direction="horizontal" gap="l">
      <Typography>Linux</Typography>
      <Toggle disabled checked={isLinux} />
    </Stack>
  </Stack>
</Story>
