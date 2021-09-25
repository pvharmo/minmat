<script lang="ts">
  export let width: string
</script>

<td style="width:{width}">
  <slot />
</td>

<style>
  td {
    text-align: left;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    padding: 10px;
    line-height: 1.43;
  }
</style>
