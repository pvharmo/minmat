<script lang="ts">
  import Ripple from './utils/Ripple.svelte'
  export let elevation: number = 1
  export let interactive = false
</script>

<div class={`paper elevation${elevation}`} class:interactive class:ripple={interactive}>
  <slot />
  {#if interactive}
    <Ripple />
  {/if}
</div>

<style>
  .interactive:hover {
    background-color: #eee;
  }
  .paper {
    background-color: #fff;
    border-radius: 4px;
  }
  .elevation0 {
    box-shadow: none;
  }
  .elevation1 {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }
  .elevation2 {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .elevation3 {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  }
  .elevation4 {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .elevation5 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
      0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  }
  .elevation6 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
      0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }

  .interactive {
    position: relative;
  }
</style>