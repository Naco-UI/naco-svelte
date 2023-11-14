<script lang="ts">
  import { getLayoutContext } from '../../layouts/PlainLayout'
  import Typography from '../Typography/Typography.svelte'
  import type { ToolbarInsetTitleProps } from './ToolbarInsetTitle.types'

  export let value: ToolbarInsetTitleProps['value'] = ''

  const { isInset } = getLayoutContext()
</script>

{#if $isInset}
  <Typography variant="heading-s">{value}</Typography>
{/if}
