/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OverlineTextProps {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class OverlineText extends SvelteComponentTyped<
  OverlineTextProps,
  {},
  { default: {} }
> {}
