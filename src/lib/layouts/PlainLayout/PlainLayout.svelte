<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import Toolbar from '$lib/components/Toolbar/Toolbar.svelte'
  import ToolbarInsetTitle from '$lib/components/Toolbar/ToolbarInsetTitle.svelte'
  import { getTheme } from '$lib/index.js'

  import { createLayoutContext } from './context.js'
  import type { PlainLayoutProps } from './PlainLayout.types.js'

  export let transparent: PlainLayoutProps['transparent'] = false
  export let macInset: PlainLayoutProps['macInset'] = undefined
  export let toolbar: PlainLayoutProps['toolbar'] = undefined

  const { os } = getTheme()
  const { isInset, isScrolled, toolbarHeight } = createLayoutContext(
    false,
    false,
    '0px',
  )

  let scrollRef: HTMLDivElement
  let layoutRef: HTMLDivElement
  let resizeObserver: ResizeObserver

  let layoutHeight = 0
  let isScrollable = false

  $: isInset.set($os === 'mac' && (macInset?.enable ?? Boolean(macInset)))
  $: hasInsetTitle = Boolean(macInset?.title) && $isInset
  $: hasToolbarSlot = toolbar?.show ?? Boolean($$slots.toolbar)
  $: hasToolbar = hasInsetTitle || hasToolbarSlot

  function handleScroll(): void {
    isScrolled.set(scrollRef.scrollTop > 0)
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
  style:--layout-toolbar-height={$toolbarHeight}
  style:--layout-height="{layoutHeight}px"
  class:inset={$isInset}
  class:transparent
  bind:this={layoutRef}
>
  {#if hasToolbar}
    <div class="toolbar-wrapper">
      <Toolbar {...toolbar}>
        {#if hasInsetTitle}
          <ToolbarInsetTitle value={macInset?.title} />
        {:else if hasToolbar}
          <slot name="toolbar" />
        {/if}
      </Toolbar>
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
    --plain-layout-toolbar-transition-props: box-shadow, background-color, opacity;

    position: relative;
    flex: 1;
    background-color: var(--plain-layout-background-color);
    transition: var(--transition-default);
  }

  .toolbar-wrapper {
    display: flex;
    flex: 1;
    align-items: center;

    height: var(--layout-toolbar-height);

    transition: var(--transition-default);
    transition-property: var(--plain-layout-toolbar-transition-props);
  }

  .scroll {
    overflow-y: auto;
    max-height: calc(var(--layout-height) - var(--layout-toolbar-height));
    padding: var(--space-l) var(--space-sl);

    &.scrollable {
      padding-right: var(--space-s);
    }
  }

  :global(.os-linux) {
    .plain-layout {
      --plain-layout-background-color: var(--color-background-primary);
    }
  }

  :global(.os-mac) {
    .plain-layout {
      &.transparent {
        background-color: transparent;
      }
    }
  }
</style>
