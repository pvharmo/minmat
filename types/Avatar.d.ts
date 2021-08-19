/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AvatarProps {
  /**
   * @default ''
   */
  image?: string;

  /**
   * @default 'An avatar picture'
   */
  alt?: string;
}

export default class Avatar extends SvelteComponentTyped<AvatarProps, {}, {}> {}
