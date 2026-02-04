import { Plugin } from 'ckeditor5';
import EclWecomponentsUI from './ui/ecl_webcomponents_ui';

export default class EclWebcomponents extends Plugin {
  static get requires() {
    return [EclWecomponentsUI];
  }

  static get pluginName() {
    return 'EclWebcomponents';
  }
}
