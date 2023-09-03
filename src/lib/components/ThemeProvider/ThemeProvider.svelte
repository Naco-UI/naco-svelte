<script lang="ts">
  import './themes/styles.ts'

  import type { ThemeProviderProps } from './ThemeProvider.types.js'

  export let os: ThemeProviderProps['os'] = 'mac'
  export let scheme: ThemeProviderProps['scheme'] = 'light'
</script>

<div class="naco os-{os} {scheme}">
  <slot />
</div>
