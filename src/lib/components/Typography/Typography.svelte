<script lang="ts">
  import type { TypographyProps } from './Typography.types.js'
  export let as: TypographyProps['as'] = 'span'
  export let variant: TypographyProps['variant'] = 'text-m'
  export let color: TypographyProps['color'] = 'primary'
  export let fullWidth: TypographyProps['fullWidth'] = false
  export let align: TypographyProps['align'] = 'left'
  export let selection: TypographyProps['selection'] = false

  const cssColorValues = ['white', 'inherit']

  $: colorStyle =
    color && cssColorValues.includes(color) ? color : `var(--color-content-${color})`
</script>

<svelte:element
  this={as}
  class="typography"
  class:full-width={fullWidth}
  class:selection
  style:font="var(--typography-{variant})"
  style:color={colorStyle}
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

    &.selection {
      user-select: text;
    }

    &.full-width {
      flex: 1;
      width: 100%;
    }
  }
</style>
