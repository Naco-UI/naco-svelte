<script lang="ts">
  import Typography from '$lib/components/Typography/Typography.svelte'
  import { getTheme } from '$lib/index.js'

  export let height: number = 200
  export let translucent = false
  export let titlebar = true
  export let title = 'Naco UI'
  export let inset = false

  let lastHeight = height

  let dragging = false
  let startY = 0

  function handleDragStart(e: MouseEvent) {
    dragging = true
    startY = e.screenY
  }

  function handleDrag(e: MouseEvent) {
    if (dragging) {
      height = lastHeight + (e.screenY - startY)
    }
  }

  function handleDragEnd(e: MouseEvent) {
    lastHeight = height
    dragging = false
  }

  const { os } = getTheme()

  $: isInset = $os === 'mac' && inset

  $: sheetHeight = `${height}px`
</script>

<div
  class="overlay"
  style:--sheet-height={sheetHeight}
  class:background={translucent}
>
  <div class="sheet" class:with-title={titlebar && !isInset} class:translucent>
    <div class="titlebar" class:visible={titlebar && !isInset}>
      <div class="title">
        <Typography fullWidth align="center" variant="heading-s">{title}</Typography>
      </div>
      <div class="controls" class:visible={titlebar}>
        <span />
        <span />
        <span />
      </div>
    </div>
    <slot />
    <div
      aria-hidden="true"
      class="drag"
      class:active={dragging}
      on:mousedown={handleDragStart}
      on:mousemove={handleDrag}
      on:mouseup={handleDragEnd}
      on:mouseleave={handleDragEnd}
    />
  </div>
</div>

<style lang="scss">
  .overlay {
    --sheet-padding: 50px;
    --window-control-size: 12px;
    --window-controls-top: 8px;
    --window-controls-left: 8px;
    --window-controls-right: unset;
    --window-border-radius: 11px;
    --window-title-bar-height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &.background {
      background-image: url('/images/wallpaper.jpg');
      background-position: top;
      background-size: cover;
    }
  }

  .drag {
    cursor: ns-resize;

    position: absolute;
    bottom: 0;

    display: block;

    width: 100%;
    height: 15px;

    background-color: transparent;

    &.active {
      box-shadow: 0 -5px 5px inset rgb(0 0 0 / 15%);
    }
  }

  .title {
    pointer-events: none;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: var(--window-title-bar-height);

    box-shadow: 0 -0.5px 0 0 var(--color-border-secondary) inset;
  }

  .titlebar.visible {
    position: absolute;
    top: 0;
    left: 0;

    display: block;

    width: 100%;
    height: var(--window-title-bar-height);

    background-color: var(--color-background-translucent);
  }

  .sheet {
    position: relative;

    overflow: hidden;
    display: flex;

    width: 100%;
    max-width: 700px;
    height: var(--sheet-height);
    margin: var(--sheet-padding);
    padding-top: var(--window-title-bar-height);

    background-color: var(--color-background-primary);
    border-radius: var(--window-border-radius);
    box-shadow:
      0 8px 40px 0 rgb(0 0 0 / 25%),
      0 0 3px 0 rgb(255 255 255 / 10%) inset;

    &:not(.with-title) {
      padding-top: 0;
    }
  }

  :global(.os-linux) .overlay {
    --window-border-radius: 12px;
    --window-title-bar-height: 34px;
    --window-control-size: 15px;
    --window-controls-top: 9px;
    --window-controls-left: unset;
    --window-controls-right: 9px;

    .title {
      box-shadow: 0 -0.5px 0 0 var(--color-border-secondary) inset;
    }
  }

  :global(.os-mac) .sheet {
    &:not(.with-title) {
      --window-controls-top: 12px;
      --window-controls-left: 12px;

      .title {
        opacity: 0;
      }
    }

    &.translucent {
      background-color: var(--color-background-translucent);
      backdrop-filter: blur(30px);
    }
  }

  .controls {
    position: absolute;
    z-index: 9999;
    top: var(--window-controls-top);
    right: var(--window-controls-right);
    left: var(--window-controls-left);

    display: flex;
    gap: 8px;

    opacity: 0;

    &.visible {
      opacity: 1;
    }

    span {
      display: block;

      width: var(--window-control-size);
      height: var(--window-control-size);

      background-color: var(--color-content-tertiary);
      border-radius: 50%;
    }
  }
</style>
