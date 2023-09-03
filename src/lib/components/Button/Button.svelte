<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import type { ButtonProps } from './Button.types.js'

  const dispatch = createEventDispatcher()

  function handleClick (): void {
    dispatch('click')
  }

  export let variant: ButtonProps['variant'] = 'default'
  export let color: ButtonProps['color'] = 'default'
  export let fullWidth: ButtonProps['fullWidth'] = false
  export let disabled: ButtonProps['disabled'] = false
</script>

<button
  {disabled}
  class="Button variant-{variant} color-{color}"
  class:full-width={fullWidth}
  on:click={handleClick}
>
  <slot />
</button>

<style lang="scss">
  button {
    --button-color-primary: var(--color-content-primary);
    --button-color-background: var(--color-background-secondary);
    --button-border-radius: var(--border-radius-m);

    font: var(--typography-text-m);
    display: inline-block;
    position: relative;
    letter-spacing: var(--typography-letter-spacing);
    border: none;
    appearance: none;
    border-radius: var(--button-border-radius);
    background: var(--button-color-background);
    color: var(--button-color-primary);
    padding: var(--button-padding);

    &::after,
    &::before {
      z-index: 1;
      top: 0;
      left: 0;
      content: ' ';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--button-border-radius);
    }

    &::after {
      background-color: var(--color-content-primary);
      opacity: 0;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 3.5px solid var(--color-content-accent-translucent);
    }

    &.full-width {
      width: 100%;
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &.variant-primary {
      background: var(--button-color-primary);
      color: #FFF;
    }

    &.color-accent {
      --button-color-primary: var(--color-content-accent);
    }

    &.color-warning {
      --button-color-primary: var(--color-content-warning);
    }

    &.color-error {
      --button-color-primary: var(--color-content-error);
    }

    &.color-success {
      --button-color-primary: var(--color-content-success);
    }
  }

  :global(.ThemeProvider.dark) button.variant-primary.color-default {
    color: var(--color-background-primary)
  }

  :global(.os-linux) {
    button {
      --button-padding: 6px 20px;
      border: 1px solid var(--color-border-main);

      &::after {
        transition: opacity var(--transition-default);
      }

      &:hover::after {
        opacity: 0.08;
      }

      &:active::after {
        opacity: 0.2;
      }
    }
  }

  :global(.os-mac) {
    button {
      --button-padding: 2px 13px;
      box-shadow: 0 0.5px 1.5px rgb(0 0 0 / 15%);

      &:active::after {
        opacity: 0.05;
      }

      &.variant-primary::before {
        background: linear-gradient(
          180deg,
          rgb(255 255 255 / 20%) 0%,
          rgb(86 86 86 / 7%) 100%
        )
      }
    }
  }
</style>
