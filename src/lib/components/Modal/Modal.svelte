<script lang="ts">
  import { quintOut } from 'svelte/easing'
  import { crossfade } from 'svelte/transition'

  import { scrollLock } from '$lib/actions/scrollLock/index.js'

  import { Backdrop } from '../Backdrop/index.js'
  import { Portal } from '../Portal/index.js'
  import type { ModalProps } from './Modal.types.js'

  export let open: ModalProps['open'] = false
  export let translucent: ModalProps['translucent'] = false
  export let width: ModalProps['width'] = undefined
  export let scrollTarget: ModalProps['scrollTarget'] = undefined
  const transitionDuration = 300

  export const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * transitionDuration),

    fallback(node, params) {
      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
          transform: translateY(calc((1 - ${t}) * -50px));
          opacity: ${t}
        `,
      }
    },
  })

  $: widthValue = (() => {
    if (width === 'full') {
      return '100%'
    }
    if (typeof width === 'number') {
      return `${width}px`
    }
    return 240
  })()
</script>

<Portal>
  <Backdrop {open}>
    <div
      use:scrollLock={{
        lock: open,
        unlockDelay: transitionDuration,
        target: scrollTarget ?? document.body,
      }}
      class="modal"
      class:translucent
      style:--modal-width={widthValue}
      in:receive={{ key: 'modal' }}
      out:send={{ key: 'modal' }}
    >
      <div class="scroll">
        <slot />
      </div>
      <slot name="actions" />
    </div>
  </Backdrop>
</Portal>

<style lang="scss">
  .modal {
    --modal-background-color: var(--color-background-primary);
    --modal-border-color: var(--color-border-elevated);
    --modal-padding: 20px;

    display: flex;
    flex-direction: column;

    width: var(--modal-width);
    max-height: calc(100vh - (var(--modal-padding) * 2));
    padding: 0 var(--modal-padding);

    background-color: var(--modal-background-color);
    border-radius: 10px;
  }

  .scroll {
    overflow-y: scroll;
    margin-right: calc(var(--scroll-bar-track-width) * -1);
    padding: var(--modal-padding) 0;
  }

  :global(.os-mac) .modal {
    --modal-padding: 16px;

    box-shadow:
      0 0 3px 0 var(--color-border-dimmed) inset,
      0 0 1px 0 var(--color-border-elevated),
      var(--box-shadow-modal);

    &.translucent {
      --modal-background-color: var(--color-background-translucent);

      backdrop-filter: blur(15px);
    }
  }

  :global(.os-linux) .modal {
    --modal-padding: 32px;

    border: 1px solid var(--color-border-main);
  }

  :global(.naco.light) .modal:not(.translucent) {
    --modal-background-color: var(--color-background-elevated);
  }
</style>
