<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Button } from '../Button/index.js'
  import { Stack } from '../Stack/index.js'
  import { Typography } from '../Typography/index.js'
  import Modal from './Modal.svelte'

  let showBackdrop = false
</script>

<Meta title="Components/Modal" component={Modal} />

<Story
  name="Basic"
  args={{
    open: true,
  }}
  let:args
>
  <Button
    on:click={() => {
      showBackdrop = true
    }}
  >
    Show backdrop
  </Button>
  <Modal
    on:close={() => {
      showBackdrop = false
    }}
    {...args}
    open={showBackdrop}
  >
    <Stack gap="m" align="center">
      <Typography variant="heading-s">Modal title</Typography>
      <Typography variant="text-s">
        Description text about this alert is shown here, explaining to users what the
        options underneath are about and what to do.
      </Typography>
      <Button>Close</Button>
    </Stack>
  </Modal>
</Story>
