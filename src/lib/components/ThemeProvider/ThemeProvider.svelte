<script lang="ts">
  import AbstractThemeProvider from './AbstractThemeProvider.svelte'
  import type { ThemeProviderProps } from './ThemeProvider.types.js'

  export let os: ThemeProviderProps['os']
  export let scheme: ThemeProviderProps['scheme']
  export let container: ThemeProviderProps['container'] = false
</script>

<AbstractThemeProvider {os} {scheme} let:themeClass>
  <div class={themeClass} class:no-container={!container}>
    <slot />
  </div>
</AbstractThemeProvider>

<style lang="scss">
  .naco.no-container {
    display: contents;
  }
</style>
