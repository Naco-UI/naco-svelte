<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import { getTheme } from '$lib/index.js'

  import type { PlainLayoutProps } from './PlainLayout.types.js'

  export let transparent: PlainLayoutProps['transparent'] = false
  export let inset: PlainLayoutProps['inset'] = false
  export let insetSafeToolbar: PlainLayoutProps['insetSafeToolbar'] = true
  export let disableDrag: PlainLayoutProps['disableDrag'] = false

  const { os } = getTheme()

  let scrollable = false
  let scrolled = false
  let scrollRef: HTMLDivElement

  let resizeObserver: ResizeObserver

  function handleScroll(): void {
    const isScrolled = scrollRef.scrollTop > 0
    if (scrolled !== isScrolled) {
      scrolled = isScrolled
    }
  }

  onMount(() => {
    resizeObserver = new ResizeObserver(() => {
      scrollable = scrollRef.scrollHeight > scrollRef.offsetHeight
    })
    resizeObserver.observe(scrollRef)
    scrollRef.addEventListener('scroll', handleScroll)
  })
  onDestroy(() => {
    resizeObserver.disconnect()
    scrollRef.removeEventListener('scroll', handleScroll)
  })

  $: isInset = inset && $os === 'mac'
  $: hasToolbar = Boolean($$slots.toolbar)
</script>

<div class="plain-layout" class:inset class:transparent>
  {#if isInset}
    <div
      class="inset-titlebar"
      class:safe={insetSafeToolbar}
      class:scrolled
      class:drag={!disableDrag}
    >
      {#if hasToolbar}
        <div class="toolbar">
          <slot name="toolbar" />
        </div>
      {/if}
    </div>
  {/if}
  <div bind:this={scrollRef} class="scroll" class:scrollable>
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

  .inset-titlebar {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: var(--space-inset-titlebar);

    transition: var(--transition-default);

    &.scrolled {
      box-shadow: 0 1px 0 var(--color-border-main), var(--box-shadow-l);
    }

    &.drag {
      --wails-draggable: drag;
    }

    &.safe {
      padding-left: var(--space-inset-toolbar-safe);
    }
  }

  .toolbar {
    display: flex;
    flex: 1;
    align-items: center;
    height: var(--space-inset-titlebar);
  }

  .scroll {
    overflow-y: auto;
    max-height: 100%;
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
      &.inset {
        padding-top: var(--space-inset-titlebar);
      }

      &.transparent {
        background-color: transparent;
      }
    }
  }
</style>
