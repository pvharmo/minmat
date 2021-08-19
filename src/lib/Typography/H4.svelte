<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<h4 class={className} {style}><slot/></h4>

<style>
  h4 {
    font-size: var(--minmat-typography-h4-font-size, 2.125rem);
    line-height: var(--minmat-typography-h4-line-height, 1.235);
    font-family: var(--minmat-typography-h4-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-h4-font-weight, 400);
    letter-spacing: var(--minmat-typography-h4-letter-spacing, 0.00735em);
  }
</style>