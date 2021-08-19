/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaperProps {
  /**
   * @default 1
   */
  elevation?: number;

  /**
   * @default false
   */
  interactive?: boolean;
}

export default class Paper extends SvelteComponentTyped<
  PaperProps,
  {},
  { default: {} }
> {}
