<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { PlainLayout } from '../../layouts/PlainLayout/index.js'
  import Button from '../Button/Button.svelte'
  import { FormGroup, FormRow } from '../FormGroup/index.js'
  import { Stack } from '../Stack/index.js'
  import Toggle from '../Toggle/Toggle.svelte'
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
        <FormGroup>
          <FormRow title="Firmware">
            <Button>Open...</Button>
          </FormRow>
        </FormGroup>
        <FormGroup title="Options">
          <FormRow title="Format EEPROM">
            <Toggle checked />
          </FormRow>
          <FormRow title="Animate opening applications">
            <Button>Open...</Button>
          </FormRow>
        </FormGroup>
        <FormGroup title="Menu bar">
          <FormRow
            title="Automatically hide and show the menu bar"
            subtitle="Focus is shared across your devices, and turning one on for this device
          will turn it on for all of them."
          />
          <FormRow title="Recent documents, applications and servers" />
        </FormGroup>
      </Stack>
    </PlainLayout>
  </Window>
</Story>
