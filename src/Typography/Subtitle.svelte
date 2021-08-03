<script lang="ts">
  export let variant: boolean = false
  export let className: string = ""
  export let style: string = ""
</script>

<h6 class:variant class={className} {style}><slot /></h6>

<style>
  h6 {
    font-size: var(--minmat-typography-subtitle1-font-size, 1rem);
    line-height: var(--minmat-typography-subtitle1-line-height, 1.75);
    font-family: var(--minmat-typography-subtitle1-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-subtitle1-font-weight, 400);
    letter-spacing: var(--minmat-typography-subtitle1-letter-spacing, 0.00938em);
  }

  h6.variant {
    font-size: var(--minmat-typography-subtitle2-font-size, 0.875rem);
    line-height: var(--minmat-typography-subtitle2-line-height, 1.57);
    font-family: var(--minmat-typography-subtitle2-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-subtitle2-font-weight, 500);
    letter-spacing: var(--minmat-typography-subtitle2-letter-spacing, 0.00714em);
  }
</style>