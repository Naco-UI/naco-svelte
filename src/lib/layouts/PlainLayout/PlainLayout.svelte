<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import Typography from '$lib/components/Typography/Typography.svelte'
  import { getTheme } from '$lib/index.js'

  import { createLayoutContext } from './context.js'
  import type { PlainLayoutProps } from './PlainLayout.types.js'

  export let transparent: PlainLayoutProps['transparent'] = false
  export let macInset: PlainLayoutProps['macInset'] = undefined
  export let toolbar: PlainLayoutProps['toolbar'] = undefined

  const { os } = getTheme()
  const { inset, scrolled } = createLayoutContext(false, true)

  let scrollRef: HTMLDivElement
  let toolbarRef: HTMLDivElement
  let layoutRef: HTMLDivElement

  let layoutHeight = 0
  let isScrollable = false
  let isInset = false

  const insetDraggable = macInset?.draggable ?? true
  const hasInsetTitle = Boolean(macInset?.title)
  const isTransparent = Boolean(toolbar?.transparent)
  const isAnimatedToolbar = Boolean(toolbar?.animate)
  $: hasToolbar = toolbar?.show ?? Boolean($$slots.toolbar)
  $: hasTitlebar = (isInset && hasInsetTitle) || hasToolbar
  let resizeObserver: ResizeObserver

  $: (() => {
    if ($os !== 'mac' || !macInset) {
      isInset = false
    } else {
      isInset = macInset.show ?? Boolean(macInset)
    }
    inset.set(isInset)
  })()
  $: titlebarHeight = (() => {
    if (!hasTitlebar) {
      return '0px'
    }
    return toolbar?.height ? `${toolbar.height}px` : 'var(--space-toolbar-height)'
  })()
  $: isInsetSafe = macInset?.safePadding ?? true

  function handleScroll(): void {
    scrolled.set(scrollRef.scrollTop > 0)
  }

  onMount(() => {
    resizeObserver = new ResizeObserver(() => {
      isScrollable = scrollRef.scrollHeight > scrollRef.offsetHeight
      layoutHeight = layoutRef.offsetHeight
    })
    resizeObserver.observe(scrollRef)
    scrollRef.addEventListener('scroll', handleScroll)
  })
  onDestroy(() => {
    resizeObserver.disconnect()
    scrollRef.removeEventListener('scroll', handleScroll)
  })
</script>

<div
  class="plain-layout"
  style:--layout-titlebar-height={titlebarHeight}
  style:--layout-height="{layoutHeight}px"
  class:inset={$inset}
  class:transparent
  bind:this={layoutRef}
>
  {#if hasTitlebar}
    <div
      class="titlebar"
      class:transparent={isTransparent}
      class:drag={insetDraggable}
      class:animated={isAnimatedToolbar}
      class:scrolled={$scrolled}
    >
      {#if $inset && hasInsetTitle}
        <div class="inset-title">
          <Typography fullWidth align="center" variant="heading-s"
            >{macInset?.title}</Typography
          >
        </div>
      {:else if hasToolbar}
        <div class="toolbar-wrapper" bind:this={toolbarRef} class:safe={isInsetSafe}>
          <slot name="toolbar" />
        </div>
      {/if}
    </div>
  {/if}
  <div bind:this={scrollRef} class="scroll" class:scrollable={isScrollable}>
    <div class="scroll-wrapper">
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  .plain-layout {
    --plain-layout-background-color: var(--color-background-secondary);

    position: relative;
    flex: 1;
    background-color: var(--plain-layout-background-color);
    transition: var(--transition-default);
  }

  .titlebar {
    display: flex;
    align-items: center;

    width: 100%;
    height: var(--layout-titlebar-height);

    background-color: var(--color-background-toolbar);

    transition: var(--transition-default);

    &.animated {
      background-color: var(--plain-layout-background-color);
      box-shadow: none;

      &.scrolled {
        box-shadow: var(--box-shadow-s), var(--box-shadow-m);
      }
    }

    &.drag {
      --wails-draggable: drag;
    }
  }

  .inset-title {
    width: 100%;
  }

  .toolbar-wrapper {
    display: flex;
    flex: 1;
    align-items: center;

    height: var(--layout-titlebar-height);

    transition: var(--transition-default);

    &.safe {
      padding-left: var(--space-inset-toolbar-safe-padding);
    }
  }

  .scroll {
    overflow-y: auto;
    max-height: calc(var(--layout-height) - var(--layout-titlebar-height));
    padding: var(--space-l) var(--space-sl);

    &.scrollable {
      padding-right: var(--space-s);
    }
  }

  :global(.os-linux) {
    .plain-layout {
      --plain-layout-background-color: var(--color-background-primary);
    }

    .titlebar {
      box-shadow: 0 1px 0 0 var(--color-border-main);
    }
  }

  :global(.os-mac) {
    .plain-layout {
      &.transparent {
        background-color: transparent;
      }
    }

    .titlebar {
      box-shadow: var(--box-shadow-s), var(--box-shadow-m);
    }
  }
</style>
