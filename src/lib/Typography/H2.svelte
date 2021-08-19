<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<h2 class={className} {style}><slot/></h2>

<style>
  h2 {
    font-size: var(--minmat-typography-h2-font-size, 3.75rem);
    line-height: var(--minmat-typography-h2-line-height, 1.2);
    font-family: var(--minmat-typography-h2-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-h2-font-weight, 300);
    letter-spacing: var(--minmat-typography-h2-letter-spacing, -0.00833em);
  }
</style>