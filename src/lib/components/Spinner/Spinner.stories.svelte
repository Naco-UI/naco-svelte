<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Stack } from '../Stack/index.js'
  import Spinner from './Spinner.svelte'
</script>

<Meta title="Components/Spinner" component={Spinner} />

<Story
  name="Basic"
  argTypes={{
    size: {
      options: ['s', 'm', 'l'],
      control: 'radio',
    },
  }}
  args={{
    size: 'm',
  }}
  let:args
>
  <Spinner {...args} />
</Story>

<Story name="Size">
  <Stack direction="horizontal">
    <Spinner size="s" />
    <Spinner size="m" />
    <Spinner size="l" />
  </Stack>
</Story>
