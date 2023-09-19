<script lang="ts">
  import { portal } from '../../actions/portal/index.js'
  import { ThemeProvider, useTheme } from '../ThemeProvider/index.js'

  export let target = 'body'
  export let unwrapTheme = false

  const { os, scheme } = useTheme()
</script>

<div use:portal={target}>
  {#if unwrapTheme}
    <slot />
  {:else}
    <ThemeProvider os={$os} scheme={$scheme}>
      <slot />
    </ThemeProvider>
  {/if}
</div>
