/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface H2Props {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class H2 extends SvelteComponentTyped<
  H2Props,
  {},
  { default: {} }
> {}
