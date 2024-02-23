<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  import { isForm } from '../FormGroup/index.js'
  import { Typography } from '../Typography/index.js'
  import type { SelectProps } from './Select.types.js'
  import SelectStepper from './SelectStepper.svelte'

  export let value: SelectProps['value'] = undefined
  export let options: SelectProps['options']
  export let disabled: SelectProps['disabled'] = false

  const dispatch = createEventDispatcher()
  const borderless = isForm()

  function handleChange(event: { currentTarget: HTMLSelectElement }): void {
    value = event.currentTarget.value
    dispatch('change', value)
  }

  onMount(() => {
    if (!value) {
      value = options[0].value
    }
  })

  $: selected = options.find((o) => o.value === value)
</script>

<div class="select" class:borderless class:disabled>
  <select on:mousedown on:mouseup on:click on:change={handleChange} {value}>
    {#each options as option}
      <option disabled={option.disabled} value={option.value}
        >{option.title ?? option.value}</option
      >
    {/each}
  </select>
  <div class="foreground">
    <Typography>{selected?.title ?? selected?.value}</Typography>
    <SelectStepper />
  </div>
</div>

<style lang="scss">
  .select {
    --select-font: var(--typography-text-m);
    --select-border-radius: var(--border-radius-l);
    --select-border-color: var(--color-border-main);
    --select-background-color: var(--color-background-elevated);
    --select-stepper-gap: var(--space-s);
    --select-stepper-background-color: var(--color-content-accent);
    --select-stepper-foreground-color: var(--color-content-accent);

    position: relative;

    display: flex;
    align-items: center;

    background-color: var(--select-background-color);
    border: 1px solid var(--select-border-color);
    border-radius: var(--select-border-radius);

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &.borderless {
      --select-background-color: transparent;
      --select-border-color: transparent;
    }
  }

  select {
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    font: var(--select-font);

    appearance: none;
    opacity: 0;
    background: transparent;
    border: none;
  }

  .foreground {
    display: flex;
    gap: var(--select-stepper-gap);
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: var(--select-padding);
  }

  :global(.os-mac) .select {
    --select-padding: 2px 2px 2px 13px;
    --select-stepper-background-color: var(--color-content-accent);
    --select-stepper-foreground-color: var(--color-content-inverted);

    box-shadow: var(--box-shadow-s);

    &.borderless {
      --select-stepper-background-color: var(--color-background-tertiary);
      --select-stepper-foreground-color: var(--color-content-primary);

      box-shadow: none;

      &:hover {
        --select-background-color: var(--color-background-elevated);
        --select-stepper-background-color: transparent;

        box-shadow: var(--box-shadow-s);
      }
    }
  }

  :global(.os-linux) .select {
    --select-padding: 6px 6px 6px 20px;
    --select-stepper-background-color: transparent;
    --select-stepper-foreground-color: var(--color-content-primary);

    &::after {
      pointer-events: none;
      content: ' ';

      position: absolute;

      display: block;

      width: 100%;
      height: 100%;

      opacity: 0;
      background-color: var(--color-content-primary);
      border-radius: var(--select-border-radius);

      transition: var(--transition-default);
    }

    &:hover::after {
      opacity: 0.08;
    }
  }
</style>
