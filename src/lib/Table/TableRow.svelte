<script>
  import Ripple from '../utils/Ripple.svelte'

  export let highlight = false
  export let interactive = false
</script>

<tr class:highlight class:interactive on:click on:dblclick>
  <slot />
  {#if interactive}
    <Ripple />
  {/if}
</tr>

<style>
  .highlight {
    background-color: var(--primary-very-light-color);
  }

  tr {
    position: relative;
    vertical-align: middle;
  }
</style>
