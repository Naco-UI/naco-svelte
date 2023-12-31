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
  import Stack from '$lib/components/Stack/Stack.svelte'
  import { ToolbarInsetTitle } from '$lib/components/Toolbar'
  import { Button, FormGroup, Select, Toggle, Typography } from '$lib/index.js'
  import { Window } from '$storybook/stories'

  let transparent = true
  let inset = true
  let customToolbarSize = '300'
</script>

<Story name="Basic" let:args>
  <Window height={200} titlebar translucent>
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
  <Window height={200} translucent>
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
  <Window height={200} translucent titlebar {inset}>
    <PlainLayout
      macInset={{
        enable: inset,
        title: 'Naco UI',
      }}
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
    <PlainLayout
      macInset={{
        title: 'Naco UI',
      }}
      toolbar={{
        transparent: true,
        border: 'scroll',
      }}
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

<Story name="Transparent Titlebar">
  <Window height={200} translucent titlebar {inset}>
    <PlainLayout
      toolbar={{
        transparent: true,
      }}
      macInset={{
        title: 'Naco UI',
      }}
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

<Story name="Titlebar">
  <Window height={300} translucent titlebar {inset}>
    <PlainLayout
      macInset={{
        enable: inset,
      }}
    >
      <svelte:fragment slot="toolbar">
        <Stack align="center" gap="s" direction="horizontal">
          <Button>Action</Button>
          <ToolbarInsetTitle value="Naco UI" />
        </Stack>
        <Button>Action</Button>
      </svelte:fragment>
      <FormGroup>
        <FormRow>
          <Typography fullWidth align="center">Titlebar app content</Typography>
        </FormRow>
        <FormRow title="Inset">
          <Toggle bind:checked={inset} />
        </FormRow>
      </FormGroup>
    </PlainLayout>
  </Window>
</Story>

<Story name="Custom Toolbar">
  <Window height={500} translucent titlebar {inset}>
    <PlainLayout
      toolbar={{
        height: +customToolbarSize,
        padding: 'none',
      }}
      macInset={{
        enable: inset,
      }}
    >
      <div class="custom-toolbar" slot="toolbar">
        <span>Custom toolbar</span>
      </div>
      <FormGroup>
        <FormRow>
          <Typography fullWidth align="center">Custom toolbar app content</Typography
          >
        </FormRow>
        <FormRow title="Inset">
          <Toggle bind:checked={inset} />
        </FormRow>
        <FormRow title="Size">
          <Select
            bind:value={customToolbarSize}
            options={[
              { value: '300', title: 'Large' },
              { value: '150', title: 'Medium' },
              { value: '50', title: 'Small' },
            ]}
          />
        </FormRow>
      </FormGroup>
    </PlainLayout>
  </Window>
</Story>

<style lang="scss">
  .scroll {
    display: flex;
    flex-direction: column;
    gap: 600px;
  }

  .custom-toolbar {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    font-family: var(--typography-font-family);
    font-size: 30px;
    font-weight: 700;
    color: var(--color-content-heavy);

    background-color: rgb(0 145 145 / 16%);
  }
</style>
