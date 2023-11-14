<script lang="ts">
  import type { StackProps } from './Stack.types.js'

  export let align: StackProps['align'] = 'normal'
  export let direction: StackProps['direction'] = 'vertical'
  export let justify: StackProps['justify'] = 'normal'
  export let gap: StackProps['gap'] = 'm'
  export let maxWidth: StackProps['maxWidth'] = undefined
  export let fullHeight: StackProps['fullHeight'] = false
</script>

<div
  class="stack align-{align} direction-{direction}"
  class:full-height={fullHeight}
  style:justify-content={justify}
  style:align-items={align}
  style:max-width={maxWidth ? `${maxWidth}px` : ''}
  style:--stack-gap={gap === 'none' ? '0' : `var(--space-${gap})`}
>
  <slot />
</div>

<style lang="scss">
  .stack {
    display: flex;
    flex-direction: row;
    gap: var(--stack-gap);
    justify-content: flex-start;

    width: 100%;

    &.direction-vertical {
      flex-direction: column;
    }

    &.direction-horizontal {
      align-items: center;
    }

    &.full-height {
      height: 100%;
    }
  }
</style>
