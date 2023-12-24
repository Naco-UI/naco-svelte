<script context="module">
  import Input from './Input.svelte'

  export const meta = {
    title: 'Components/Input',
    component: Input,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'
</script>

<Story
  let:args
  name="Basic"
  args={{
    value: 'Hello, user',
    placeholder: 'Your message',
  }}
>
  <Input {...args} />
</Story>

<Story
  let:args
  name="Borderless"
  args={{
    value: 'Light input',
    placeholder: 'Placeholder',
    borderless: true,
  }}
>
  <Input {...args} />
</Story>

<Story
  let:args
  name="Disabled"
  args={{
    value: 'Disabled input',
    placeholder: 'Placeholder',
    disabled: true,
  }}
>
  <Input {...args} />
</Story>
