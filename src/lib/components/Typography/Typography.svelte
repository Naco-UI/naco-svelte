<script lang="ts">
  import type { TypographyProps } from './Typography.types.js'
  export let as: TypographyProps['as'] = 'span'
  export let variant: TypographyProps['variant'] = 'text-m'
  export let color: TypographyProps['color'] = 'primary'
  export let align: TypographyProps['align'] = 'left'
</script>

<svelte:element
  this={as}
  class="typography"
  style:font="var(--typography-{variant})"
  style:color="var(--color-content-{color})"
  style:text-align={align}
>
  <slot />
</svelte:element>

<style lang="scss">
  .typography {
    display: inline-block;
    margin: 0;
    letter-spacing: var(--typography-letter-spacing);
  }
</style>
