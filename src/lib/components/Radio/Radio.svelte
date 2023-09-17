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
    --radio-border-color: var(--color-border-main);
    --radio-inactive-background-color: var(--color-background-elevated);

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
      background-color: var(--radio-inactive-background-color);
      border-radius: 50%;
      outline: 1px solid var(--radio-border-color);

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
        --radio-border-color: transparent;

        background-color: var(--color-content-accent);

        &::after {
          background-color: white;
        }
      }
    }
  }

  .radio-label {
    padding-left: var(--space-xs);
  }

  :global(.os-mac) {
    .radio {
      --radio-size: 14px;
      --radio-selected-center-size: 6px;

      input {
        &::before {
          box-shadow: 1;
        }

        &:checked::before {
          background: linear-gradient(
            180deg,
            rgb(255 255 255 / 20%) 0%,
            rgb(86 86 86 / 7%) 100%
          );
          box-shadow: none;
        }
      }
    }
  }

  :global(.os-linux) {
    .radio {
      --radio-size: 16px;
      --radio-selected-center-size: 4px;

      input:checked {
        --radio-border-color: var(--color-content-accent);
      }
    }
  }
</style>
