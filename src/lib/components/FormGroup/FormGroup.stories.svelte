<script context="module">
  import FormGroup from './FormGroup.svelte'

  export const meta = {
    title: 'Components/FormGroup',
    component: FormGroup,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import Button from '../Button/Button.svelte'
  import Stack from '../Stack/Stack.svelte'
  import Toggle from '../Toggle/Toggle.svelte'
  import Typography from '../Typography/Typography.svelte'
  import FormRow from './FormRow.svelte'
</script>

<Story name="Basic" let:args>
  <FormGroup {...args}>
    <FormRow title="Play sound on startup">
      <Toggle />
    </FormRow>
    <FormRow title="Play user interface sound effects">
      <Toggle />
    </FormRow>
    <FormRow title="Play feedback when volume is changed">
      <Toggle />
    </FormRow>
  </FormGroup>
</Story>

<Story name="Raw">
  <FormGroup>
    <FormRow>
      <div class="raw-row">
        <Typography align="center" fullWidth variant="heading-m">
          Raw layout
        </Typography>
      </div>
    </FormRow>
  </FormGroup>
</Story>

<Story name="Multiple groups">
  <Stack>
    <FormGroup title="Dock">
      <FormRow title="Position on screen" />
      <FormRow title="Minimize windows using" />
      <FormRow title="Minimize windows into application icon" />
    </FormGroup>
    <FormGroup>
      <FormRow title="Automatically hide and show the Dock" />
      <FormRow title="Animate opening applications" />
    </FormGroup>
    <FormGroup title="Menu bar">
      <FormRow title="Automatically hide and show the menu bar" />
      <FormRow title="Recent documents, applications and servers" />
    </FormGroup>
  </Stack>
</Story>

<Story name="Multiple actions">
  <FormGroup>
    <FormRow title="Settings">
      <Button>Open...</Button>
      <Button primary color="error">Reset</Button>
    </FormRow>
  </FormGroup>
</Story>

<Story name="Subtitle">
  <FormGroup>
    <FormRow
      title="Share across devices"
      subtitle="Focus is shared across your devices, and turning one on for this device will
    turn it on for all of them."
    >
      <Toggle />
    </FormRow>
  </FormGroup>
</Story>

<Story name="Align">
  <FormGroup>
    <FormRow
      align="top"
      title="Share across devices"
      subtitle="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself."
    >
      <Toggle />
    </FormRow>
  </FormGroup>
</Story>

<Story name="Balance">
  <FormGroup largeContent>
    <FormRow
      align="top"
      title="Share across devices"
      subtitle="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself."
    >
      <Toggle />
    </FormRow>
  </FormGroup>
</Story>

<style lang="scss">
  .raw-row {
    display: flex;
    align-items: center;
    height: 100px;
    background-color: rgb(255 83 83 / 12%);
  }
</style>
