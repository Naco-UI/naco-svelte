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
  <Typography>
    <slot />
  </Typography>
</button>

<style lang="scss">
  .sidebar-item {
    display: inline-flex;
    gap: var(--space-xxs);
    align-items: center;

    width: 100%;
    height: 28px;
    padding: 0 4px;

    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: var(--border-radius-m);

    &.selected {
      background-color: var(--color-border-main);
    }

    &:not(.with-icon) {
      padding-left: 8px;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  .icon {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    font-size: 14px;
    color: var(--color-content-accent);

    fill: var(--color-content-accent);
  }
</style>
