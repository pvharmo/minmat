/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BodyProps {
  /**
   * @default false
   */
  variant?: boolean;

  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class Body extends SvelteComponentTyped<
  BodyProps,
  {},
  { default: {} }
> {}
