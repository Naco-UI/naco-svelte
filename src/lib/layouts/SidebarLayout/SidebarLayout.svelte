<script lang="ts">
  import { PlainLayout } from '../PlainLayout/index.js'
  import type { SidebarLayoutProps } from './SidebarLayout.types.js'

  export let hideSidebar: SidebarLayoutProps['hideSidebar'] = false
  export let transparent: SidebarLayoutProps['transparent'] = false
  export let keepDOM: SidebarLayoutProps['keepDOM'] = false

  // Variable is for internal use, but export it for debugging
  export let shouldRenderSidebar = keepDOM || !hideSidebar

  let timeoutId: number | null = null

  const unmountDelay = 1000

  $: !keepDOM &&
    (() => {
      if (hideSidebar) {
        if (timeoutId) return
        timeoutId = window.setTimeout(() => {
          shouldRenderSidebar = false
          timeoutId = null
        }, unmountDelay)
      } else {
        shouldRenderSidebar = true
        if (!timeoutId) return
        window.clearTimeout(timeoutId)
        timeoutId = null
      }
    })()
</script>

<div class="sidebar-layout" class:transparent class:hide={hideSidebar}>
  <div class="sidebar">
    {#if shouldRenderSidebar}
      <div class="sidebar-content">
        <slot name="sidebar" />
      </div>
    {/if}
  </div>
  <div class="content">
    <PlainLayout>
      <slot />
    </PlainLayout>
  </div>
</div>

<style lang="scss">
  .sidebar-content {
    opacity: 1;
    transition: var(--transition-default);
  }

  .sidebar-layout {
    display: grid;
    grid-template-columns: 230px 1fr;

    width: 100%;

    background-color: var(--color-background-primary);

    transition: var(--transition-default);
    transition-delay: 0s;

    &.hide {
      grid-template-columns: 0 1fr;
      transition-delay: calc(var(--transition-default) / 2);

      .sidebar-content {
        opacity: 0;
      }
    }
  }

  .sidebar {
    padding: var(--space-sl) var(--space-m);
    border-right: 1px solid var(--color-border-secondary);
  }

  .content {
    display: flex;
  }

  :global(.os-mac) .sidebar-layout {
    &.transparent {
      background-color: transparent;
    }
  }
</style>
