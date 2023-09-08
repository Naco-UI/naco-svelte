<script lang="ts">
  import { useTheme } from '../ThemeProvider/index.js'

  const { os } = useTheme()
</script>

<div class="stepper">
  {#if $os === 'mac'}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      ><rect
        width="16"
        height="16"
        fill="var(--select-stepper-background-color)"
        rx="4"
      /><rect width="16" height="16" fill="url(#a)" fill-opacity=".2" rx="4" /><path
        fill="var(--select-stepper-foreground-color)"
        d="M8 3c-.251.003-.444.086-.65.275l-2.636 2.52a.627.627 0 0 0-.214.489c0 .392.344.716.758.716.21 0 .406-.08.565-.234l2.17-2.11 2.18 2.11a.813.813 0 0 0 .57.234c.413 0 .757-.324.757-.716a.65.65 0 0 0-.214-.489l-2.64-2.52C8.44 3.083 8.245 3 8 3ZM8 13c-.251-.003-.444-.086-.65-.275l-2.636-2.52a.627.627 0 0 1-.214-.489c0-.392.344-.716.758-.716.21 0 .406.08.565.234l2.17 2.11 2.18-2.11a.813.813 0 0 1 .57-.234c.413 0 .757.324.757.716a.65.65 0 0 1-.214.489l-2.64 2.52C8.44 12.917 8.245 13 8 13Z"
      /><defs
        ><linearGradient
          id="a"
          x1="8"
          x2="8"
          y1="0"
          y2="16"
          gradientUnits="userSpaceOnUse"
          ><stop stop-color="#fff" stop-opacity=".2" /><stop
            offset="1"
            stop-color="#565656"
            stop-opacity="0"
          /></linearGradient
        ></defs
      ></svg
    >
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      ><path
        fill="var(--select-stepper-foreground-color)"
        fill-rule="evenodd"
        d="m2.47 6.177 4.47 4.47L8 11.707l1.06-1.06 4.47-4.47-1.06-1.06L8 9.585l-4.47-4.47-1.06 1.06Z"
        clip-rule="evenodd"
      /></svg
    >
  {/if}
</div>

<style lang="scss">
  .stepper {
    width: 16px;
    height: 16px;
  }
</style>
