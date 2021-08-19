/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface H5Props {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class H5 extends SvelteComponentTyped<
  H5Props,
  {},
  { default: {} }
> {}
