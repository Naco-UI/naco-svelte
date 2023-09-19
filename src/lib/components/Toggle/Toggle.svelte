<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import type { ToggleProps } from './Toggle.types.js'

  export let checked: ToggleProps['checked'] = false
  export let sizeMac: ToggleProps['sizeMac'] = 's'
  export let disabled: ToggleProps['disabled'] = false

  const dispatch = createEventDispatcher()

  function handleClick(): void {
    checked = !checked
    dispatch('change', checked)
  }
</script>

<label
  class="{$$restProps.class ?? ''} mac-size-{sizeMac}"
  class:checked
  class:disabled
>
  <input {disabled} type="checkbox" {checked} on:click={handleClick} />
</label>

<style lang="scss">
  label {
    --switch-knob-color: #fff;
    --switch-background-color: var(--color-background-tertiary);
    --switch-background-selected-color: var(--color-content-accent);

    position: relative;
    display: inline-block;
    width: var(--switch-width);
    height: calc(var(--switch-height) - 1px);

    &::before,
    &::after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;

      display: block;

      width: var(--switch-width);
      height: var(--switch-height);

      background-color: var(--switch-background-color);
      border-radius: 99px;

      transition: var(--transition-default);
    }

    &::before {
      outline: 1px solid var(--color-border-secondary);
    }

    &::after {
      top: 1px;
      left: 1px;

      width: calc(var(--switch-height) - 2px);
      height: calc(var(--switch-height) - 2px);

      background-color: var(--switch-knob-color);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  input {
    width: var(--switch-width);
    height: 1px;
    appearance: none;
  }

  label.checked {
    &::before {
      background-color: var(--switch-background-selected-color);
      outline: 1px solid var(--switch-background-selected-color);
    }

    &::after {
      transform: translateX(calc(var(--switch-width) - var(--switch-height)));
    }
  }

  @include mac('label') {
    --switch-width: 40px;
    --switch-height: 22px;

    &::before {
      box-shadow: 0 4px 4px 0 rgb(0 0 0 / 5%) inset;
    }

    &::after {
      top: 0;
      left: 0;

      width: var(--switch-height);
      height: var(--switch-height);

      box-shadow: 0 0.5px 4px rgb(0 0 0 / 20%);
    }

    &.mac-size-s {
      --switch-width: 26px;
      --switch-height: 15px;

      &::before {
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%) inset;
      }

      &::after {
        box-shadow: 0 0.5px 1px rgb(0 0 0 / 20%);
      }
    }
  }

  @include mac-dark('label') {
    &.mac-size-s::after {
      opacity: 0.85;
    }
  }

  @include linux('label') {
    --switch-width: 38px;
    --switch-height: 22px;
  }
</style>
