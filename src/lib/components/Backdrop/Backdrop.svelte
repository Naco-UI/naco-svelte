<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { quadInOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'

  import type { BackdropProps } from './Backdrop.types.js'

  export let open: BackdropProps['open']
  export let as: BackdropProps['as'] = 'div'
  export let transparent: BackdropProps['transparent'] = false

  const dispatch = createEventDispatcher()

  function handleClick(e: MouseEvent): void {
    e.stopPropagation()
    dispatch('close')
  }
</script>

{#if open}
  <svelte:element
    this={as}
    class="backdrop"
    class:transparent
    aria-hidden="true"
    on:click={handleClick}
    transition:fade={{ duration: 300, easing: quadInOut }}
  >
    <slot />
  </svelte:element>
{/if}

<style lang="scss">
  .backdrop {
    --backdrop-background-color: var(--color-background-overlay);

    position: fixed;
    z-index: var(--z-index-backdrop);
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--backdrop-background-color);

    &.transparent {
      --backdrop-background-color: transparent;
    }
  }
</style>
