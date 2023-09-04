<script lang="ts">
  import Typography from '../Typography/Typography.svelte'
  import type { SettingsGroupProps } from './SettingsGroup.types.js'

  export let title: SettingsGroupProps['title'] = ''
</script>

<div class="settings-layout">
  {#if title.length > 0}
    <div class="heading">
      <Typography as="h3" variant="heading-s">
        {title}
      </Typography>
    </div>
  {/if}
  <div class="rows">
    <slot />
  </div>
</div>

<style lang="scss">
  .rows {
    background-color: var(--color-background-primary);
    border: 1px solid var(--color-border-main);
    border-radius: var(--settings-border-radius);
  }

  .heading {
    margin-bottom: var(--space-m);
    padding: 0 var(--settings-row-padding-h);
  }

  .settings-layout:not(:first-child) .heading {
    margin-top: var(--space-l);
  }

  :global(.naco.os-linux) .settings-layout {
    --settings-row-padding-v: 12px;
    --settings-row-padding-h: 14px;
    --settings-border-radius: 0;
  }

  :global(.naco.os-mac) .settings-layout {
    --settings-row-padding-v: 9px;
    --settings-row-padding-h: 9px;
    --settings-border-radius: 5px;
  }
</style>
