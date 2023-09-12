<script lang="ts">
  export let size: number
</script>

<svg class="spinner" width="{size}px" height="{size}px" viewBox="0 0 100 100">
  <defs>
    <clipPath id="cut-off">
      <rect x="0" y="50" width="100" height="100" />
    </clipPath>
    <linearGradient id="gradient">
      <stop offset="0" stop-color="var(--color-content-primary)" />
      <stop
        offset="100%"
        stop-color="var(--color-content-primary)"
        stop-opacity="0"
      />
    </linearGradient>
  </defs>

  <circle
    cx="50"
    cy="50"
    r="40"
    stroke="var(--color-content-primary)"
    stroke-width="20"
    fill="none"
    opacity="0.05"
  />
  <circle
    cx="50"
    cy="50"
    r="40"
    stroke="url(#gradient)"
    stroke-width="20"
    fill="none"
    clip-path="url(#cut-off)"
  />
</svg>

<style lang="scss">
  .spinner {
    animation: spinner-rotate 0.75s infinite linear;
  }

  @keyframes spinner-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
