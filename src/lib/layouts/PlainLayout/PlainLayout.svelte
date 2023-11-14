<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import Toolbar from '$lib/components/Toolbar/Toolbar.svelte'
  import ToolbarInsetTitle from '$lib/components/Toolbar/ToolbarInsetTitle.svelte'
  import { getTheme } from '$lib/index.js'

  import { createToolbarContext } from '../../components/Toolbar/context.js'
  import type { PlainLayoutProps } from './PlainLayout.types.js'

  export let transparent: PlainLayoutProps['transparent'] = false
  export let macInset: PlainLayoutProps['macInset'] = undefined
  export let toolbar: PlainLayoutProps['toolbar'] = undefined

  const { os } = getTheme()

  const stringifyUnit = (v: number | string): string =>
    typeof v === 'number' ? `${v}px` : v

  const { inset, scrolled } = createToolbarContext(false, false)

  let scrollRef: HTMLDivElement
  let layoutRef: HTMLDivElement
  let resizeObserver: ResizeObserver

  let layoutHeight = 0
  let isScrollable = false

  $: inset.set($os === 'mac' && (macInset?.enable ?? Boolean(macInset)))
  $: hasInsetTitle = Boolean(macInset?.title) && $inset
  $: hasToolbarSlot = toolbar?.show ?? Boolean($$slots.toolbar)
  $: hasToolbar = hasInsetTitle || hasToolbarSlot
  $: toolbarHeight = hasToolbar
    ? toolbar?.height
      ? stringifyUnit(toolbar.height)
      : 'var(--space-toolbar-height)'
    : '0px'

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
  style:--layout-toolbar-height={toolbarHeight}
  style:--layout-height="{layoutHeight}px"
  class:inset={$inset}
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
