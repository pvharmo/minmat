/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GridProps {
  /**
   * @default false
   */
  container?: boolean;

  /**
   * @default false
   */
  row?: boolean;
}

export default class Grid extends SvelteComponentTyped<
  GridProps,
  {},
  { default: {} }
> {}
