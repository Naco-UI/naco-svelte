<script context="module">
  import SidebarItem from './SidebarItem.svelte'

  export const meta = {
    title: 'Components/SidebarItem',
    component: SidebarItem,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import SidebarMenu from '../SidebarMenu/SidebarMenu.svelte'
  import SidebarItemIcon from './SidebarItemIcon.svelte'

  const icon = SidebarItemIcon
</script>

<Story name="Basic" args={{ selected: true }} let:args>
  <SidebarItem on:click={() => alert('Hello from menu item')} {...args}
    >Menu Item</SidebarItem
  >
</Story>

<Story name="Icon" let:args>
  <SidebarItem {...args} icon={SidebarItemIcon}>Item with icon</SidebarItem>
</Story>

<Story name="Disabled" let:args>
  <SidebarItem icon={SidebarItemIcon} {...args} disabled>Disabled item</SidebarItem>
</Story>

<Story name="Menu">
  <SidebarMenu
    items={[
      { value: 'Discover', icon },
      { value: 'Work', icon },
      { value: 'Play', icon },
    ]}
  />
</Story>
