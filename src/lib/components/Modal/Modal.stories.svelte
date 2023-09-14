<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Button } from '../Button/index.js'
  import { SettingsGroup, SettingsRow } from '../SettingsGroup/index.js'
  import { Stack } from '../Stack/index.js'
  import { Toggle } from '../Toggle/index.js'
  import { Typography } from '../Typography/index.js'
  import Modal from './Modal.svelte'
  import ModalActions from './ModalActions.svelte'

  let showModal = false
</script>

<Meta title="Components/Modal" component={Modal} />

<Story
  name="Basic"
  args={{
    translucent: false,
    width: 240,
  }}
  argTypes={{
    translucent: {
      description: 'Flag to make a window translucent on macOS',
    },
    scrollTarget: {
      description: 'The element on which scrolling will be locked on opening',
    },
  }}
  let:args
>
  <Button
    on:click={() => {
      showModal = true
    }}
    primary
  >
    Show modal
  </Button>
  <Modal
    on:close={() => {
      showModal = false
    }}
    {...args}
    open={showModal}
  >
    <Stack gap="l" align="center">
      <Typography variant="heading-s">Modal title</Typography>
      <Typography variant="text-s" align="center">
        Description text about this alert is shown here, explaining to users what the
        options underneath are about and what to do.
      </Typography>
      <Stack direction="horizontal">
        <Button
          fullWidth
          variant="alert"
          hotkey="Escape"
          on:click={() => {
            showModal = false
          }}>Close</Button
        >
        <Button
          fullWidth
          primary
          variant="alert"
          on:click={() => {
            showModal = false
          }}>Continue</Button
        >
      </Stack>
    </Stack>
  </Modal>
</Story>

<Story name="Width">
  <Button
    on:click={() => {
      showModal = true
    }}
    primary
  >
    Show modal
  </Button>
  <Modal width={400} open={showModal}>
    <Stack>
      <SettingsGroup>
        <SettingsRow title="Recent application">
          <Toggle />
        </SettingsRow>
        <SettingsRow title="Desktop items">
          <Toggle />
        </SettingsRow>
      </SettingsGroup>
      <SettingsGroup>
        <SettingsRow title="Show windows from an application">
          <Toggle />
        </SettingsRow>
      </SettingsGroup>
    </Stack>
    <ModalActions>
      <Button
        on:click={() => {
          showModal = false
        }}
        primary>Done</Button
      >
    </ModalActions>
  </Modal>
</Story>
