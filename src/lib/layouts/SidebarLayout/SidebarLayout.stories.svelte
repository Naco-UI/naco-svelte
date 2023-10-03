<script context="module">
  import SidebarLayout from './SidebarLayout.svelte'

  export const meta = {
    title: 'Layouts/SidebarLayout',
    component: SidebarLayout,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import {
    FormGroup,
    FormRow,
    SidebarItemIcon as icon,
    SidebarMenu,
    Toggle,
    Typography,
  } from '$lib/index.js'
  import { Window } from '$storybook/stories'

  let value: string
  let hideSidebar: boolean
  let shouldRenderSidebar: boolean
  let transparent = true
  let inset = true
  let keepDOM = false

  const sidebarItems = [
    { value: 'First', icon },
    { value: 'Second', icon },
    { value: 'Third', icon },
  ]
</script>

<Story name="Basic" let:args>
  <Window titlebar title="Naco UI" translucent>
    <SidebarLayout {...args}>
      <SidebarMenu bind:value slot="sidebar" items={sidebarItems} />
      <FormGroup>
        <FormRow
          align="top"
          title="Selected item"
          subtitle="With this component you can build a familiar user interface, where navigation is done through the sidebar, and the main part contains well-known components"
        >
          <Typography color="tertiary">{value}</Typography>
        </FormRow>
      </FormGroup>
    </SidebarLayout>
  </Window>
</Story>

<Story name="Hide Sidebar">
  <Window>
    <SidebarLayout bind:keepDOM bind:shouldRenderSidebar {hideSidebar}>
      <SidebarMenu bind:value slot="sidebar" items={sidebarItems} />
      <FormGroup>
        <FormRow title="Hide sidebar">
          <Toggle bind:checked={hideSidebar} />
        </FormRow>
        <FormRow title="Sidebar state">
          <Typography color="tertiary"
            >{shouldRenderSidebar ? 'Mounted' : 'Unmounted'}</Typography
          >
        </FormRow>
        <FormRow title="Keep sidebar in DOM">
          <Toggle disabled={hideSidebar} bind:checked={keepDOM} />
        </FormRow>
      </FormGroup>
    </SidebarLayout>
  </Window>
</Story>

<Story name="Transparent">
  <Window titlebar title="Naco UI" translucent>
    <SidebarLayout {hideSidebar} keepDOM {transparent}>
      <SidebarMenu slot="sidebar" items={sidebarItems} />
      <FormGroup>
        <FormRow title="Hide sidebar">
          <Toggle bind:checked={hideSidebar} />
        </FormRow>
        <FormRow title="Transparent">
          <Toggle bind:checked={transparent} />
        </FormRow>
      </FormGroup>
    </SidebarLayout>
  </Window>
</Story>

<Story name="Inset">
  <Window {inset} titlebar title="Naco UI" translucent>
    <SidebarLayout {inset} insetTitle="Naco UI" {hideSidebar} keepDOM {transparent}>
      <SidebarMenu slot="sidebar" items={sidebarItems} />
      <FormGroup>
        <FormRow title="Hide sidebar">
          <Toggle bind:checked={hideSidebar} />
        </FormRow>
        <FormRow title="Transparent">
          <Toggle bind:checked={transparent} />
        </FormRow>
        <FormRow title="Inset">
          <Toggle bind:checked={inset} />
        </FormRow>
      </FormGroup>
    </SidebarLayout>
  </Window>
</Story>
