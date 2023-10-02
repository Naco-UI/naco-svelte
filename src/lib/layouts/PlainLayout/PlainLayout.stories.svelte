<script context="module">
  import PlainLayout from './PlainLayout.svelte'

  export const meta = {
    title: 'Layouts/PlainLayout',
    component: PlainLayout,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import FormRow from '$lib/components/FormGroup/FormRow.svelte'
  import { Button, FormGroup, Typography } from '$lib/index.js'
</script>

<Story name="Basic">
  <div class="layout-wrapper">
    <Typography>Your app content:</Typography>
    <PlainLayout>
      <FormGroup>
        <FormRow title="Form title">
          <Button>Action</Button>
        </FormRow>
      </FormGroup>
    </PlainLayout>
  </div>
</Story>

<style lang="scss">
  .layout-wrapper {
    padding: 30px;
    background-color: var(--color-border-secondary);
    border-radius: 5px;
  }
</style>
