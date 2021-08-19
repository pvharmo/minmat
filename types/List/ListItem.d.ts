/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListItemProps {}

export default class ListItem extends SvelteComponentTyped<
  ListItemProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
