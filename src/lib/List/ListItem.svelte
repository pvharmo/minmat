<script lang="ts">
  import Ripple from '../utils/Ripple.svelte'

  export let interactive = true
  export let style = ''
  export let hover = true
</script>

<li class:hover on:click {style}>
  <slot />
  {#if interactive}
    <Ripple />
  {/if}
</li>

<style>
  li {
    position: relative;
    cursor: pointer;
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    padding-left: var(--mdc-list-side-padding, 16px);
    padding-right: var(--mdc-list-side-padding, 16px);
    outline: none;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hover:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
</style>
