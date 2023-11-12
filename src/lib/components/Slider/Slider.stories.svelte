<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Stack } from '../Stack/index.js'
  import { Typography } from '../Typography/index.js'
  import { fillMarks } from './fill-marks.js'
  import Slider from './Slider.svelte'

  let value: number = 50
</script>

<Meta title="Components/Slider" component={Slider} />

<Story
  name="Basic"
  argTypes={{
    min: {
      type: {
        name: 'number',
        required: true,
      },
    },
    max: {
      type: {
        name: 'number',
        required: true,
      },
    },
    step: {
      type: {
        name: 'number',
        required: true,
      },
    },
  }}
  args={{
    min: 0,
    max: 100,
    step: 1,
  }}
  let:args
>
  <Stack direction="horizontal" align="center">
    <Slider {...args} bind:value />
    <Typography>{value}</Typography>
  </Stack>
</Story>

<Story name="Marks">
  <Stack gap="none" maxWidth={500}>
    <Slider
      min={0}
      max={100}
      step={2}
      marks={[
        { progress: 0, title: 'Left' },
        { progress: 0.5 },
        { progress: 1, title: 'Right' },
      ]}
      value={50}
    />
    <Slider
      min={0}
      max={100}
      step={2}
      marks={[
        { progress: 0, title: 'Silent' },
        { progress: 0.5 },
        { progress: 1, title: 'Loud' },
      ]}
      value={50}
    />
  </Stack>
</Story>

<Story name="Mark Helpers">
  <Stack maxWidth={200}>
    <Slider
      min={0}
      max={100}
      step={25}
      marks={fillMarks(5, {
        1: 'Off',
        2: 'Slow',
        5: 'Fast',
      })}
      value={2}
    />
  </Stack>
</Story>

<Story name="Disabled">
  <Stack maxWidth={200}>
    <Slider min={0} max={100} step={25} value={100} disabled />
  </Stack>
</Story>
