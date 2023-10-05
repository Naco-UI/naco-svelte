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
  import { Button, FormGroup, Toggle, Typography } from '$lib/index.js'
  import { Window } from '$storybook/stories'

  let transparent = true
  let inset = true
</script>

<Story name="Basic" let:args>
  <Window titlebar translucent>
    <PlainLayout {...args}>
      <FormGroup>
        <FormRow>
          <Typography color="tertiary"
            >Night Shift is a feature that automatically adjusts the display color
            temperature of your device to reduce blue light exposure during evening
            and nighttime hours.</Typography
          >
        </FormRow>
        <FormRow title="Turn on until tomorrow">
          <Toggle />
        </FormRow>
        <FormRow title="Settings">
          <Button>Reset</Button>
        </FormRow>
      </FormGroup>
    </PlainLayout>
  </Window>
</Story>

<Story name="Transparent">
  <Window translucent>
    <PlainLayout {transparent}>
      <FormGroup>
        <FormRow title="Transparent">
          <Toggle bind:checked={transparent} />
        </FormRow>
        <FormRow>
          <Typography color="tertiary"
            >Translucency can improve the integration of foreground and background
            elements, visually communicating a separation between layers and helping
            people retain a sense of place. To enhance translucency, materials can
            combine with vibrancy. Vibrancy amplifies the sense of depth for
            foreground content like text, symbols, and fills, by pulling color
            forward from behind the material.</Typography
          >
        </FormRow>
      </FormGroup>
    </PlainLayout>
  </Window>
</Story>

<Story name="Inset">
  <Window translucent titlebar {inset}>
    <PlainLayout insetSafeToolbar={false} {inset}>
      <Typography slot="toolbar" fullWidth align="center" variant="heading-s"
        >Naco UI</Typography
      >
      <FormGroup>
        <FormRow title="Inset">
          <Toggle bind:checked={inset} />
        </FormRow>
      </FormGroup>
    </PlainLayout>
  </Window>
</Story>

<Story name="Scroll">
  <Window height={200} translucent titlebar {inset}>
    <PlainLayout insetSafeToolbar={false} {inset}>
      <Typography slot="toolbar" fullWidth align="center" variant="heading-s"
        >Naco UI</Typography
      >
      <div class="scroll">
        <FormGroup>
          <FormRow>
            <Typography fullWidth align="center">Scroll start</Typography>
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormRow>
            <Typography fullWidth align="center">Scroll end</Typography>
          </FormRow>
        </FormGroup>
      </div>
    </PlainLayout>
  </Window>
</Story>

<style lang="scss">
  .scroll {
    display: flex;
    flex-direction: column;
    gap: 600px;
  }
</style>
