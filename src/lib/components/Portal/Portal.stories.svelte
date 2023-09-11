<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Button } from '../Button/index.js'
  import { Stack } from '../Stack/index.js'
  import { Typography } from '../Typography/index.js'
  import Portal from './Portal.svelte'

  let opened = false
</script>

<Meta title="Components/Portal" component={Portal} />

<Story
  name="Basic"
  args={{
    unwrapTheme: true,
    target: '#portal-target',
  }}
  let:args
>
  <div style:width="300px">
    <Stack>
      <Button
        color="accent"
        variant="primary"
        on:click={() => {
          opened = !opened
        }}
      >
        {#if opened}
          Close portal
        {:else}
          Open portal
        {/if}
      </Button>
      <div id="portal-target">
        <Typography variant="heading-m">Target container</Typography>
      </div>
      {#if opened}
        <Portal {...args}>
          <Typography>Portal is rendered here</Typography>
        </Portal>
      {/if}
    </Stack>
  </div>
</Story>

<style lang="scss">
  #portal-target {
    padding: var(--space-m);
    border: 1px solid var(--color-content-accent);
    border-radius: var(--border-radius-m);
  }
</style>
