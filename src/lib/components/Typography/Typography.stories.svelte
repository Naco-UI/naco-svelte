<script context="module" lang="ts">
  import Typography from './Typography.svelte'
  import type { TypographyVariants } from './Typography.types.js'

  export const meta = {
    title: 'Components/Typography',
    component: Typography,
  }
  const colorVariants = ['primary', 'tertiary', 'white', 'inherit']
  const sizeVariants: TypographyVariants[] = [
    'caption-s',
    'caption-m',
    'caption-l',
    'text-s',
    'text-m',
    'text-l',
    'heading-s',
    'heading-m',
  ]
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { Stack } from '$lib/index.js'
</script>

<Story
  name="Basic"
  argTypes={{
    variant: {
      defaultValue: 'text-m',
      options: sizeVariants,
      control: 'select',
    },
    color: {
      defaultValue: 'primary',
      options: colorVariants,
      control: 'select',
    },
    align: {
      defaultValue: 'left',
      options: ['left', 'center', 'right'],
      control: 'select',
    },
  }}
  let:args
>
  <Typography {...args}>Hello, Developer</Typography>
</Story>

<Story name="Variant">
  <Stack>
    {#each sizeVariants as variant}
      <Typography {variant}>{variant}</Typography>
    {/each}
  </Stack>
</Story>

<Story name="Color">
  <Stack gap="s">
    <Typography color="primary">primary</Typography>
    <Typography color="tertiary">tertiary</Typography>
    <div class="color-white">
      <Typography color="white">white</Typography>
    </div>
    <div class="color-inherit">
      <Typography color="inherit">inherit</Typography>
    </div>
  </Stack>
</Story>

<Story name="Align">
  <Stack direction="horizontal" gap="s">
    <Typography align="left">Left</Typography>
    <Typography align="center">Center</Typography>
    <Typography align="right">Right</Typography>
  </Stack>
</Story>

<Story name="Selection">
  <Stack maxWidth={200} direction="horizontal" gap="s">
    <Typography selection>Selectable</Typography>
    <Typography>Not selectable</Typography>
  </Stack>
</Story>

<style lang="scss">
  .color-white {
    background-color: black;
  }

  .color-inherit {
    color: var(--color-content-accent);
  }
</style>
