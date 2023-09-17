<script context="module">
  import Radio from './Radio.svelte'

  export const meta = {
    title: 'Components/Radio',
    component: Radio,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { RadioGroup } from '../RadioGroup/index.js'
</script>

<Story
  name="Basic"
  let:args
  args={{
    label: 'Label',
    checked: true,
  }}
>
  <Radio {...args} />
</Story>

<Story name="Disabled">
  <Radio name="disabled" value="disabled" label="Disabled item" disabled checked />
</Story>

<Story name="Group">
  <RadioGroup
    name="disabled-item"
    options={[
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second (disabled)', disabled: true },
      { value: 'third', label: 'Third' },
    ]}
  />
</Story>
<!--
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
</Story> -->
