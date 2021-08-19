<script lang="ts">
  export let variant: boolean = false
  export let className: string = ""
  export let style: string = ""
</script>

<p class:variant class={className} {style}><slot /></p>

<style>
  p {
    font-size: var(--minmat-typography-body1-font-size, 1rem);
    line-height: var(--minmat-typography-body1-line-height, 1.5);
    font-family: var(--minmat-typography-body1-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-body1-font-weight, 400);
    letter-spacing: var(--minmat-typography-body1-letter-spacing, 0.00938em);
  }
  
  p.variant {
    font-size: var(--minmat-typography-body2-font-size, 0.875rem);
    line-height: var(--minmat-typography-body2-line-height, 1.43);
    font-family: var(--minmat-typography-body2-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-body2-font-weight, 400);
    letter-spacing: var(--minmat-typography-body2-letter-spacing, 0.01071em);
  }
</style>