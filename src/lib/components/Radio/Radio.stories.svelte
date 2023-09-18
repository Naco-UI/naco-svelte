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
  import { Stack } from '../Stack/index.js'
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

<Story name="Customization">
  <Stack --radio-custom-border-color="#888" --radio-custom-size="24px">
    <Radio
      --radio-custom-background="#FF453A"
      name="custom"
      value="red"
      label="Red"
      checked
    />
    <Radio
      --radio-custom-background="#28CD41"
      name="custom"
      value="green"
      label="Green"
    />
    <Radio
      --radio-custom-background="#007AFF"
      name="custom"
      value="blue"
      label="Blue"
    />
  </Stack>
</Story>
