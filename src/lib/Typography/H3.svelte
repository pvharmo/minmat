<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<h3 class={className} {style}><slot/></h3>

<style>
  h3 {
    font-size: var(--minmat-typography-h3-font-size, 3rem);
    line-height: var(--minmat-typography-h3-line-height, 1.167);
    font-family: var(--minmat-typography-h3-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-h3-font-weight, 400);
    letter-spacing: var(--minmat-typography-h3-letter-spacing, 0em);
  }
</style>