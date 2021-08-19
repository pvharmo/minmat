/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface H1Props {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class H1 extends SvelteComponentTyped<
  H1Props,
  {},
  { default: {} }
> {}
