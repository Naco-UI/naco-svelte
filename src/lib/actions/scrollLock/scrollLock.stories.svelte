<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'

  import { Stack, Toggle, Typography } from '$lib/index.js'

  import { scrollLock } from './scrollLock.action.js'

  let lock = false
</script>

<Meta title="Actions/scrollLock" component={scrollLock} />

<Story name="Basic">
  <div use:scrollLock={{ lock }}>
    <Stack align="center" gap="l" direction="horizontal">
      <Typography variant="heading-s">Lock page</Typography>
      <Toggle bind:checked={lock} sizeMac="m" />
    </Stack>
  </div>
</Story>

<Story name="Target">
  <div use:scrollLock={{ lock, target: '#scroll-target' }}>
    <Stack gap="l" maxWidth={200}>
      <Stack align="center" gap="l" justify="space-between" direction="horizontal">
        <Typography variant="heading-s">Lock text container</Typography>
        <Toggle bind:checked={lock} sizeMac="m" />
      </Stack>
      <div id="scroll-target">
        <Typography>
          But I must explain to you how all this mistaken idea of denouncing pleasure
          and praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness.
        </Typography>
      </div>
    </Stack>
  </div>
</Story>

<style lang="scss">
  #scroll-target {
    overflow-y: scroll;
    max-height: 100px;
  }
</style>
