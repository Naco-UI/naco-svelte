<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  import { getUniqueId } from '$lib/utils/index.js'

  import Radio from '../Radio/Radio.svelte'
  import { Stack } from '../Stack/index.js'
  import { getTheme } from '../ThemeProvider/context.js'
  import { radioSize, randomGradient } from './ColorSelector.constants.js'
  import type { ColorSelectorProps } from './ColorSelector.types.js'

  export let name: ColorSelectorProps['name'] = undefined
  export let value: ColorSelectorProps['value'] = undefined
  export let options: ColorSelectorProps['options']
  export let primaryProp: ColorSelectorProps['primaryProp'] = 'value'
  export let disabled: ColorSelectorProps['disabled'] = false
  export let index: ColorSelectorProps['index'] = undefined

  const finalName: string = name ?? getUniqueId('color-selector-')

  const dispatch = createEventDispatcher()

  const { os } = getTheme()

  function handleChange(e: CustomEvent<string>, i: number): void {
    value = e.detail
    index = i
    dispatch('change', {
      value,
      index,
    })
  }

  onMount(() => {
    if (!value) {
      value = options[index ?? 0]
    }
  })
</script>

<Stack
  direction="horizontal"
  gap="xs"
  --radio-custom-border-color="var(--color-border-main)"
  --radio-custom-size="{radioSize[$os]}px"
>
  {#each options as option, i}
    <Radio
      --radio-custom-background={option === 'random' ? randomGradient : option}
      on:change={(e) => handleChange(e, i)}
      checked={primaryProp === 'value' ? option === value : index === i}
      value={option}
      name={finalName}
      {disabled}
    />
  {/each}
</Stack>
