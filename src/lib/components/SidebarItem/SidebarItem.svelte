<script lang="ts">
  import { Typography } from '../Typography/index.js'
  import type { SidebarItemProps } from './SidebarItem.types.js'

  export let selected: SidebarItemProps['selected'] = false
  export let disabled: SidebarItemProps['disabled'] = false
  export let icon: SidebarItemProps['icon'] = undefined

  $: hasIcon = Boolean(icon)
</script>

<button
  on:click
  {disabled}
  class="sidebar-item"
  class:with-icon={hasIcon}
  class:selected
>
  {#if hasIcon}
    <div class="icon">
      <svelte:component this={icon} />
    </div>
  {/if}
  <div class="label">
    <Typography color="inherit">
      <slot />
    </Typography>
  </div>
</button>

<style lang="scss">
  .sidebar-item {
    --sidebar-item-height: 28px;
    --sidebar-item-border-radius: var(--border-radius-m);
    --sidebar-item-padding: 0 4px;
    --sidebar-item-color: var(--color-content-primary);
    --sidebar-item-active-color: var(--color-content-primary);
    --sidebar-item-active-background: var(--color-border-main);
    --sidebar-item-icon-gap: var(--space-xxs);
    --sidebar-item-icon-color: var(--color-content-accent);
    --sidebar-item-active-icon-color: var(--color-content-accent);

    display: inline-flex;
    gap: var(--sidebar-item-icon-gap);
    align-items: center;

    width: 100%;
    height: var(--sidebar-item-height);
    padding: var(--sidebar-item-padding);

    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: var(--sidebar-item-border-radius);

    &.selected {
      background-color: var(--sidebar-item-active-background);
    }

    &:not(.with-icon) {
      padding-left: 8px;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  .label {
    display: contents;
    color: var(--sidebar-item-color);
  }

  .selected .label {
    color: var(--sidebar-item-active-color);
  }

  .icon {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    font-size: 14px;
    color: var(--sidebar-item-icon-color);

    fill: var(--sidebar-item-icon-color);
  }

  .selected .icon {
    color: var(--sidebar-item-active-icon-color);
    fill: var(--sidebar-item-active-icon-color);
  }

  :global(.os-linux) .sidebar-item {
    --sidebar-item-height: 42px;
    --sidebar-item-border-radius: 0;
    --sidebar-item-padding: 0 12px;
    --sidebar-icon-gap: var(--space-xs);
    --sidebar-item-active-background: var(--color-content-accent);
    --sidebar-item-active-color: white;
    --sidebar-item-icon-color: var(--color-content-primary);
    --sidebar-item-active-icon-color: white;

    transition: var(--transition-default);

    &:not(.selected):hover {
      background-color: var(--color-background-overlay);
    }
  }
</style>
