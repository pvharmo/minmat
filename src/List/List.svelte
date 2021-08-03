<ul>
  <slot />
</ul>

<style>
  ul {
    font-family: var(--typography-subtitle1-font-family, var(--typography-font-family, Roboto));
    font-size: var(--typography-subtitle1-font-size, 1rem);
    font-weight: var(--typography-subtitle1-font-weight, 400);
    letter-spacing: var(--typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: var(--typography-subtitle1-text-decoration, inherit);
    text-transform: var(--typography-subtitle1-text-transform, inherit);
    line-height: 1.5rem;
    margin: 0;
    list-style-type: none;
    color: var(--primary-text-color, rgba(0, 0, 0, 0.87));
    padding: var(--list-vertical-padding, 8px) 0;
  }
</style>