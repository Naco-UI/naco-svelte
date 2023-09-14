<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import Button from '../Button/Button.svelte'
  import Stack from './Stack.svelte'
</script>

<Meta
  title="Components/Stack"
  component={Stack}
  argTypes={{
    align: {
      options: ['start', 'center', 'end'],
      control: 'radio',
    },
    direction: {
      options: ['vertical', 'horizontal'],
      control: 'radio',
    },
    gap: {
      options: ['s', 'm', 'l'],
      control: 'radio',
    },
  }}
/>

<Story
  name="Basic"
  let:args
  args={{
    direction: 'horizontal',
    align: 'start',
    gap: 's',
  }}
>
  <Stack {...args}>
    <Button>Cancel</Button>
    <Button primary>Apply</Button>
  </Stack>
</Story>

<Story name="Combining">
  <Stack direction="vertical" gap="m">
    <Stack direction="horizontal" gap="s">
      <Button>Cancel</Button>
      <Button primary>Apply</Button>
    </Stack>
    <Stack direction="horizontal" gap="s">
      <Button color="error">Reset</Button>
      <Button primary color="error">Remove</Button>
    </Stack>
  </Stack>
</Story>
