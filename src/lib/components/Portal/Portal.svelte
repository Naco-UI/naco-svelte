<script lang="ts">
  import { ThemeProvider, useTheme } from '../ThemeProvider/index.js'
  import { portal } from './portal-action.js'

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
