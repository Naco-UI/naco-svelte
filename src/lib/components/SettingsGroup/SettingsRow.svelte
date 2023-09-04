<script lang="ts">
  import Stack from '../../components/Stack/Stack.svelte'
  import Typography from '../Typography/Typography.svelte'
  import type { SettingsRowProps } from './SettingsRow.types.js'

  export let title: SettingsRowProps['title'] = ''
</script>

<div class="settings-row">
  <Typography variant="text-m">{title}</Typography>
  <Stack direction="horizontal" align="end">
    <slot />
  </Stack>
  <div class="postfix">
    <slot name="postfix" />
  </div>
</div>

<style lang="scss">
  .settings-row {
    position: relative;

    display: grid;
    grid-template-areas:
      'title action'
      'post post';
    align-items: center;

    padding: var(--settings-row-padding-v) var(--settings-row-padding-h);

    & > * {
      display: block;
    }

    & > :global(*:nth-child(2)) {
      grid-area: action;
    }

    & > :global(*:nth-child(3)) {
      grid-area: post;
    }

    &:not(:last-child)::after {
      content: '';

      position: absolute;
      bottom: -1px;
      left: 9px;

      display: block;

      width: calc(100% - 18px);
      height: 1px;

      background-color: var(--color-border-dimmed);
    }
  }
</style>
