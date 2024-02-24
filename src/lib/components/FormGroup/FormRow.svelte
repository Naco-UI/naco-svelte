<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  import { NacoTheme } from '../NacoTheme'
  import Stack from '../Stack/Stack.svelte'
  import Typography from '../Typography/Typography.svelte'
  import { getForm } from './context.js'
  import { manifest } from './FormRow.theme'
  import type { FormRowProps } from './FormRow.types.js'
  import NavigationChevron from './NavigationChevron.svelte'

  export let title: FormRowProps['title'] = undefined
  export let subtitle: FormRowProps['subtitle'] = undefined
  export let align: FormRowProps['align'] = 'center'
  export let interactive: FormRowProps['interactive'] = false

  const { largeContent } = getForm()
  const dispatch = createEventDispatcher()

  $: controlLayout = title !== undefined

  function handleKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      e.preventDefault()
      dispatch('click', e)
    }
  }

  function handleClick(e: MouseEvent): void {
    dispatch('click', e)
  }

  onMount(() => {
    if (!title && subtitle) {
      throw new Error("Subtitled can't be used without title")
    }
  })
</script>

<div class="form-row">
  <NacoTheme {manifest}>
    <div
      on:keydown={handleKeydown}
      on:click={handleClick}
      class="layout"
      class:interactive
      class:control-layout={controlLayout}
      class:large-content={$largeContent}
      role={interactive ? 'button' : 'generic'}
      style:align-items={align}
    >
      {#if controlLayout}
        <div class="left-accessory">
          <Stack direction="vertical" gap="xs">
            <Typography variant="text-m">{title}</Typography>
            {#if subtitle}
              <Typography variant="caption-s" color="tertiary">{subtitle}</Typography
              >
            {/if}
          </Stack>
        </div>
        <div class="right-accessory">
          <Stack direction="horizontal" justify="end" align="center">
            {#if interactive}
              <NavigationChevron />
            {:else}
              <slot />
            {/if}
          </Stack>
        </div>
      {:else}
        <slot />
      {/if}
    </div>
  </NacoTheme>
</div>

<style lang="scss">
  .form-row {
    position: relative;

    &:not(:last-child) .layout::after {
      content: '';

      position: absolute;
      bottom: -1px;
      left: 9px;

      display: block;

      width: calc(100% - 18px);
      height: 1px;

      background-color: var(--form-row-color-line);
    }
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr;
    min-height: var(--form-row-min-height);
    padding: var(--form-row-size-padding-vertical)
      var(--form-row-size-padding-horizontal);

    &.interactive {
      transition: var(--form-row-effect-transition);
      transition-property: background-color;

      &:hover {
        background-color: var(--form-row-color-background-hover);
      }

      &:active {
        background-color: var(--form-row-color-background-active);

        &::after {
          left: 0;
          width: 100%;
        }
      }
    }

    &.control-layout {
      grid-template-columns: 70% 30%;

      &.large-content {
        grid-template-columns: 30% 70%;
      }
    }

    & > * {
      display: block;
    }
  }
</style>
