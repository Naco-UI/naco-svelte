<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  import { Typography } from '../Typography/index.js'
  import type {
    SliderMark,
    SliderMarkPosition,
    SliderProps,
  } from './Slider.types.js'

  export let value: number
  export let min: SliderProps['min']
  export let max: SliderProps['max']
  export let step: SliderProps['step']
  export let marks: SliderProps['marks'] = undefined
  export let disabled: SliderProps['disabled'] = false

  let markItems: SliderMark[] = []
  const dispatch = createEventDispatcher()

  function handleChange(e: { currentTarget: HTMLInputElement }): void {
    dispatch('change', +e.currentTarget.value)
  }

  function calcMarkPosition(p: number): SliderMarkPosition {
    const percent = p * 100
    if (p >= 0.5) {
      return {
        left: 'unset',
        right: `${100 - percent}%`,
      }
    }
    return {
      left: `${percent}%`,
      right: 'unset',
    }
  }

  onMount(() => {
    if (typeof marks === 'function') {
      markItems = marks(min, max)
    } else if (Array.isArray(marks)) {
      markItems = marks
    }
  })

  $: marked = markItems.length > 0
  $: progress = (value / (max - min)) * 100
  $: markPositions = (() => {
    return markItems.map((m) => calcMarkPosition(m.progress))
  })()
</script>

<div
  style:--slider-progress="{progress}%"
  class="slider"
  class:marked
  class:disabled
>
  <div class="container">
    <input type="range" bind:value {min} {max} {step} on:change={handleChange} />
    {#if marked}
      <div class="marks">
        {#each markItems as mark, i (mark.progress)}
          <div
            class="mark"
            style:--mark-title={mark.title}
            style:--mark-pos-left={markPositions[i].left}
            style:--mark-pos-right={markPositions[i].right}
          >
            {#if Boolean(mark.title)}
              <div class="mark-title">
                <Typography variant="caption-s">{mark.title}</Typography>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .slider {
    --slider-track-fill-color: var(--color-content-accent);
    --slider-track-background-color: var(--color-background-quinary);
    --slider-track-background: var(--slider-track-background-color);
    --slider-track-box-shadow: none;
    --slider-track-height: 4px;
    --slider-track-border-radius: 8px;
    --slider-knob-background-color: var(--color-background-elevated);
    --slider-knob-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
    --slider-knob-height: 20px;
    --slider-knob-width: 20px;
    --slider-knob-border-radius: 20px;

    position: relative;
    min-width: 150px;

    &:not(.marked) {
      --slider-track-background: linear-gradient(
        to right,
        var(--slider-track-fill-color) 0%,
        var(--slider-track-fill-color) var(--slider-progress),
        var(--slider-track-background-color) var(--slider-progress),
        var(--slider-track-background-color) 100%
      );
    }

    &.marked {
      --slider-knob-width: 8px;
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    input {
      width: 100%;
      margin: 0;
      appearance: none;
      background: transparent;

      &::-webkit-slider-runnable-track {
        height: var(--slider-track-height);
        background: var(--slider-track-background);
        border-radius: var(--slider-track-border-radius);
        box-shadow: var(--slider-track-box-shadow);
      }

      &::-webkit-slider-thumb {
        position: relative;
        z-index: 1;
        top: calc(
          ((var(--slider-knob-height) / 2) * -1) + (var(--slider-track-height) / 2)
        );

        width: var(--slider-knob-width);
        height: var(--slider-knob-height);

        appearance: none;
        background-color: var(--slider-knob-background-color);
        border: var(--slider-knob-border);
        border-radius: var(--slider-knob-border-radius);
        box-shadow: var(--slider-knob-box-shadow);
      }
    }
  }

  .container {
    height: calc(var(--slider-knob-height) + var(--slider-track-height));
  }

  .marks {
    position: absolute;
    top: 8.5px;
    width: 100%;
  }

  .mark {
    &::after {
      content: '';

      position: absolute;
      top: var(--slider-mark-top);
      right: var(--mark-pos-right);
      left: var(--mark-pos-left);

      display: block;

      width: var(--slider-mark-width);
      height: var(--slider-mark-height);

      background-color: var(--slider-mark-color);
      border-radius: 2px;
    }
  }

  .mark-title {
    position: absolute;
    right: var(--mark-pos-right);
    bottom: -32px;
    left: var(--mark-pos-left);
  }

  :global(.os-mac) .slider {
    --slider-knob-border: 0.5px solid rgb(0 0 0 / 2%);
    --slider-mark-color: var(--color-background-heavy);
    --slider-mark-top: 0;
    --slider-mark-width: 2px;
    --slider-mark-height: 8px;
  }

  :global(.os-linux) .slider {
    --slider-mark-color: var(--color-content-tertiary);
    --slider-mark-top: 10px;
    --slider-mark-width: 1px;
    --slider-mark-height: 5px;

    .marks {
      left: 9px;
      width: calc(100% - 18px);
    }

    &.marked {
      --slider-knob-width: 20px;

      input::-webkit-slider-thumb {
        transform-origin: center;
        transform: rotate(45deg);

        border-radius: 0;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }
  }

  :global(.os-linux.light) .slider {
    --slider-knob-box-shadow: 0px 0px 0px 1px var(--color-border-heavy) inset,
      0px 0.5px 2px 0px rgb(0 0 0 / 10%);
    --slider-track-box-shadow: 0px 0px 0px 1px var(--color-border-main) inset;
  }

  :global(.os-linux.dark) .slider {
    --slider-knob-background-color: var(--color-border-heavy);
  }

  :global(.os-mac.dark) .slider {
    --slider-track-background-color: var(--color-background-tertiary);
    --slider-knob-background-color: var(--color-content-heavy);
  }

  :global(.os-mac.light) .slider {
    --slider-track-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 4%) inset,
      0px 0px 2px 0px rgb(0 0 0 / 3%) inset, 0px 1px 2px 0px rgb(0 0 0 / 2%) inset;
    --slider-knob-box-shadow: 0px 1px 0.75px 0px rgb(0 0 0 / 10%),
      0px 0.5px 0.5px 0px rgb(0 0 0 / 20%), 0px 1px 5px 0px rgb(0 0 0 / 5%);
  }
</style>
