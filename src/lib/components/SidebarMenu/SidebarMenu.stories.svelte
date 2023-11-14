<script context="module">
  import SidebarMenu from './SidebarMenu.svelte'

  export const meta = {
    title: 'Components/SidebarMenu',
    component: SidebarMenu,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { SidebarItemIcon as icon } from '../SidebarItem/index.js'
  import { Stack } from '../Stack/index.js'
  import { Typography } from '../Typography/index.js'

  let value: string
</script>

<Story name="Basic" args={{ selected: true }} let:args>
  <Stack>
    <Typography>{value} item is selected</Typography>
    <SidebarMenu
      bind:value
      items={[
        { value: 'First', icon },
        { value: 'Second', icon },
        { value: 'Third', icon },
      ]}
    />
  </Stack>
</Story>

<Story name="Size" args={{ selected: true }}>
  <Stack>
    <Typography>{value} item is selected</Typography>
    <SidebarMenu
      bind:value
      size="l"
      items={[
        { value: 'First', icon },
        { value: 'Second', icon },
        { value: 'Third', icon },
      ]}
    />
  </Stack>
</Story>
