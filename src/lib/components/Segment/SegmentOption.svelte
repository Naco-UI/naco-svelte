<script lang="ts">
  import './SegmentOption.global-styles.scss'

  import { createEventDispatcher } from 'svelte'

  import Button from '../Button/Button.svelte'
  import type { SegmentOptionProps } from './SegmentOption.types.js'

  export let value: SegmentOptionProps['value']
  export let title: SegmentOptionProps['title'] = ''
  export let disabled: SegmentOptionProps['disabled'] = false
  export let selected: SegmentOptionProps['selected'] = false

  const dispatch = createEventDispatcher()

  function handleSelect(): void {
    dispatch('select', value)
  }
</script>

<Button
  on:click={handleSelect}
  class="segment-option {selected ? 'selected' : ''}"
  {disabled}
  fullWidth
>
  {title?.length === 0 ? value : title}
</Button>
