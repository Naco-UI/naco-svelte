<script lang="ts">
  import type { TypographyProps } from './Typography.types.js'
  export let as: TypographyProps['as'] = 'p'
  export let variant: TypographyProps['variant']
</script>

<svelte:element this={as} class="Typography" style:font="var(--typography-{variant})">
  <slot />
</svelte:element>

<style lang="scss">
  .Typography {
    letter-spacing: var(--typography-letter-spacing);
    color: var(--color-content-primary);
  }
</style>
