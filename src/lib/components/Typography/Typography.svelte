<script lang="ts">
  import type { TypographyProps } from './Typography.types.js'
  export let as: TypographyProps['as'] = 'span'
  export let variant: TypographyProps['variant'] = 'text-m'
  export let color: TypographyProps['color'] = 'primary'
  export let fullWidth: TypographyProps['fullWidth'] = false
  export let align: TypographyProps['align'] = 'left'
  export let select: TypographyProps['select'] = false
</script>

<svelte:element
  this={as}
  class="typography"
  class:full-width={fullWidth}
  class:select
  style:font="var(--typography-{variant})"
  style:color={color === 'white' ? 'white' : `var(--color-content-${color})`}
  style:text-align={align}
>
  <slot />
</svelte:element>

<style lang="scss">
  .typography {
    user-select: none;
    display: inline-block;
    margin: 0;
    letter-spacing: var(--typography-letter-spacing);

    &.select {
      user-select: text;
    }

    &.full-width {
      width: 100%;
    }
  }
</style>
