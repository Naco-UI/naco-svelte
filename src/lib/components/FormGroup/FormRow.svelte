<script lang="ts">
  import { onMount } from 'svelte'

  import Stack from '../Stack/Stack.svelte'
  import Typography from '../Typography/Typography.svelte'
  import { getForm } from './context.js'
  import type { FormRowProps } from './FormRow.types.js'

  export let title: FormRowProps['title'] = undefined
  export let subtitle: FormRowProps['subtitle'] = undefined
  export let align: FormRowProps['align'] = 'center'

  const { largeContent } = getForm()

  $: controlLayout = title !== undefined

  onMount(() => {
    if (!title && subtitle) {
      throw new Error("Subtitled can't be used without title")
    }
  })
</script>

<div
  class="form-row"
  class:control-layout={controlLayout}
  class:large-content={$largeContent}
  style:align-items={align}
>
  {#if controlLayout}
    <div class="left-accessory">
      <Stack direction="vertical" gap="xs">
        <Typography variant="text-m">{title}</Typography>
        {#if subtitle}
          <Typography variant="caption-s" color="tertiary">{subtitle}</Typography>
        {/if}
      </Stack>
    </div>
    <div class="right-accessory">
      <Stack direction="horizontal" justify="end" align="center">
        <slot />
      </Stack>
    </div>
  {:else}
    <slot />
  {/if}
</div>

<style lang="scss">
  .form-row {
    position: relative;

    display: grid;
    grid-template-columns: 1fr;

    min-height: var(--form-row-min-height);
    padding: var(--form-row-padding-v) var(--form-row-padding-h);

    &.control-layout {
      grid-template-columns: 70% 30%;

      &.large-content {
        grid-template-columns: 30% 70%;
      }
    }

    & > * {
      display: block;
    }

    &:not(:last-child)::after {
      content: '';

      position: absolute;
      bottom: -1px;
      left: 9px;

      display: block;

      width: calc(100% - 18px);
      height: 1px;

      background-color: var(--color-border-dimmed);
    }
  }
</style>
