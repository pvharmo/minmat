/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CardProps {
  /**
   * @default false
   */
  interactive?: boolean;

  /**
   * @default false
   */
  selected?: boolean;
}

export default class Card extends SvelteComponentTyped<
  CardProps,
  {
    message: WindowEventMap["message"];
    click: WindowEventMap["click"];
    dblclick: WindowEventMap["dblclick"];
  },
  { default: {} }
> {}
