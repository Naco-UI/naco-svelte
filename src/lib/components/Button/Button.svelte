<script lang="ts">
  import { onHotkey } from '$lib/actions/hotkey/index.js'

  import type { ButtonProps } from './Button.types.js'

  export let variant: ButtonProps['variant'] = 'default'
  export let primary: ButtonProps['primary'] = false
  export let color: ButtonProps['color'] = primary ? 'accent' : 'default'
  export let hotkey: ButtonProps['hotkey'] = undefined
  export let fullWidth: ButtonProps['fullWidth'] = false
  export let disabled: ButtonProps['disabled'] = false

  let buttonRef: HTMLButtonElement

  onHotkey(hotkey ?? '', () => {
    buttonRef.click()
  })
</script>

<button
  {disabled}
  bind:this={buttonRef}
  class="Button variant-{variant} color-{color} {$$restProps.class ?? ''}"
  class:full-width={fullWidth}
  class:primary
  on:click
  on:dblclick
  on:mousedown
  on:mouseenter
  on:mouseleave
  on:contextmenu
>
  <slot />
</button>

<style lang="scss">
  button {
    --button-color-primary: var(--color-content-primary);
    --button-color-background: var(--color-background-elevated);
    --button-border-radius: var(--border-radius-m);

    position: relative;

    display: inline-block;

    padding: var(--button-padding);

    font: var(--typography-text-m);
    color: var(--button-color-primary);
    letter-spacing: var(--typography-letter-spacing);

    appearance: none;
    background: var(--button-color-background);
    border: none;
    border-radius: var(--button-border-radius);

    &::after,
    &::before {
      content: ' ';

      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;

      display: block;

      width: 100%;
      height: 100%;

      border-radius: var(--button-border-radius);
    }

    &::after {
      opacity: 0;
      background-color: var(--color-content-primary);
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
      pointer-events: none;
      opacity: 0.5;
    }

    &.primary {
      color: #fff;
      background: var(--button-color-primary);
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

  :global(.naco.dark) button.primary.color-default {
    color: var(--color-background-primary);
  }

  :global(.os-linux) {
    button {
      --button-padding: 6px 20px;

      border: 1px solid var(--color-border-main);

      &::after {
        transition: opacity var(--transition-default);
      }

      &.variant-alert {
        --button-padding: 5px 15px;
        --button-color-background: var(--color-background-quinary);

        border: none;
        box-shadow: none;
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
      --button-padding: 3px 10px;

      box-shadow: var(--box-shadow-m);

      &.variant-alert {
        --button-padding: 6px 20px;
        --button-color-background: var(--color-background-quinary);

        box-shadow: none;
      }

      &:active::after {
        opacity: 0.05;
      }

      &.primary::before {
        background: linear-gradient(
          180deg,
          rgb(255 255 255 / 17%) 0%,
          rgb(255 255 255 / 0%) 100%
        );
      }
    }
  }
</style>
