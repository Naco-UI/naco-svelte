<script lang="ts">
  import './themes/styles.js'

  import { createThemeContext } from './context.js'
  import type { ThemeProviderProps } from './ThemeProvider.types.js'

  export let os: ThemeProviderProps['os']
  export let scheme: ThemeProviderProps['scheme']
  export let container: ThemeProviderProps['container'] = false

  const context = createThemeContext({ os, scheme })

  function osChanged(): void {
    context.os.set(os)
  }

  function schemeChanged(): void {
    context.scheme.set(scheme)
  }

  $: os && osChanged()
  $: scheme && schemeChanged()
</script>

<div class="naco os-{os} {scheme}" class:no-container={!container}>
  <slot />
</div>

<style lang="scss">
  .naco.no-container {
    display: contents;
  }
</style>
