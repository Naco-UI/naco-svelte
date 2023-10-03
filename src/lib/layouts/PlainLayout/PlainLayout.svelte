<script lang="ts">
  import { useTheme } from '$lib/index.js'

  import { Typography } from '../../components/Typography/index.js'
  import type { PlainLayoutProps } from './PlainLayout.types.js'

  export let transparent: PlainLayoutProps['transparent'] = false
  export let inset: PlainLayoutProps['inset'] = false
  export let insetTitle: PlainLayoutProps['insetTitle'] = undefined

  const { os } = useTheme()

  $: isInset = inset && $os === 'mac'
  $: hasToolbar = Boolean($$slots.toolbar)
</script>

<div class="plain-layout" class:inset class:transparent>
  {#if isInset}
    <div class="inset-titlebar">
      {#if insetTitle}
        <div class="title">
          <Typography variant="heading-s" align="center" fullWidth
            >{insetTitle}</Typography
          >
        </div>
      {/if}
      {#if hasToolbar}
        <div class="toolbar">
          <slot name="toolbar" />
        </div>
      {/if}
    </div>
  {/if}
  <slot />
</div>

<style lang="scss">
  .plain-layout {
    position: relative;

    flex: 1;

    padding: var(--space-sl);

    background-color: var(--color-background-secondary);

    transition: var(--transition-default);
  }

  .inset-titlebar {
    --wails-draggable: drag;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: var(--space-inset-titlebar);
  }

  :global(.os-mac) {
    .plain-layout {
      &.inset {
        padding-top: var(--space-inset-titlebar);
      }

      &.transparent {
        background-color: transparent;
      }
    }

    .title {
      // position: absolute;
      top: 8px;
      left: 0;
      width: 100%;
    }
  }
</style>
