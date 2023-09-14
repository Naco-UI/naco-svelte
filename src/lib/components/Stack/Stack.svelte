<script lang="ts">
  import type { StackProps } from './Stack.types.js'

  export let align: StackProps['align'] = 'start'
  export let direction: StackProps['direction'] = 'vertical'
  export let gap: StackProps['gap'] = 'm'
</script>

<div
  class="stack align-{align} direction-{direction}"
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

    &.align-end {
      align-items: end;
      justify-content: flex-end;
    }

    &.align-center {
      align-items: center;
      justify-content: center;
    }
  }
</style>
