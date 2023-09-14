<script lang="ts">
  import { quadInOut } from 'svelte/easing'
  import { slide } from 'svelte/transition'

  import { Backdrop } from '../Backdrop/index.js'
  import { Portal } from '../Portal/index.js'
  import type { ModalProps } from './Modal.types.js'

  export let open: ModalProps['open'] = false
  export let width: ModalProps['width'] = 240

  $: widthValue = (() => {
    if (width === 'full') {
      return '100%'
    }
    if (typeof width === 'number') {
      return `${width}px`
    }
    return width
  })()
</script>

<Portal>
  <Backdrop {open}>
    <div
      class="modal"
      style:--modal-width={widthValue}
      transition:slide={{ duration: 300, easing: quadInOut, axis: 'y' }}
    >
      <slot />
    </div>
  </Backdrop>
</Portal>

<style lang="scss">
  .modal {
    --modal-background-color: var(--color-background-primary);
    --modal-border-color: var(--color-border-elevated);
    --modal-padding: 20px;

    width: 270px;
    padding: var(--modal-padding);

    background-color: var(--modal-background-color);
    border-radius: 10px;
    box-shadow: 0 38px 90px 0 rgb(0 0 0 / 25%), 0 0 2px 0 rgb(0 0 0 / 5%),
      0 0 1px 0 rgb(0 0 0 / 60%);
  }

  :global(.os-mac) .modal {
    --modal-padding: 16px;
  }

  :global(.os-linux) .modal {
    --modal-padding: 32px;
  }

  :global(.naco.light) .modal {
    --modal-background-color: var(--color-background-elevated);
  }
</style>
