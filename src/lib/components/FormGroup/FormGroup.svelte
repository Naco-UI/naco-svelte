<script lang="ts">
  import Typography from '../Typography/Typography.svelte'
  import { createFormContext } from './context.js'
  import type { FormGroupProps } from './FormGroup.types.js'

  export let title: FormGroupProps['title'] = undefined
  const context = createFormContext({ title })

  const titleChanged = (): void => {
    context.title.set(title)
  }

  $: title && titleChanged()
</script>

<div class="form-group">
  {#if title}
    <div class="heading">
      <Typography as="h3" variant="heading-s">
        {title}
      </Typography>
    </div>
  {/if}
  <div class="rows">
    <slot />
  </div>
</div>

<style lang="scss">
  .rows {
    background-color: var(--color-overlay-quinary);
    border: 1px solid var(--color-border-main);
    border-radius: var(--form-border-radius);
  }

  .heading {
    margin-bottom: var(--space-m);
    padding: 0 var(--form-row-padding-h);
  }

  .form-group:not(:first-child) .heading {
    margin-top: var(--space-l);
  }

  :global(.naco.os-linux) .form-group {
    --form-row-padding-v: 12px;
    --form-row-padding-h: 14px;
    --form-border-radius: 0;
    --form-row-min-height: 34px;
  }

  :global(.naco.os-mac) .form-group {
    --form-row-padding-v: 9px;
    --form-row-padding-h: 9px;
    --form-border-radius: 5px;
    --form-row-min-height: 20px;
  }
</style>
