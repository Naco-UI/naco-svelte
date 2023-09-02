<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import Button from './Button.svelte'
</script>

<Meta title="Button" component={Button} argTypes={{
  color: {
    defaultValue: 'default',
    options: ['default', 'accent'],
    control: 'select',
  },
}}/>

<Template id="base" let:args>
  <Button {...args}>
    Click me
  </Button>
</Template>

<Story
  template="base"
  id="base"
  name="Base button"
  args={{ color: 'default' }}
/>
