<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<h6 class={className} {style}><slot/></h6>

<style>
  h6 {
    font-size: var(--minmat-typography-h5-font-size, 1.25rem);
    line-height: var(--minmat-typography-h5-line-height, 1.6);
    font-family: var(--minmat-typography-h5-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-h5-font-weight, 500);
    letter-spacing: var(--minmat-typography-h5-letter-spacing, 0.0075em);
  }
</style>