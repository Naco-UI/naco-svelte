<script lang="ts">
  import Typography from '../Typography/Typography.svelte'
  import { getToolbarContext } from './context'
  import type { ToolbarInsetTitleProps } from './ToolbarInsetTitle.types'

  export let value: ToolbarInsetTitleProps['value'] = ''

  const { inset } = getToolbarContext()
</script>

{#if $inset}
  <Typography variant="heading-s">{value}</Typography>
{/if}
