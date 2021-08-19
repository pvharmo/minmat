/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DialogProps {
  /**
   * @default false
   */
  open?: boolean;
}

export default class Dialog extends SvelteComponentTyped<
  DialogProps,
  { close: CustomEvent<any> },
  { default: {} }
> {}
