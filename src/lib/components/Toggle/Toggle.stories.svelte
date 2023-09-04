<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import Stack from '../Stack/Stack.svelte'
  import Typography from '../Typography/Typography.svelte'
  import Toggle from './Toggle.svelte'
  import type { ToggleChangeEvent } from './Toggle.types.js'

  let checked = false

  function handleCheck(e: ToggleChangeEvent): void {
    checked = e.detail
  }
</script>

<Meta
  title="Components/Toggle"
  component={Toggle}
  argTypes={{
    sizeMac: {
      options: ['s', 'm'],
      control: 'radio',
    },
  }}
/>

<Story
  name="Basic"
  args={{
    sizeMac: 'm',
  }}
  let:args
>
  <Stack direction="horizontal">
    <Toggle on:change={handleCheck} {...args} />
    <Typography variant="heading-s">Enable option</Typography>
  </Stack>
</Story>

<Story
  name="Size"
  args={{
    sizeMac: 's',
  }}
>
  <Stack gap="m">
    <Stack direction="horizontal" gap="l">
      <Toggle bind:checked sizeMac="m" />
      <Typography variant="heading-s">Size M</Typography>
    </Stack>
    <Stack direction="horizontal" gap="l">
      <Toggle bind:checked sizeMac="s" />
      <Typography variant="heading-s">Size S</Typography>
    </Stack>
  </Stack>
</Story>

<Story name="Disabled">
  <Stack direction="horizontal">
    <Toggle sizeMac="m" checked disabled />
  </Stack>
</Story>
