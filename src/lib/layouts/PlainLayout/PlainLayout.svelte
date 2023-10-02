<script lang="ts">
  import type { PlainLayoutProps } from './PlainLayout.types.js'

  export let transparent: PlainLayoutProps['transparent'] = false
</script>

<div class="plain-layout" class:transparent>
  <slot />
</div>

<style lang="scss">
  .plain-layout {
    flex: 1;
    padding: var(--space-sl);
    background-color: var(--color-background-secondary);

    &.transparent {
      background-color: transparent;
    }
  }
</style>
