<script context="module">
  import { Select } from '../Select/index.js'
  import { Stack } from '../Stack/index.js'
  import { Typography } from '../Typography/index.js'
  import ColorSelector from './ColorSelector.svelte'

  export const meta = {
    title: 'Components/ColorSelector',
    component: ColorSelector,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  const macColors = [
    'random',
    '#007AFF',
    '#AF52DE',
    '#FF2D55',
    '#FF9500',
    '#FC0',
    '#28CD41',
    '#8E8E93',
  ]

  let value = 'random'
  let index = 0
</script>

<Story
  name="Basic"
  let:args
  args={{
    options: macColors,
  }}
>
  <ColorSelector {...args} />
</Story>

<Story
  name="Random"
  let:args
  args={{
    options: ['random', 'random', 'random', 'random', 'random'],
  }}
>
  <ColorSelector {...args} />
</Story>

<Story
  name="Value"
  let:args
  args={{
    options: macColors,
  }}
>
  <Stack gap="m">
    <Typography>
      <b>Value</b>: {value}<br />
      <b>Index</b>: {index}
    </Typography>
    <ColorSelector bind:value bind:index {...args} />
  </Stack>
</Story>

<Story name="PrimaryProp">
  <Stack gap="m" maxWidth={150}>
    <Select
      on:change={(e) => {
        index = +e.detail
      }}
      value={index.toString()}
      options={[
        { value: '0', title: 'First' },
        { value: '1', title: 'Second' },
        { value: '2', title: 'Third' },
      ]}
    />
    <ColorSelector
      bind:index
      primaryProp="index"
      options={['#A2845E', '#A2845E', '#A2845E']}
    />
  </Stack>
</Story>
