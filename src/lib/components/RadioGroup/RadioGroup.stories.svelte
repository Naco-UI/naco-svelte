<script context="module">
  import RadioGroup from './RadioGroup.svelte'

  export const meta = {
    title: 'Components/RadioGroup',
    component: RadioGroup,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { Stack } from '../Stack/index.js'
  import { Typography } from '../Typography/index.js'
  // import Stack from '../Stack/Stack.svelte.js'

  const options = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
    { value: 'third', label: 'Third' },
  ]
  let value = 'third'
</script>

<Story
  name="Basic"
  args={{
    options,
    name: 'basic',
  }}
  let:args
>
  <RadioGroup {...args} />
</Story>

<Story name="Direction">
  <Stack gap="l">
    <Stack>
      <Typography variant="heading-s">Vertical</Typography>
      <RadioGroup name="direction-vertical" direction="vertical" {options} />
    </Stack>
    <Stack>
      <Typography variant="heading-s">Horizontal</Typography>
      <RadioGroup name="direction-horizontal" direction="horizontal" {options} />
    </Stack>
  </Stack>
</Story>

<Story name="Value">
  <Stack>
    <Typography variant="heading-s">
      Current value: {value}
    </Typography>
    <RadioGroup
      name="controlled-state"
      bind:value
      options={[
        { value: 'first', label: 'First' },
        { value: 'second', label: 'Second' },
        { value: 'third', label: 'Third (selected by default)' },
      ]}
    />
  </Stack>
</Story>

<Story name="Disabled">
  <Stack gap="l">
    <Stack>
      <Typography variant="heading-s">Disabled item</Typography>
      <RadioGroup
        name="disabled-item"
        options={[
          { value: 'first', label: 'First' },
          { value: 'second', label: 'Second (disabled)', disabled: true },
          { value: 'third', label: 'Third' },
        ]}
      />
    </Stack>
    <Stack>
      <Typography variant="heading-s">Disabled group</Typography>
      <RadioGroup disabled name="disabled-group" {options} />
    </Stack>
  </Stack>
</Story>
