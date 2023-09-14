<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Button, Stack, Typography } from '$lib/index.js'

  import { hotkey } from './hotkey.action.js'
</script>

<Meta title="Actions/hotkey" component={hotkey} />

<Story name="Basic">
  <Stack direction="horizontal">
    <button
      use:hotkey={'alt+KeyF'}
      on:click={() => alert('Hello from native button')}
    >
      Click me
    </button>
    <Typography>or press shift + f</Typography>
  </Stack>
</Story>

<Story name="Naco Button">
  <Stack direction="horizontal">
    <Button
      primary
      hotkey="ctrl+KeyX"
      on:click={() => alert('Hello from Naco Button')}
    >
      Click me
    </Button>
    <Typography>or press ctrl + x</Typography>
  </Stack>
</Story>
