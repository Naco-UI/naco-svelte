<script context="module">
  import { theme } from './theme.action.js'

  export const meta = {
    title: 'actions/theme',
    component: theme,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import Select from '$lib/components/Select/Select.svelte'
  import { type ColorScheme, type OS, Stack, Typography } from '$lib/index.js'

  import type { ThemeManifest } from './theme.types.js'

  let os = 'mac'
  let scheme = 'light'
  const manifest: ThemeManifest = {
    prefix: 'preview',
    common: {
      color: {
        text: '#FFF',
      },
      size: {
        padding: 4,
      },
      effect: {
        borderRadius: '4px',
      },
      dark: {
        color: {
          text: '#333',
        },
      },
    },
    mac: {
      color: {
        background: '#007aff',
      },
    },
    linux: {
      color: {
        background: '#e9531f',
      },
    },
  }

  $: themeProps = {
    os: os as OS,
    scheme: scheme as ColorScheme,
    manifest,
    debug: true,
  }
</script>

<Story name="Basic">
  <div use:theme={themeProps}>
    <Stack>
      <Stack direction="horizontal">
        <Select bind:value={os} options={[{ value: 'mac' }, { value: 'linux' }]} />
        <Select
          bind:value={scheme}
          options={[{ value: 'light' }, { value: 'dark' }]}
        />
      </Stack>
      <div class="preview">
        <Typography color="inherit">Hello from themed component</Typography>
      </div>
    </Stack>
  </div>
</Story>

<style lang="scss">
  .preview {
    display: flex;
    justify-content: center;

    padding: var(--preview-size-padding);

    color: var(--preview-color-text);

    background-color: var(--preview-color-background);
    border-radius: var(--preview-effect-border-radius);
  }
</style>
