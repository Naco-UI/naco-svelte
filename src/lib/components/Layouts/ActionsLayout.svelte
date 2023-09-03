<script lang="ts">
  import type { ActionsLayoutProps } from './ActionsLayout.types.js'

  export let fixedWidth: ActionsLayoutProps['fixedWidth'] = false
  export let align: ActionsLayoutProps['align'] = 'start'
</script>

<div
  class="actions-layout"
  class:fixed-width={fixedWidth}
  class:align-end={align === 'end'}
>
  <slot />
</div>

<style lang="scss">
  .actions-layout {
    display: flex;
    gap: var(--space-m);
    align-items: flex-start;

    &.align-end {
      align-items: flex-end;
    }
  }
</style>
