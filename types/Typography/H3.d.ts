/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface H3Props {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class H3 extends SvelteComponentTyped<
  H3Props,
  {},
  { default: {} }
> {}
