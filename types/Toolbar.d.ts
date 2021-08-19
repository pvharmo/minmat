/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToolbarProps {}

export default class Toolbar extends SvelteComponentTyped<
  ToolbarProps,
  {},
  { default: {}; ["navigation-icon"]: {}; ["right-content"]: {}; title: {} }
> {}
