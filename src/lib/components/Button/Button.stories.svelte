<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import Stack from '../Stack/Stack.svelte'
  import Typography from '../Typography/Typography.svelte'
  import Button from './Button.svelte'
  import type { ButtonProps } from './Button.types.js'

  const buttonVariants: Array<ButtonProps['variant']> = ['default', 'alert']
  const buttonColors: Array<ButtonProps['color']> = [
    'default',
    'accent',
    'warning',
    'error',
    'success',
  ]
</script>

<Meta
  title="Components/Button"
  component={Button}
  argTypes={{
    variant: {
      defaultValue: 'default',
      options: buttonVariants,
      control: 'select',
    },
    color: {
      defaultValue: 'default',
      options: buttonColors,
      control: 'select',
    },
  }}
/>

<Template id="basic" let:args>
  <Button on:click={() => alert('Hello')} {...args}>Show message</Button>
</Template>

<Story template="basic" name="Basic" />

<Story name="Primary">
  <Stack direction="horizontal" gap="s">
    <Button>Secondary</Button>
    <Button primary>Primary</Button>
  </Stack>
</Story>

<Story name="Variant">
  <Stack gap="m">
    {#each buttonVariants as variant}
      <Stack direction="horizontal" gap="s">
        <Button {variant}>{variant}</Button>
        <Button {variant} primary>{variant} primary</Button>
      </Stack>
    {/each}
  </Stack>
</Story>

<Story name="Color">
  <Stack direction="horizontal" gap="l">
    {#each buttonVariants as variant}
      <Stack gap="s">
        <Typography variant="heading-s">
          {variant}
        </Typography>
        <Stack gap="s">
          {#each buttonColors as color}
            <Stack direction="horizontal">
              <Button {color} {variant}>{color}</Button>
              <Button {color} {variant} primary>{color}</Button>
            </Stack>
          {/each}
        </Stack>
      </Stack>
    {/each}
  </Stack>
</Story>

<Story name="Disabled">
  <Stack direction="horizontal" gap="s">
    <Button disabled>Default</Button>
    <Button disabled primary>Primary</Button>
  </Stack>
</Story>

<Story name="Hotkey">
  <Stack direction="horizontal" align="center" gap="s">
    <Button
      hotkey="alt+shift+KeyF"
      on:click={() => alert('Hello, %USERNAME')}
      primary>Click me</Button
    >
    <Typography variant="text-s">or press alt + shift + f</Typography>
  </Stack>
</Story>
