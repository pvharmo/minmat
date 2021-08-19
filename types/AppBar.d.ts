/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AppBarProps {}

export default class AppBar extends SvelteComponentTyped<
  AppBarProps,
  {},
  { default: {}; ["navigation-icon"]: {}; ["right-content"]: {}; title: {} }
> {}
