<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import Typography from '../Typography/Typography.svelte'
  import Segment from './Segment.svelte'

  let disableLaze = true
  let titleValue = 'point-click'
</script>

<Meta title="Components/Segment" component={Segment} />

<Template id="basic" let:args>
  <Segment {...args} />
</Template>

<Story
  template="basic"
  name="Basic"
  args={{
    options: [
      {
        value: 'output',
        title: 'Output',
        disabled: false,
      },
      {
        value: 'input',
        title: 'Input',
        disabled: false,
      },
    ],
    value: 'output',
  }}
/>

<Story name="Disabled">
  <Segment
    disabled
    options={[{ value: 'Last 24 Hours' }, { value: 'Last 10 Days' }]}
  />
</Story>

<Story name="Controlled disabled">
  <Typography variant="text-m">
    It's okay to be lazy after you've worked hard
  </Typography>
  <Segment
    on:change={(e) => {
      disableLaze = e.detail === 'Wake Up'
    }}
    options={[
      { value: 'Wake Up' },
      { value: 'Laze', disabled: disableLaze },
      { value: 'Work' },
    ]}
  />
</Story>

<Story name="Title">
  <Typography variant="text-m">
    Selected value: {titleValue}
  </Typography>
  <Segment
    bind:value={titleValue}
    options={[
      { value: 'point-click', title: 'Point & Click' },
      { value: 'scroll-zoom', title: 'Scroll & Zoom' },
      { value: 'more', title: 'More Gestures' },
    ]}
  />
</Story>
