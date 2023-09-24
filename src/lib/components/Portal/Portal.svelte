<script lang="ts">
  import { portal } from '../../actions/portal/index.js'
  import { ThemeProvider, useTheme } from '../ThemeProvider/index.js'
  import type { PortalProps } from './Portal.types.js'

  export let target: PortalProps['target'] = undefined
  export let unwrapTheme: PortalProps['unwrapTheme'] = false

  const { os, scheme } = useTheme()

  $: finalTarget = target ?? 'body'
</script>

<div use:portal={finalTarget}>
  {#if unwrapTheme}
    <slot />
  {:else}
    <ThemeProvider os={$os} scheme={$scheme}>
      <slot />
    </ThemeProvider>
  {/if}
</div>
