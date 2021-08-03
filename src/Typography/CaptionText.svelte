<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<span class={className} {style}><slot /></span>

<style>
  span {
    font-size: var(--minmat-typography-caption-font-size, 0.75rem);
    line-height: var(--minmat-typography-caption-line-height, 1.66);
    font-family: var(--minmat-typography-caption-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-caption-font-weight, 400);
    letter-spacing: var(--minmat-typography-caption-letter-spacing, 0.03333em);
  }
</style>