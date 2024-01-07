<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import { isForm } from '../FormGroup/index.js'
  import { NacoTheme } from '../NacoTheme/index.js'
  import { manifest } from './Toggle.theme.js'
  import type { ToggleProps } from './Toggle.types.js'

  export let checked: ToggleProps['checked'] = false
  export let disabled: ToggleProps['disabled'] = false

  const isInForm = isForm()

  const dispatch = createEventDispatcher()

  function handleClick(): void {
    checked = !checked
    dispatch('change', checked)
  }
</script>

<NacoTheme {manifest} let:os>
  <label
    class={$$restProps.class ?? ''}
    class:checked
    class:disabled
    class:mac-form={os === 'mac' && isInForm}
  >
    <input {disabled} type="checkbox" {checked} on:click={handleClick} />
  </label>
</NacoTheme>

<style lang="scss">
  label {
    position: relative;

    display: inline-block;

    width: var(--toggle-size-width);
    height: calc(var(--toggle-size-height) - 1px);

    opacity: var(--toggle-effect-opacity);

    transition: var(--transition-default);

    &::before,
    &::after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;

      display: block;

      width: var(--toggle-size-width);
      height: var(--toggle-size-height);

      background-color: var(--toggle-color-track);
      border-radius: var(--toggle-size-height);

      transition: var(--transition-default);
    }

    &::before {
      outline: 1px solid var(--toggle-color-track-border);
      box-shadow: var(--toggle-effect-shadow-track);
    }

    &::after {
      top: 1px;
      left: 1px;

      width: calc(var(--toggle-size-height) - 2px);
      height: calc(var(--toggle-size-height) - 2px);

      background-color: var(--toggle-color-knob);
      box-shadow: var(--toggle-effect-shadow-knob);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &.mac-form {
      --toggle-size-width: var(--toggle-size-form-width);
      --toggle-size-height: var(--toggle-size-form-height);
      --toggle-effect-shadow-knob: var(--toggle-effect-shadow-form-knob);
    }
  }

  input {
    width: var(--toggle-size-width);
    height: var(--toggle-size-height);
    appearance: none;
  }

  label.checked {
    &::before {
      background-color: var(--toggle-color-track-selected);
      outline: 1px solid var(--toggle-color-track-selected);
    }

    &::after {
      transform: translateX(
        calc(var(--toggle-size-width) - var(--toggle-size-height))
      );
    }
  }
</style>
