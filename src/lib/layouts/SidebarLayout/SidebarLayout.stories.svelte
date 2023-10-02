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

  let value: string
  let hideSidebar: boolean
  let shouldRenderSidebar: boolean
  let transparent = true
  let keepDOM = false

  const sidebarItems = [
    { value: 'First', icon },
    { value: 'Second', icon },
    { value: 'Third', icon },
  ]
</script>

<Story name="Basic" let:args>
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
</Story>

<Story name="Hide Sidebar">
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
</Story>

<Story name="Transparent" let:args>
  <div class="transparent-background">
    <div class="transparent-container">
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
    </div>
  </div>
</Story>

<style lang="scss">
  .transparent-background {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 700px;
    height: 300px;

    background-image: url('https://loremflickr.com/600/300');
  }

  .transparent-container {
    overflow: hidden;
    display: flex;

    width: 650px;
    height: 250px;

    background-color: var(--color-background-translucent);
    backdrop-filter: blur(30px);
    border: 1px solid var(--color-border-dimmed);
    border-radius: var(--border-radius-l);
    box-shadow: 0 8px 15px 0 rgb(0 0 0 / 34%);
  }
</style>
