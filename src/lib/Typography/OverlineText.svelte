<script lang="ts">
  export let className: string = ""
  export let style: string = ""
</script>

<span class={className} {style}><slot /></span>

<style>
  span {
    font-size: var(--minmat-typography-overline-font-size, 0.75rem);
    line-height: var(--minmat-typography-overline-line-height, 2.66);
    font-family: var(--minmat-typography-overline-font-family, var(--minmat-typography-font-family, Roboto)), "Helvetica", "Arial", sans-serif;
    font-weight: var(--minmat-typography-overline-font-weight, 400);
    letter-spacing: var(--minmat-typography-overline-letter-spacing, 0.08333em);
    text-transform: var(--minmat-typography-overline-text-transform, uppercase);
  }
</style>