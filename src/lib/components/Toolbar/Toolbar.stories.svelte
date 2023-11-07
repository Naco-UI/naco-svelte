<script context="module" lang="ts">
  import Toolbar from './Toolbar.svelte'

  export const meta = {
    title: 'Components/Toolbar',
    component: Toolbar,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { Button } from '$lib/index.js'
</script>

<Story name="Basic" let:args>
  <Toolbar {...args}>
    <Button>Click me</Button>
    <Button>And me</Button>
  </Toolbar>
</Story>
