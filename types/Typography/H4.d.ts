/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface H4Props {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class H4 extends SvelteComponentTyped<
  H4Props,
  {},
  { default: {} }
> {}
