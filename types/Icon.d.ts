/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IconProps {
  icon?: string;

  /**
   * @default 24
   */
  size?: number;

  /**
   * @default '#555'
   */
  color?: string;

  /**
   * @default ''
   */
  style?: string;
}

export default class Icon extends SvelteComponentTyped<IconProps, {}, {}> {}
