<script context="module">
  import { hotkey } from './hotkey.action.js'
  export const meta = {
    title: 'Actions/hotkey',
    component: hotkey,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { Button, Stack, Typography } from '$lib/index.js'
</script>

<Story name="Basic">
  <Stack direction="horizontal">
    <button
      use:hotkey={'alt+KeyF'}
      on:click={() => alert('Hello from native button')}
    >
      Click me
    </button>
    <Typography>or press alt + f</Typography>
  </Stack>
</Story>

<Story name="Naco Button">
  <Stack direction="horizontal">
    <Button
      primary
      hotkey="cmd+KeyX"
      on:click={() => alert('Hello from Naco Button')}
    >
      Click me
    </Button>
    <Typography>or press cmd + x</Typography>
  </Stack>
</Story>
