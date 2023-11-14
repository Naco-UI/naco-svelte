<script lang="ts">
  import { Stack } from '../Stack'
  import { getToolbarContext } from './context'
  import type { ToolbarProps } from './Toolbar.types'

  export let transparent: ToolbarProps['transparent'] = false
  export let border: ToolbarProps['border'] = 'static'
  export let draggable: ToolbarProps['draggable'] = true
  export let justify: ToolbarProps['justify'] = 'start'
  export let align: ToolbarProps['align'] = 'center'
  export let padding: ToolbarProps['padding'] = 'default'
  export let insetSafe: ToolbarProps['insetSafe'] = true

  const { scrolled, inset } = getToolbarContext()
</script>

<div
  class="toolbar"
  class:draggable
  class:transparent
  class:borderScroll={border === 'scroll'}
  class:borderStatic={border === 'static'}
  class:paddingDefault={padding === 'default'}
  class:paddingForm={padding === 'form'}
  class:inset={$inset && insetSafe}
  class:scrolled={$scrolled}
>
  <Stack gap="m" direction="horizontal" fullHeight {align} {justify}>
    <slot />
  </Stack>
</div>

<style lang="scss">
  .toolbar {
    flex: 1;

    width: 100%;
    height: 100%;
    padding: var(--toolbar-padding-vertical) var(--toolbar-padding)
      var(--toolbar-padding-vertical)
      var(--toolbar-inset-padding, var(--toolbar-padding));

    background-color: var(--color-background-toolbar);
    box-shadow: var(--toolbar-border-shadow);

    transition: var(--transition-default);
    transition-property: box-shadow, padding;

    &.draggable {
      --wails-draggable: drag;
    }

    &.transparent {
      background-color: transparent;
    }

    &.borderScroll {
      box-shadow: 0 1px 0 0 transparent;

      &.scrolled {
        box-shadow: var(--toolbar-border-shadow);
      }
    }

    &.paddingDefault {
      --toolbar-padding-vertical: var(--space-s);
      --toolbar-padding: var(--toolbar-padding-default);
    }

    &.paddingForm {
      --toolbar-padding-vertical: var(--space-s);
      --toolbar-padding: var(--toolbar-padding-form);
    }

    &.inset {
      --toolbar-inset-padding: var(--space-inset-toolbar-safe-padding);
    }
  }

  :global(.os-linux) .toolbar {
    --toolbar-padding-default: var(--space-s);
    --toolbar-padding-form: calc(var(--space-l) + var(--space-s));
    --toolbar-border-shadow: 0 1px 0 0 var(--color-border-main);
  }

  :global(.os-mac) .toolbar {
    --toolbar-padding-default: var(--space-s);
    --toolbar-padding-form: calc(var(--space-l) + var(--space-s));
    --toolbar-border-shadow: var(--box-shadow-s), var(--box-shadow-s),
      var(--box-shadow-m);
  }
</style>
