<script lang="ts">
  import './themes/styles.js'

  import type { AbstractThemeProviderProps } from './AbstractThemeProvider.types'
  import { createThemeContext } from './context'

  export let os: AbstractThemeProviderProps['os']
  export let scheme: AbstractThemeProviderProps['scheme']

  const context = createThemeContext({ os, scheme })

  function osChanged(): void {
    context.os.set(os)
  }

  function schemeChanged(): void {
    context.scheme.set(scheme)
  }

  $: os && osChanged()
  $: scheme && schemeChanged()
  $: themeClass = `naco os-${os} ${scheme}`
</script>

<slot {themeClass} />
