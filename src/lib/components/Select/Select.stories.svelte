<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { FormGroup, FormRow } from '../FormGroup/index.js'
  import Select from './Select.svelte'
  import type { SelectOption } from './Select.types.js'

  const options: SelectOption[] = [
    { value: 'One' },
    { value: 'Two' },
    { value: 'Three' },
    { value: 'Four' },
    { value: 'Five', disabled: true },
  ]
</script>

<Meta title="Components/Select" component={Select} />

<Story name="Basic" args={{ options }} let:args>
  <Select {...args} />
</Story>

<Story name="Form">
  <FormGroup>
    <FormRow title="Number">
      <Select {options} />
    </FormRow>
  </FormGroup>
</Story>

<Story name="Disabled">
  <Select disabled {options} />
</Story>
