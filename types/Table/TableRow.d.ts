/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TableRowProps {
  /**
   * @default false
   */
  highlight?: boolean;

  /**
   * @default false
   */
  interactive?: boolean;
}

export default class TableRow extends SvelteComponentTyped<
  TableRowProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
