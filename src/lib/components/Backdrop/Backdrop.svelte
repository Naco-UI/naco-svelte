<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { quadInOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'

  import { NacoTheme } from '../NacoTheme/index.js'
  import { manifest } from './Backdrop.theme.js'
  import type { BackdropProps } from './Backdrop.types.js'

  export let open: BackdropProps['open']
  export let as: BackdropProps['as'] = undefined
  export let transparent: BackdropProps['transparent'] = false

  const dispatch = createEventDispatcher()

  function handleClick(e: MouseEvent): void {
    e.stopPropagation()
    dispatch('close')
  }
</script>

{#if open}
  <NacoTheme {manifest}>
    <svelte:element
      this={as ?? 'div'}
      class="backdrop"
      class:transparent
      aria-hidden="true"
      on:click={handleClick}
      transition:fade={{ duration: 300, easing: quadInOut }}
    >
      <slot />
    </svelte:element>
  </NacoTheme>
{/if}

<style lang="scss">
  .backdrop {
    position: fixed;
    z-index: var(--z-index-backdrop);
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--backdrop-color-background);

    &.transparent {
      background-color: transparent;
    }
  }
</style>
