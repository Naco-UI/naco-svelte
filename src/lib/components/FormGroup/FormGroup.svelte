<script lang="ts">
  import Typography from '../Typography/Typography.svelte'
  import { createFormContext } from './context.js'
  import type { FormGroupProps } from './FormGroup.types.js'

  export let title: FormGroupProps['title'] = undefined
  export let largeContent: FormGroupProps['largeContent'] = false
  const context = createFormContext({ title, largeContent })

  $: title && context.title.set(title)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  $: largeContent, context.largeContent.set(largeContent as boolean)
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
    overflow: hidden;
    background-color: var(--color-overlay-quinary);
    border: 1px solid var(--color-border-main);
    border-radius: var(--form-border-radius);
  }

  .heading {
    margin-bottom: var(--space-m);
    padding: 0 var(--form-group-padding-horizontal);
  }

  .form-group:not(:first-child) .heading {
    margin-top: var(--space-l);
  }

  :global(.naco.os-linux) .form-group {
    --form-group-padding-vertical: 16px;
    --form-group-padding-horizontal: 14px;
    --form-border-radius: 8px;
  }

  :global(.naco.os-mac) .form-group {
    --form-group-padding-vertical: 9px;
    --form-group-padding-horizontal: 9px;
    --form-border-radius: 5px;
  }
</style>
