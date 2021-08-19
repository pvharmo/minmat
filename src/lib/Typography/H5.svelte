<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<h5 class={className} {style}><slot/></h5>

<style>
  h5 {
    font-size: var(--minmat-typography-h5-font-size, 1.5rem);
    line-height: var(--minmat-typography-h5-line-height, 1.334);
    font-family: var(--minmat-typography-h5-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-h5-font-weight, 400);
    letter-spacing: var(--minmat-typography-h5-letter-spacing, 0em);
  }
</style>