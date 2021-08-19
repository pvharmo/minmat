/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonTextProps {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class ButtonText extends SvelteComponentTyped<
  ButtonTextProps,
  {},
  { default: {} }
> {}
