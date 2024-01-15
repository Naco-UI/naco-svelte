<script context="module">
  import { getOperationSystem } from './getOperationSystem.js'
  export const meta = {
    title: 'Utilities/getOperationSystem',
    component: getOperationSystem,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import Typography from '$lib/components/Typography/Typography.svelte'

  const os = getOperationSystem()
</script>

<Story name="Basic">
  <Typography variant="text-l">
    User operating system is {os}
  </Typography>
</Story>
