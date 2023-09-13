<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Button } from '../Button/index.js'
  import { Spinner } from '../Spinner/index.js'
  import Backdrop from './Backdrop.svelte'

  let showBackdrop = false
</script>

<Meta title="Components/Backdrop" component={Backdrop} />

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
  <Backdrop
    on:close={() => {
      showBackdrop = false
    }}
    {...args}
    open={showBackdrop}
  >
    <Spinner size="l" />
  </Backdrop>
</Story>
