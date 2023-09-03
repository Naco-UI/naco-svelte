<script lang="ts">
  import type { ActionsLayoutProps } from './ActionsLayout.types.js'

  export let fixedWidth: ActionsLayoutProps['fixedWidth'] = false
  export let align: ActionsLayoutProps['align'] = 'start'
</script>

<div
  class="ActionsLayout"
  class:fixed-width={fixedWidth}
  class:align-end={align === 'end'}
>
  <slot />
</div>

<style lang="scss">
  .ActionsLayout {
    display: flex;
    align-items: flex-start;
    gap: var(--space-m);

    &.align-end {
      align-items: flex-end;
    }
  }
</style>
