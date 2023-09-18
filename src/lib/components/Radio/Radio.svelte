<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import { Typography } from '../Typography/index.js'
  import type { RadioChangeEvent, RadioProps } from './Radio.types.ts'

  const dispatch = createEventDispatcher()

  export let value: RadioProps['value']
  export let name: RadioProps['name']
  export let label: RadioProps['label'] = ''
  export let disabled: RadioProps['disabled'] = false
  export let checked: RadioProps['checked'] = false

  function handleChange(e: RadioChangeEvent): void {
    dispatch('change', e.currentTarget.value)
  }
</script>

<label class="radio" class:disabled>
  <input {disabled} {checked} on:change={handleChange} type="radio" {name} {value} />
  <div class="radio-label">
    <Typography variant="text-m">
      {label}
    </Typography>
  </div>
</label>

<style lang="scss">
  .radio {
    --radio-border-color: var(
      --radio-custom-border-color,
      var(--color-border-secondary)
    );
    --radio-checked-border-color: var(--radio-custom-border-color, transparent);
    --radio-background: var(
      --radio-custom-background,
      var(--color-background-elevated)
    );
    --radio-checked-background: var(
      --radio-custom-background,
      var(--color-content-accent)
    );
    --radio-size: var(--radio-custom-size, var(--radio-inner-size));

    position: relative;
    display: flex;
    align-items: center;

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    input {
      position: relative;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      width: var(--radio-size);
      height: var(--radio-size);
      margin: 0;

      appearance: none;
      background: var(--radio-background);
      border-radius: 50%;
      box-shadow: 0 0 0 1px var(--radio-border-color) inset;

      &::after,
      &::before {
        content: '';

        position: absolute;

        display: block;

        width: var(--radio-selected-center-size);
        height: var(--radio-selected-center-size);

        background-color: transparent;
        border-radius: 50%;
      }

      &::before {
        width: 100%;
        height: 100%;
        background-color: transparent;
      }

      &:checked {
        --radio-border-color: var(--radio-checked-border-color);
        --radio-background: var(--radio-checked-background);

        &::after {
          background: white;
        }
      }
    }
  }

  .radio-label {
    padding-left: var(--space-xs);
  }

  :global(.os-mac) {
    .radio {
      --radio-inner-size: 14px;
      --radio-selected-center-size: 6px;

      input {
        &::before {
          background: linear-gradient(
            180deg,
            rgb(255 255 255 / 17%) 0%,
            rgb(255 255 255 / 0%) 100%
          );
          box-shadow: none;
        }
      }
    }
  }

  :global(.os-linux) {
    .radio {
      --radio-inner-size: 16px;
      --radio-selected-center-size: 4px;
    }
  }
</style>
