import { View, LabeledFieldView, createLabeledInputText, ButtonView, submitHandler } from '@ckeditor/ckeditor5-ui';

import { icons } from '@ckeditor/ckeditor5-core';

export default class FormView extends View {
  constructor(locale, attributes) {
    super(locale);
    this.inputs = [];
    const attrs = Object.entries(attributes);

    attrs.forEach((attr, i) => {
      const [key, value] = attr;
      this.inputs.push(this._createInput(key, value));
    });

    this.saveButtonView = this._createButton('Save', icons.check, 'ck-button-save');
    this.saveButtonView.type = 'submit';
    this.cancelButtonView = this._createButton('Cancel', icons.cancel, 'ck-button-cancel');
    // Delegate ButtonView#execute to FormView#cancel.
    this.cancelButtonView.delegate('execute').to(this, 'cancel');

    this.childViews = this.createCollection([...this.inputs, this.saveButtonView, this.cancelButtonView]);

    this.setTemplate({
      tag: 'form',
      attributes: {
        class: ['ck', 'ck-ecl-webcomponents-form'],
        tabindex: '-1',
      },
      children: this.childViews,
    });
  }

  render() {
    super.render();

    // Submit the form when the user clicked the save button
    // or pressed enter in the input.
    submitHandler({
      view: this,
    });
  }

  focus() {
    this.childViews.first.focus();
  }

  _createInput(label, value) {
    const labeledInput = new LabeledFieldView(this.locale, createLabeledInputText);
    labeledInput.value = value;
    labeledInput.label = label;

    return labeledInput;
  }

  _createButton(label, icon, className) {
    const button = new ButtonView();

    button.set({
      label,
      icon,
      tooltip: true,
      class: className,
    });

    return button;
  }
}
