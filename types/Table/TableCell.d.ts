/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TableCellProps {
  width?: undefined;
}

export default class TableCell extends SvelteComponentTyped<
  TableCellProps,
  {},
  { default: {} }
> {}
