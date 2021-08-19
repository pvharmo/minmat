/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ElementAndTextProps {
  /**
   * @default 7
   */
  spacing?: number;
}

export default class ElementAndText extends SvelteComponentTyped<
  ElementAndTextProps,
  {},
  { element: {}; text: {} }
> {}
