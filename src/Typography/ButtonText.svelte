<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<span class={className} {style}><slot /></span>

<style>
  span {
    font-size: var(--minmat-typography-button-font-size, 0.875rem);
    font-family: var(--minmat-typography-button-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-button-font-weight, 500);
    line-height: var(--minmat-typography-button-line-height, 1.75);
    letter-spacing: var(--minmat-typography-button-letter-spacing, 0.0892857143em);
    text-transform: var(--minmat-typography-button-text-transform, uppercase);
  }
</style>