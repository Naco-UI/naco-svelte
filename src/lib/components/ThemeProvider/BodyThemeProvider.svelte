<script lang="ts">
  import { onMount } from 'svelte'

  import type { BodyThemeProviderProps } from './BodyThemeProvider.types'

  export let context: BodyThemeProviderProps['context']
  export let disabled: BodyThemeProviderProps['disabled'] = false

  const THEME_CLASS = 'naco'

  const allThemeClasses = [
    THEME_CLASS,
    ...['mac', 'linux'].map((os) => `os-${os}`),
    ...['light', 'dark'],
  ]

  const { os, scheme } = context

  function addThemeClasses(): void {
    document.body.classList.add('naco', `os-${$os}`, $scheme)
  }

  function removeThemeClasses(): void {
    document.body.classList.remove(...allThemeClasses)
  }

  function handleFieldChange(): void {
    if (disabled) {
      removeThemeClasses()
      return
    }
    removeThemeClasses()
    addThemeClasses()
  }

  onMount(() => {
    const subscriptions = [
      os.subscribe(handleFieldChange),
      scheme.subscribe(handleFieldChange),
    ]
    return () => subscriptions.forEach((unsubscribe) => unsubscribe())
  })

  $: disabled ? removeThemeClasses() : addThemeClasses()
</script>

<slot />
