<div class="spinner">
  {#each Array(8) as _}
    <div class="spinner-blade" />
  {/each}
</div>

<style lang="scss">
  .spinner {
    position: relative;

    display: inline-block;

    width: 1em;
    height: 1em;

    font-size: var(--spinner-size);
  }

  .spinner-blade {
    $animation-delay: 0s;
    $blade-rotation: 0deg;

    position: absolute;
    bottom: 0;
    left: 0.4629em;
    transform-origin: center -0.18em;

    width: 0.1em;
    height: 0.2777em;

    background-color: transparent;
    border-radius: 0.5em;

    animation: spinner-fade 1s infinite linear;

    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        $blade-rotation: $blade-rotation + 45;
        $animation-delay: $animation-delay + 0.125;

        transform: rotate($blade-rotation);
        animation-delay: $animation-delay;
      }
    }
  }

  @keyframes spinner-fade {
    0% {
      background-color: var(--color-content-primary);
    }

    100% {
      background-color: transparent;
    }
  }
</style>
