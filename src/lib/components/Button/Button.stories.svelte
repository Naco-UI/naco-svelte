<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

  import ActionsLayout from '../../layouts/ActionsLayout/ActionsLayout.svelte'
  import Typography from '../Typography/Typography.svelte'
  import Button from './Button.svelte'
  import type { ButtonProps } from './Button.types.js'

  const buttonVariants: Array<ButtonProps['variant']> = ['default', 'primary']
  const buttonColors: Array<ButtonProps['color']> = [
    'default',
    'accent',
    'warning',
    'error',
    'success',
  ]
</script>

<Meta
  title="Button"
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

<Story name="Variant">
  <ActionsLayout>
    <Button variant="default">Default</Button>
    <Button color="accent" variant="primary">Primary</Button>
  </ActionsLayout>
</Story>

<Story name="Color">
  {#each buttonVariants as variant}
    <div class="story-color-row">
      <Typography variant="heading-s">
        {variant}
      </Typography>
      <ActionsLayout>
        {#each buttonColors as color}
          <Button {color} {variant}>{color}</Button>
        {/each}
      </ActionsLayout>
    </div>
  {/each}
</Story>

<Story name="Disabled">
  <ActionsLayout>
    <Button disabled variant="default">Default</Button>
    <Button disabled color="accent" variant="primary">Primary</Button>
  </ActionsLayout>
</Story>
