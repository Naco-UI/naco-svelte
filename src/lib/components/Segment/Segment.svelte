<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  import type { SegmentProps } from './Segment.types.js'
  import SegmentOption from './SegmentOption.svelte'
  import type { SegmentChangeEvent } from './SegmentOption.types.js'

  export let options: SegmentProps['options']
  export let value: SegmentProps['value'] = undefined
  export let disabled: SegmentProps['disabled'] = false

  const dispatch = createEventDispatcher()

  onMount(() => {
    if (!value) {
      value = options[0].value
    }
  })

  function handleSelect(e: SegmentChangeEvent): void {
    value = e.detail
    dispatch('change', e.detail)
  }
</script>

<div class="segment">
  {#each options as option}
    <SegmentOption
      on:select={handleSelect}
      {...option}
      disabled={disabled || option.disabled}
      selected={option.value === value}
    />
  {/each}
</div>

<style lang="scss">
  .segment {
    display: flex;
    border: 1px solid var(--color-border-main);
    border-radius: var(--border-radius-l);
  }

  :global(.naco.os-mac) .segment {
    background-color: var(--color-background-tertiary);
  }

  :global(.naco.os-linux) .segment {
    background-color: var(--color-background-secondary);
  }
</style>
