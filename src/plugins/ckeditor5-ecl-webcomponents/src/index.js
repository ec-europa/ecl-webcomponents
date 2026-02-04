import { ECL_TOOLBAR_ITEMS } from './plugin/schema/ecl_webcomponents_toolbar_items';
export { default } from './plugin/ecl_webcomponents';
export { DEFAULT_ECL_CONFIG } from './plugin/schema/ecl_webcomponents_config';

const ECL_DROPDOWN = {
  label: 'ECL',
  withText: true,
  items: ECL_TOOLBAR_ITEMS,
};

export const ECL_MAIN_TOOLBAR = [ECL_DROPDOWN];

export const ECL_BLOCK_TOOLBAR = {
  items: ECL_TOOLBAR_ITEMS,
};
