<script context="module">
  import { scrollLock } from './scrollLock.js'
  export const meta = {
    title: 'Utilities/scrollLock',
    component: scrollLock,
  }
</script>

<script lang="ts">
  import { Story } from '@storybook/addon-svelte-csf'
  import { onDestroy, onMount } from 'svelte'
  import { type Readable, writable } from 'svelte/store'

  import { Stack, Toggle, Typography } from '$lib/index.js'

  import type { ScrollLockTarget } from './scrollLock.types.js'

  const bodyLock = writable(false)
  const targetLock = writable(false)

  const lockDestroyers: Array<() => void> = []

  function handleBodyLock(e: CustomEvent<boolean>): void {
    bodyLock.set(e.detail)
  }

  function handleTargetLock(e: CustomEvent<boolean>): void {
    targetLock.set(e.detail)
  }

  function safeAddScrollLock(
    target: ScrollLockTarget,
    lock: Readable<boolean>,
  ): void {
    try {
      lockDestroyers.push(scrollLock(target, lock))
    } catch {
      // Do nothing
    }
  }

  onMount(() => {
    safeAddScrollLock('body', bodyLock)
    safeAddScrollLock('#scroll-target', targetLock)
  })
  onDestroy(() => {
    lockDestroyers.forEach((destroy) => destroy())
  })
</script>

<Story name="Basic">
  <Stack align="center" gap="l" direction="horizontal">
    <Typography variant="heading-s">Lock page</Typography>
    <Toggle bind:checked={$bodyLock} on:change={handleBodyLock} sizeMac="m" />
  </Stack>
</Story>

<Story name="Target">
  <Stack gap="l" maxWidth={200}>
    <Stack align="center" gap="l" justify="space-between" direction="horizontal">
      <Typography variant="heading-s">Lock text container</Typography>
      <Toggle bind:checked={$targetLock} on:change={handleTargetLock} sizeMac="m" />
    </Stack>
    <div id="scroll-target">
      <Typography>
        But I must explain to you how all this mistaken idea of denouncing pleasure
        and praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings of the great explorer of the truth,
        the master-builder of human happiness.
      </Typography>
    </div>
  </Stack>
</Story>

<style lang="scss">
  #scroll-target {
    overflow-y: scroll;
    max-height: 100px;
  }
</style>
