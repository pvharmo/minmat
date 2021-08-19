/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CaptionTextProps {
  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;
}

export default class CaptionText extends SvelteComponentTyped<
  CaptionTextProps,
  {},
  { default: {} }
> {}
