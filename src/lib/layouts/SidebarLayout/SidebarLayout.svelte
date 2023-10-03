<script lang="ts">
  import { onMount } from 'svelte'

  import { Typography, useTheme } from '$lib/index.js'

  import { PlainLayout } from '../PlainLayout/index.js'
  import type { SidebarLayoutProps } from './SidebarLayout.types.js'

  export let hideSidebar: SidebarLayoutProps['hideSidebar'] = false
  export let transparent: SidebarLayoutProps['transparent'] = false
  export let keepDOM: SidebarLayoutProps['keepDOM'] = false
  export let inset: SidebarLayoutProps['inset'] = false
  export let insetTitle: SidebarLayoutProps['insetTitle'] = undefined

  const { os } = useTheme()

  // Variable is for internal use, but export it for debugging
  export let shouldRenderSidebar = keepDOM || !hideSidebar

  let timeoutId: number | null = null
  let titleNode: HTMLDivElement
  $: titleWidth = 0

  const unmountDelay = 1000

  $: isInset = inset && $os === 'mac'
  $: hasToolbar = Boolean($$slots.toolbar)
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
  onMount(() => {
    if (isInset && titleNode) {
      titleWidth = titleNode.offsetWidth
    }
  })
</script>

<div class="sidebar-layout" class:inset class:transparent class:hide={hideSidebar}>
  {#if isInset}
    <div class="inset-titlebar">
      {#if insetTitle}
        <!-- Render hidden title to calculate size -->
        <div aria-hidden bind:this={titleNode} class="title-prerender">
          <Typography variant="heading-s">{insetTitle}</Typography>
        </div>
        <div class="title" style:--title-width="{titleWidth}px">
          <div class="title-limiter">
            <Typography fullWidth align="center" variant="heading-s"
              >{insetTitle}</Typography
            >
          </div>
        </div>
      {/if}
      {#if hasToolbar}
        <div class="toolbar">
          <slot name="toolbar" />
        </div>
      {/if}
    </div>
  {/if}
  <div class="sidebar">
    {#if shouldRenderSidebar}
      <div class="sidebar-content">
        <slot name="sidebar" />
      </div>
    {/if}
  </div>
  <div class="content">
    <PlainLayout disableDrag inset={isInset}>
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
    --layout-sidebar-width: 230px;

    display: grid;
    grid-template-columns: var(--layout-sidebar-width) 1fr;

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

  .title {
    position: absolute;
    top: 8px;
    left: 0;
    left: calc(var(--layout-sidebar-width) + var(--space-l) + var(--space-s));

    width: var(--title-width);

    transition: var(--transition-default);
  }

  .title-prerender {
    pointer-events: none;

    position: absolute;
    top: -9999px;
    left: -9999px;

    width: fit-content;

    opacity: 0;
  }

  .hide {
    .title {
      left: 0;
      width: 100%;
    }
  }

  .title-limiter {
    // width: fit-content;
    transition: var(--transition-default);
  }

  .sidebar {
    padding: var(--space-sl) var(--space-m);
    border-right: 1px solid var(--color-border-secondary);
  }

  .content {
    display: flex;
  }

  .inset-titlebar {
    --wails-draggable: drag;

    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: var(--space-inset-titlebar);
  }

  :global(.os-mac) {
    .sidebar-layout {
      &.inset {
        .sidebar {
          padding-top: var(--space-inset-titlebar);
        }
      }

      &.transparent {
        background-color: transparent;
      }
    }
  }
</style>
