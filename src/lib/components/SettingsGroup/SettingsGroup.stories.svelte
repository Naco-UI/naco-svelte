<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import Button from '../Button/Button.svelte'
  import Stack from '../Stack/Stack.svelte'
  import Toggle from '../Toggle/Toggle.svelte'
  import Typography from '../Typography/Typography.svelte'
  import SettingsGroup from './SettingsGroup.svelte'
  import SettingsRow from './SettingsRow.svelte'
</script>

<Meta title="Components/SettingsGroup" component={SettingsGroup} />

<Story name="Basic" let:args>
  <SettingsGroup {...args}>
    <SettingsRow title="Play sound on startup">
      <Toggle />
    </SettingsRow>
    <SettingsRow title="Play user interface sound effects">
      <Toggle />
    </SettingsRow>
    <SettingsRow title="Play feedback when volume is changed">
      <Toggle />
    </SettingsRow>
  </SettingsGroup>
</Story>

<Story name="Multiple groups">
  <Stack>
    <SettingsGroup title="Dock">
      <SettingsRow title="Position on screen" />
      <SettingsRow title="Minimize windows using" />
      <SettingsRow title="Minimize windows into application icon" />
    </SettingsGroup>
    <SettingsGroup>
      <SettingsRow title="Automatically hide and show the Dock" />
      <SettingsRow title="Animate opening applications" />
    </SettingsGroup>
    <SettingsGroup title="Menu bar">
      <SettingsRow title="Automatically hide and show the menu bar" />
      <SettingsRow title="Recent documents, applications and servers" />
    </SettingsGroup>
  </Stack>
</Story>

<Story name="Multiple actions">
  <SettingsGroup>
    <SettingsRow title="Settings">
      <Button>Open...</Button>
      <Button primary color="error">Reset</Button>
    </SettingsRow>
  </SettingsGroup>
</Story>

<Story name="Postfix">
  <SettingsGroup>
    <SettingsRow title="Share across devices">
      <Toggle />
      <Typography color="tertiary" slot="postfix" variant="caption-m">
        Focus is shared across your devices, and turning one on for this device will
        turn it on for all of them.
      </Typography>
    </SettingsRow>
  </SettingsGroup>
</Story>
