<script lang="ts">
  import { getLayoutContext } from '../../layouts/PlainLayout'
  import Typography from '../Typography/Typography.svelte'

  export let title: string

  const { inset } = getLayoutContext()
</script>

{#if $inset}
  <Typography variant="heading-s">{title}</Typography>
{/if}
