<script lang="ts">
  export let height: number | 'auto' = 'auto'
  export let translucent = false

  $: sheetHeight = typeof height === 'number' ? `${height}px` : height
</script>

<div
  class="overlay"
  style:--sheet-height={sheetHeight}
  class:background={translucent}
>
  <div class="sheet" class:translucent>
    <slot />
  </div>
</div>

<style lang="scss">
  .overlay {
    --sheet-padding: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &.background {
      background-image: url('/images/wallpaper.jpg');
      background-position: center;
      background-size: cover;
    }
  }

  .sheet {
    overflow: hidden;
    display: flex;

    width: 100%;
    max-width: 700px;
    height: var(--sheet-height);
    margin: var(--sheet-padding);

    background-color: var(--color-background-primary);
    border-radius: var(--border-radius-l);
    box-shadow: 0 8px 40px 0 rgb(0 0 0 / 25%),
      0 0 3px 0 rgb(255 255 255 / 10%) inset;

    &.translucent {
      background-color: var(--color-background-translucent);
      backdrop-filter: blur(30px);
    }
  }
</style>
