<script lang="ts">
  import Typography from '../Typography/Typography.svelte'
  import type { WindowProps } from './Window.types.js'

  export let width: WindowProps['width'] = undefined
  export let height: WindowProps['height'] = undefined
  export let macHideTitleBar: WindowProps['macHideTitleBar'] = false
  export let title = 'Window title'
</script>

<div
  class="window"
  class:mac-hide-title-bar={macHideTitleBar}
  style:--window-width={`${width}px` ?? ''}
  style:--window-height={`${height}px` ?? ''}
>
  <div class="title-bar">
    <div class="window-controls">
      <span />
      <span />
      <span />
    </div>
    <Typography fullWidth align="center" variant="heading-s">{title}</Typography>
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .window {
    --window-border-radius: 11px;
    --window-title-bar-height: 28px;
    --window-control-size: 12px;

    width: var(--window-width);
    height: var(--window-height);

    background-color: var(--color-background-secondary);
    border: 1px solid var(--color-border-main);
    border-radius: calc(var(--window-border-radius) + 1px);
  }

  .title-bar {
    position: relative;

    display: flex;
    align-items: center;

    height: var(--window-title-bar-height);

    background-color: var(--color-background-elevated);
    border-bottom: 1px solid var(--color-border-main);
    border-top-left-radius: var(--window-border-radius);
    border-top-right-radius: var(--window-border-radius);
  }

  .window-controls {
    position: absolute;
    top: 8px;
    left: 8px;

    display: flex;
    gap: 8px;
  }

  @include linux('.window') {
    --window-border-radius: 12px;
    --window-title-bar-height: 34px;
    --window-control-size: 15px;

    .window-controls {
      top: 9px;
      right: 9px;
      left: unset;
      opacity: 0.5;
    }
  }

  .window-controls span {
    display: block;

    width: var(--window-control-size);
    height: var(--window-control-size);

    background-color: var(--color-content-tertiary);
    border-radius: 50%;
  }
</style>
