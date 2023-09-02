<script lang="ts">
  import type { ButtonProps } from './Button.types.js'

  export let color: ButtonProps['color'] = 'default'
  export let fullWidth: ButtonProps['fullWidth'] = false
</script>

<button
  class="Button"
  class:fullWidth
>
  <slot />
</button>

<style lang="scss">
  button {
    --button-color-background: var(--color-input-background);
    --button-border-radius: 5px;

    font-size: 13px;
    border: none;
    appearance: none;
    border-radius: var(--button-border-radius);
    background: var(--button-color-background);
    color: var(--color-text);
    min-width: 64px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 15%);
    // border-top: 0.5px solid rgb(255 255 255 / 22%);

    &.autosize {
      width: 100%;
      padding: 2px 10px;
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &:active {
      background: #767676;
    }

    &.primary {
      background: linear-gradient(180deg, #3978DE 0%, #336CC5 100%);
      color: #FFF;

      &:active {
        background: #457AEB;
      }
    }
  }
</style>
