import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import EclWecomponentsUI from './ecl_webcomponents_ui';

export default class EclWebcomponents extends Plugin {
  static get requires() {
    return [EclWecomponentsUI];
  }

  static get pluginName() {
    return 'EclWebcomponents';
  }
}
