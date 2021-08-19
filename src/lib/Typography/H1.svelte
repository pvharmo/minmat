<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<h1 class={className} {style}><slot/></h1>

<style>
  h1 {
    font-size: var(--minmat-typography-h1-font-size, 6rem);
    line-height: var(--minmat-typography-h1-line-height, 1.167);
    font-family: var(--minmat-typography-h1-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-h1-font-weight, 300);
    letter-spacing: var(--minmat-typography-h1-letter-spacing, -0.01562em);
  }
</style>