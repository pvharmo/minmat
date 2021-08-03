<script lang="ts">
  import Ripple from './utils/Ripple.svelte'
  import ButtonText from './Typography/ButtonText.svelte'
  export let ripple = true
  export let raised = false
  export let className = ""
  export let style = ""
  export let textClassName = ""
  export let textStyle = ""
</script>

<button class:ripple class:raised class={className} {style} on:message on:click>
  <ButtonText className={textClassName} style={textStyle}><slot /></ButtonText>
  {#if ripple}
    <Ripple />
  {/if}
</button>

<style>
  button.raised:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  button:hover {
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 2px 3px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  button.raised {
    color: var(--primary-text-color, #fff);
    background-color: var(--primary-color);
  }

  button {
    position: relative;
    margin-top: 6px;
    margin-bottom: 6px;
    height: 36px;
    border-radius: var(--minmat-button-border-radius, 4px);
    padding: 0 8px 0 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    border: none;
    outline: none;
    vertical-align: center;
    cursor: pointer;
  }
</style>