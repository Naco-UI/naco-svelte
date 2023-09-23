<script lang="ts">
  import './themes/styles.js'

  import { createThemeContext } from './context.js'
  import type { ThemeProviderProps } from './ThemeProvider.types.js'

  export let os: ThemeProviderProps['os']
  export let scheme: ThemeProviderProps['scheme']

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

<div class="naco os-{os} {scheme}">
  <slot />
</div>
