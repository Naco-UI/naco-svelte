<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import type { InputChangeEvent, InputProps } from './Input.types.js'

  export let value: InputProps['value'] = ''
  export let borderless: InputProps['borderless'] = false
  export let disabled: InputProps['disabled'] = false
  export let autofocus: InputProps['autofocus'] = false
  export let placeholder: InputProps['placeholder'] = undefined

  const dispatch = createEventDispatcher()

  function handleChange(e: InputChangeEvent): void {
    dispatch('change', e.currentTarget.value)
  }
</script>

<!-- svelte-ignore a11y-autofocus -->
<input
  class="input"
  class:borderless
  on:change={handleChange}
  bind:value
  {autofocus}
  {placeholder}
  {disabled}
/>

<style lang="scss">
  .input {
    --input-color-text: var(--color-content-primary);
    --input-color-background: var(--color-background-elevated);
    --input-border-radius: var(--border-radius-m);
    --input-border: none;
    --input-outline: 0 solid transparent;
    --input-box-shadow: 0 0 0 transparent;
    --input-background: transparent;
    --input-padding: 0;

    padding: var(--input-padding);

    font: var(--typography-text-m);
    color: var(--input-color-text);

    background-color: var(--input-background);
    border: none;
    border-radius: var(--input-border-radius);
    outline: none;

    transition: outline var(--transition-default);

    &::placeholder {
      color: var(--color-content-quaternary);
      opacity: 1;
    }

    &::selection {
      background-color: var(--color-content-accent-translucent);
    }

    &:focus {
      --input-outline: 2px solid var(--color-content-accent-translucent);
    }

    &:not(.borderless) {
      --input-background: var(--input-color-background);

      border: var(--input-border);
      outline: var(--input-outline);
      box-shadow: var(--input-box-shadow);
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  :global(.os-linux) {
    .input {
      --input-padding: 6px 20px;
      --input-border: 1px solid var(--color-border-main);
    }
  }

  :global(.os-mac) {
    .input {
      --input-padding: 3px 7px;
      --input-box-shadow: var(--box-shadow-m);
    }
  }
</style>
