<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { PlainLayout } from '../../layouts/PlainLayout/index.js'
  import Button from '../Button/Button.svelte'
  import { SettingsGroup, SettingsRow } from '../SettingsGroup/index.js'
  import { Stack } from '../Stack/index.js'
  import Toggle from '../Toggle/Toggle.svelte'
  // import Stack from '../Stack/Stack.svelte.js'
  import Typography from '../Typography/Typography.svelte'
  import Window from './Window.svelte'
</script>

<Meta title="Components/Window" component={Window} />

<Story
  name="Basic"
  args={{
    height: 100,
  }}
  let:args
>
  <Window {...args} />
</Story>

<Story name="Content">
  <Window title="ESP32 flasher" width={400}>
    <PlainLayout>
      <Stack gap="m">
        <SettingsGroup>
          <SettingsRow title="Firmware">
            <Button>Open...</Button>
          </SettingsRow>
        </SettingsGroup>
        <SettingsGroup title="Options">
          <SettingsRow title="Format EEPROM">
            <Toggle checked />
          </SettingsRow>
          <SettingsRow title="Animate opening applications">
            <Button>Open...</Button>
          </SettingsRow>
        </SettingsGroup>
        <SettingsGroup title="Menu bar">
          <SettingsRow title="Automatically hide and show the menu bar">
            <Typography color="tertiary" slot="postfix" variant="caption-m">
              Focus is shared across your devices, and turning one on for this device
              will turn it on for all of them.
            </Typography>
          </SettingsRow>
          <SettingsRow title="Recent documents, applications and servers" />
        </SettingsGroup>
      </Stack>
    </PlainLayout>
  </Window>
</Story>
