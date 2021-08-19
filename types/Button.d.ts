/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
  /**
   * @default true
   */
  ripple?: boolean;

  /**
   * @default false
   */
  raised?: boolean;

  /**
   * @default ""
   */
  className?: string;

  /**
   * @default ""
   */
  style?: string;

  /**
   * @default ""
   */
  textClassName?: string;

  /**
   * @default ""
   */
  textStyle?: string;
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  { message: WindowEventMap["message"]; click: WindowEventMap["click"] },
  { default: {} }
> {}
