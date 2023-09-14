<script lang="ts">
  import type { StackProps } from './Stack.types.js'

  export let align: StackProps['align'] = 'normal'
  export let direction: StackProps['direction'] = 'vertical'
  export let justify: StackProps['justify'] = 'normal'
  export let gap: StackProps['gap'] = 'm'
</script>

<div
  class="stack align-{align} direction-{direction}"
  style:justify-content={justify}
  style:align-items={align}
  style:--stack-gap="var(--space-{gap})"
>
  <slot />
</div>

<style lang="scss">
  .stack {
    display: flex;
    flex-direction: row;
    gap: var(--stack-gap);
    justify-content: flex-start;

    &.direction-vertical {
      flex-direction: column;
    }

    &.direction-horizontal {
      align-items: center;
    }
  }
</style>
