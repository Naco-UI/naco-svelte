<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Stack } from '../Stack/index.js'
  import { Typography } from '../Typography/index.js'
  // import Stack from '../Stack/Stack.svelte.js'
  import RadioGroup from './RadioGroup.svelte'

  const options = [
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third' },
  ]
  let value = 'third'
</script>

<Meta title="Components/RadioGroup" component={RadioGroup} />

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
        { value: 'first', title: 'First' },
        { value: 'second', title: 'Second' },
        { value: 'third', title: 'Third (selected by default)' },
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
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second (disabled)', disabled: true },
          { value: 'third', title: 'Third' },
        ]}
      />
    </Stack>
    <Stack>
      <Typography variant="heading-s">Disabled group</Typography>
      <RadioGroup disabled name="disabled-group" {options} />
    </Stack>
  </Stack>
</Story>
