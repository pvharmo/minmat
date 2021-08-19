/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface H6Props {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class H6 extends SvelteComponentTyped<
  H6Props,
  {},
  { default: {} }
> {}
