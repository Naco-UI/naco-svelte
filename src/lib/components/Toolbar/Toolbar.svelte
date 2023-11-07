<script lang="ts">
  import Stack from '../Stack/Stack.svelte'
  import type { StackGap, StackJustify } from '../Stack/Stack.types'

  export let justify: StackJustify = 'start'
  export let padding: StackGap = 'm'
</script>

<div style:--toolbar-padding="var(--space-{padding})" class="toolbar">
  <Stack gap="m" direction="horizontal" {justify}>
    <slot />
  </Stack>
</div>

<style lang="scss">
  .toolbar {
    width: 100%;
    padding: 0 var(--toolbar-padding);
  }

  :global(.os-linux) .toolbar {
    padding: 0 var(--space-l);
  }
</style>
