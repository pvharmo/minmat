/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SubtitleProps {
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

export default class Subtitle extends SvelteComponentTyped<
  SubtitleProps,
  {},
  { default: {} }
> {}
