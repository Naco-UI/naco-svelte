<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import Toolbar from '$lib/components/Toolbar/Toolbar.svelte'
  import ToolbarInsetTitle from '$lib/components/Toolbar/ToolbarInsetTitle.svelte'
  import { getTheme } from '$lib/index.js'

  import { PlainLayout } from '../PlainLayout/index.js'
  import type { SidebarLayoutProps } from './SidebarLayout.types.js'

  export let hideSidebar: SidebarLayoutProps['hideSidebar'] = false
  export let transparent: SidebarLayoutProps['transparent'] = false
  export let keepDOM: SidebarLayoutProps['keepDOM'] = false
  export let macInset: SidebarLayoutProps['macInset'] = undefined
  export let sidebarWidth: SidebarLayoutProps['sidebarWidth'] = 200

  const { os } = getTheme()

  $: isInset = $os === 'mac' ? macInset?.show ?? Boolean(macInset) : false

  // Variable is for internal use, but export it for debugging
  export let shouldRenderSidebar = keepDOM || !hideSidebar

  let timeoutId: number | null = null
  let layoutRef: HTMLDivElement
  let insetHeight: string
  let resizeObserver: ResizeObserver
  let layoutHeight: number = 0

  const unmountDelay = 1000

  const insetTitle = macInset?.title
  const hasToolbar = $$slots.toolbar

  onMount(() => {
    resizeObserver = new ResizeObserver(() => {
      layoutHeight = layoutRef.offsetHeight
    })
    resizeObserver.observe(layoutRef)
  })
  onDestroy(() => {
    resizeObserver.disconnect()
  })

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

<div
  style:--layout-toolbar-height={insetHeight}
  style:--layout-height="{layoutHeight}px"
  style:--layout-sidebar-width="{sidebarWidth}px"
  class="sidebar-layout"
  bind:this={layoutRef}
  class:inset={isInset}
  class:transparent
  class:hide={hideSidebar}
>
  <div class="sidebar">
    {#if isInset}
      <div class="drag" />
    {/if}
    {#if shouldRenderSidebar}
      <div class="sidebar-content">
        <slot name="sidebar" />
      </div>
    {/if}
  </div>
  <div class="content">
    <div class="content-scroll">
      <PlainLayout
        toolbar={{
          show: isInset,
        }}
        macInset={{
          show: isInset,
          safePadding: hideSidebar,
        }}
      >
        <div class="toolbar" slot="toolbar">
          {#if hasToolbar}
            <slot name="toolbar" />
          {:else if insetTitle}
            <Toolbar padding="sl">
              <ToolbarInsetTitle title={insetTitle} />
            </Toolbar>
          {/if}
        </div>
        <slot />
      </PlainLayout>
    </div>
  </div>
</div>

<style lang="scss">
  .drag {
    --wails-draggable: drag;

    position: absolute;
    top: 0;
    left: 0;

    width: var(--layout-sidebar-width);
    height: var(--space-toolbar-height);
  }

  .toolbar {
    display: contents;
  }

  .sidebar-layout {
    --sidebar-background-color: var(--color-background-primary);

    display: grid;
    grid-template-columns: var(--layout-sidebar-width) 1fr;
    flex: 1;

    width: 100%;

    background: var(--sidebar-background-color);

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

  .content-scroll {
    display: flex;
    flex: 1;
    width: 100%;
    height: var(--layout-height);
  }

  :global(.os-linux) {
    .sidebar {
      padding: 0;
      border-right: 1px solid var(--color-border-main);
    }
  }

  :global(.os-mac) {
    .sidebar {
      padding: var(--space-sl) var(--space-m);
      border-right: 1px solid var(--color-border-secondary);
    }

    .sidebar-layout {
      &.inset {
        .sidebar {
          padding-top: var(--space-toolbar-height);
        }
      }

      &.transparent {
        --sidebar-background-color: transparent;
      }
    }
  }

  :global(.os-linux.dark) {
    .sidebar-layout {
      --sidebar-background-color: var(--color-background-primary);
    }
  }

  :global(.os-linux.light) {
    .sidebar-layout {
      --sidebar-background-color: var(--color-background-secondary);
    }
  }
</style>
