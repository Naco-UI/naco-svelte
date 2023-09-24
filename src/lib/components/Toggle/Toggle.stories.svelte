<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { FormGroup, FormRow } from '../FormGroup/index.js'
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

<Story name="Basic" let:args>
  <Stack direction="horizontal">
    <Toggle on:change={handleCheck} {...args} />
    <Typography variant="heading-s">Enable option</Typography>
  </Stack>
</Story>

<Story name="Form">
  <Stack gap="l" maxWidth={200}>
    <Stack justify="space-between" align="center" direction="horizontal">
      <Typography>Basic toggle</Typography>
      <Toggle />
    </Stack>
    <FormGroup>
      <FormRow title="Form toggle">
        <Toggle bind:checked />
      </FormRow>
    </FormGroup>
  </Stack>
</Story>

<Story name="Disabled">
  <Stack direction="horizontal">
    <Toggle sizeMac="m" checked disabled />
  </Stack>
</Story>
