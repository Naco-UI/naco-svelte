<script lang="ts">
  import type { ActionsLayoutProps } from './ActionsLayout.types.js'

  export let align: ActionsLayoutProps['align'] = 'start'
</script>

<div class="actions-layout align-{align}">
  <slot />
</div>

<style lang="scss">
  .actions-layout {
    display: flex;
    gap: var(--space-m);
    justify-content: flex-start;

    &.align-end {
      justify-content: flex-end;
    }

    &.align-center {
      justify-content: center;
    }
  }
</style>
