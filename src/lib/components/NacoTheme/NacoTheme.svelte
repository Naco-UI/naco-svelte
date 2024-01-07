<script lang="ts">
  import { theme } from '$lib/actions/theme/theme.action.js'

  import { getTheme } from '../ThemeProvider/index.js'
  import type { NacoThemeProps } from './NacoTheme.types.js'

  export let manifest: NacoThemeProps['manifest']
  export let debug: NacoThemeProps['debug'] = false

  const { os: osStore, scheme: schemeStore } = getTheme()

  $: os = $osStore
  $: scheme = $schemeStore
</script>

<div
  use:theme={{
    manifest,
    os,
    scheme,
    debug,
  }}
  class="naco-component"
>
  <slot {os} {scheme} />
</div>

<style lang="scss">
  .naco-component {
    display: contents;
  }
</style>
