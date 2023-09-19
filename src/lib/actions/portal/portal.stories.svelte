<script context="module">
  import { portal } from './portal.action.js'

  export const meta = {
    title: 'Actions/portal',
    component: portal,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import Button from '../../components/Button/Button.svelte'
  import Stack from '../../components/Stack/Stack.svelte'
  import Typography from '../../components/Typography/Typography.svelte'

  let opened = false
</script>

<Story name="Basic">
  <Stack maxWidth={300}>
    <Button
      primary
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
      <div use:portal={'#portal-target'}>
        <Typography>Portal is rendered here</Typography>
      </div>
    {/if}
  </Stack>
</Story>

<style lang="scss">
  #portal-target {
    padding: var(--space-m);
    border: 1px solid var(--color-content-accent);
    border-radius: var(--border-radius-m);
  }
</style>
