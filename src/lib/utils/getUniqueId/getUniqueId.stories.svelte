<script context="module">
  import { getUniqueId } from './getUniqueId.js'
  export const meta = {
    title: 'Utilities/getUniqueId',
    component: getUniqueId,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { Stack, Typography } from '$lib/index.js'

  const prefix = 'prefix-'
  const indexes = new Array(10).fill(null)
</script>

<Story name="Basic">
  <Stack direction="vertical">
    {#each indexes as _}
      <Typography>{getUniqueId()}</Typography>
    {/each}
  </Stack>
</Story>

<Story name="Prefix">
  <Stack direction="vertical">
    <Typography variant="heading-s">Prefix: '{prefix}'</Typography>
    {#each indexes as _}
      <Typography>{getUniqueId(prefix)}</Typography>
    {/each}
  </Stack>
</Story>
