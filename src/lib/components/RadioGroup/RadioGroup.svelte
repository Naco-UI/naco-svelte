<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  import Radio from '../Radio/Radio.svelte'
  import { Stack } from '../Stack/index.js'
  import type { RadioGroupChangeEvent, RadioGroupProps } from './RadioGroup.types.js'

  export let name: RadioGroupProps['name']
  export let value: RadioGroupProps['value'] = ''
  export let options: RadioGroupProps['options']
  export let disabled: RadioGroupProps['disabled'] = false
  export let direction: RadioGroupProps['direction'] = 'vertical'

  const dispatch = createEventDispatcher()

  function handleChange(e: RadioGroupChangeEvent): void {
    value = e.detail
    dispatch('change', value)
  }

  onMount(() => {
    if (value.length === 0) {
      value = options[0].value
    }
  })
</script>

<Stack {direction} gap={direction === 'horizontal' ? 'l' : 'm'}>
  {#each options as option}
    <Radio
      on:change={handleChange}
      checked={value === option.value}
      {...option}
      {name}
      disabled={disabled || option.disabled}
    />
  {/each}
</Stack>
