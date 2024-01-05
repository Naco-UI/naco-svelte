<script lang="ts">
  import { theme } from '$lib/actions/theme/theme.action.js'
  import type { ThemeManifest } from '$lib/actions/theme/theme.types.js'

  import { getTheme } from '../ThemeProvider/index.js'

  const { os: osStore, scheme: schemeStore } = getTheme()
  export let manifest: ThemeManifest
  export let debug = false

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
