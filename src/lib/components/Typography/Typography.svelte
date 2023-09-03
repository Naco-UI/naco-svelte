<script lang="ts">
  import type { TypographyProps } from './Typography.types.js'
  export let as: TypographyProps['as'] = 'p'
  export let variant: TypographyProps['variant']
</script>

<svelte:element
  this={as}
  class="typography"
  style:font="var(--typography-{variant})"
>
  <slot />
</svelte:element>

<style lang="scss">
  .typography {
    color: var(--color-content-primary);
    letter-spacing: var(--typography-letter-spacing);
  }
</style>
