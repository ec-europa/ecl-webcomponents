import { Plugin } from 'vue';
import { defineCustomElements } from '@ecl/ecl-webcomponents/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};