<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import Button from '../../components/Button/Button.svelte'
  import ActionsLayout from './ActionsLayout.svelte'
</script>

<Meta
  title="Layouts/ActionsLayout"
  component={ActionsLayout}
  argTypes={{
    align: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: 'select',
    },
  }}
/>

<Template id="basic" let:args>
  <ActionsLayout align="end" {...args}>
    <Button>Cancel</Button>
    <Button variant="primary" color="accent">Apply</Button>
  </ActionsLayout>
</Template>

<Story
  template="basic"
  name="Basic"
  args={{
    align: 'start',
  }}
/>
