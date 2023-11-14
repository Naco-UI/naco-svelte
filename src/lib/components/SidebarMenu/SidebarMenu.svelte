<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  import { SidebarItem } from '../SidebarItem/index.js'
  import { Stack } from '../Stack/index.js'
  import type { SidebarMenuProps } from './SidebarMenu.types.js'

  export let items: SidebarMenuProps['items']
  export let value: SidebarMenuProps['value'] = undefined
  export let size: SidebarMenuProps['size'] = 'm'

  const dispatch = createEventDispatcher()

  function handleChange(newValue: string): void {
    value = newValue
    dispatch('change', value)
  }

  onMount(() => {
    if (value) {
      return
    }
    value = items[0].value
  })
</script>

<Stack gap="none" direction="vertical">
  {#each items as item}
    <SidebarItem
      on:click={() => handleChange(item.value)}
      selected={value === item.value}
      disabled={item.disabled}
      icon={item.icon}
      {size}
    >
      {item.title ?? item.value}
    </SidebarItem>
  {/each}
</Stack>
