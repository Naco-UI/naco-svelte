<script context="module">
  import Backdrop from './Backdrop.svelte'

  export const meta = {
    title: 'Components/Backdrop',
    component: Backdrop,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { Button } from '../Button/index.js'
  import { Spinner } from '../Spinner/index.js'

  let showBackdrop = false
</script>

<Story
  name="Basic"
  argTypes={{
    open: {
      control: 'boolean',
    },
    transparent: {
      control: 'boolean',
    },
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
