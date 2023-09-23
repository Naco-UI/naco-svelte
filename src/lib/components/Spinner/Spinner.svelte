<script lang="ts">
  import { useTheme } from '../ThemeProvider/index.js'
  import LinuxSpinner from './LinuxSpinner.svelte'
  import MacSpinner from './MacSpinner.svelte'
  import type { SpinnerProps, SpinnerSize } from './Spinner.types.js'

  export let size: SpinnerProps['size'] = undefined

  const spinnerSize: Record<SpinnerSize, number> = {
    s: 16,
    m: 24,
    l: 32,
  }

  const { os } = useTheme()

  $: currentSize = spinnerSize[size ?? 'm']
</script>

<div class="spinner-container size-{size}">
  {#if $os === 'mac'}
    <MacSpinner --spinner-size="{currentSize}px" />
  {:else}
    <LinuxSpinner size={currentSize} />
  {/if}
</div>
