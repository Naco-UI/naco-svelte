<script context="module">
  import { fromEvent, fromMatchMedia, prefersDarkMediaQuery } from './fromEvent.js'
  export const meta = {
    title: 'Utilities/fromEvent',
    component: fromEvent,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'

  import { Stack, Toggle, Typography } from '$lib/index.js'

  const [mousePosition, active] = fromEvent(window, 'mousemove', {
    map: (e: MouseEvent) => ({
      x: e.clientX,
      y: e.clientY,
    }),
    initial: {
      x: 0,
      y: 0,
    },
  })

  interface MediaStory {
    query: string
    title: string
  }

  const mediaStories: MediaStory[] = [
    {
      query: '(min-width: 1200px)',
      title: 'Is desktop',
    },
    {
      query: '(max-width: 1200px)',
      title: 'Is tablet',
    },
    {
      query: prefersDarkMediaQuery,
      title: 'Is dark',
    },
    {
      query: '(prefers-reduced-motion: reduce)',
      title: 'Is prefers reduced motion',
    },
  ]

  const [isDesktop] = fromMatchMedia(mediaStories[0].query)
  const [isTablet] = fromMatchMedia(mediaStories[1].query)
  const [isDark] = fromMatchMedia(mediaStories[2].query)
  const [isReducedMotion] = fromMatchMedia(mediaStories[3].query)

  function handleActiveChange(): void {
    active.set(!$active)
  }
</script>

<Story name="Mouse">
  <Stack gap="l">
    <Typography variant="text-l">
      Cursor position: ({$mousePosition.x}, {$mousePosition.y})
    </Typography>
    <Stack maxWidth={300} align="center" gap="m" direction="horizontal">
      <Toggle checked={$active} on:change={handleActiveChange} />
      <Typography>Listen to the events</Typography>
    </Stack>
  </Stack>
</Story>

<Story name="Media">
  <div class="container">
    <Stack gap="l">
      <Stack align="center" justify="space-between" direction="horizontal">
        <Typography>Is desktop {mediaStories[0].query}</Typography>
        <Toggle checked={$isDesktop} disabled />
      </Stack>
      <Stack align="center" justify="space-between" direction="horizontal">
        <Typography>Is tablet {mediaStories[1].query}</Typography>
        <Toggle checked={$isTablet} disabled />
      </Stack>
      <Stack align="center" justify="space-between" direction="horizontal">
        <Typography>Prefers dark scheme {mediaStories[2].query}</Typography>
        <Toggle checked={$isDark} disabled />
      </Stack>
      <Stack align="center" justify="space-between" direction="horizontal">
        <Typography>Prefers reduced motion {mediaStories[3].query}</Typography>
        <Toggle checked={$isReducedMotion} disabled />
      </Stack>
    </Stack>
  </div>
</Story>
