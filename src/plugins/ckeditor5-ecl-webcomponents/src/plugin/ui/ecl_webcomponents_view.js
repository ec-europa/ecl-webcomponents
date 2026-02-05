import { View, LabeledFieldView, createLabeledDropdown, createLabeledInputText, ButtonView, submitHandler, IconCheck, IconCancel } from 'ckeditor5';

export default class FormView extends View {
  constructor(locale, attributes) {
    super(locale);
    this.inputs = [];

    Object.entries(attributes).forEach(([key, config]) => {
      if (config.type === 'select') {
        this.inputs.push(this._createSelect(key, config.value, config.options));
      } else if (config.type === 'boolean') {
        this.inputs.push(this._createBooleanField(key, config.value));
      } else {
        this.inputs.push(this._createInput(key, config.value));
      }
    });

    this.saveButtonView = this._createButton('Save', IconCheck, 'ck-button-save');
    this.saveButtonView.type = 'submit';
    this.cancelButtonView = this._createButton('Cancel', IconCancel, 'ck-button-cancel');
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
    for (const view of this.childViews) {
      if (view.fieldView && typeof view.fieldView.focus === 'function') {
        view.focus();
        break;
      }
    }
  }

  _createInput(label, value) {
    const labeledInput = new LabeledFieldView(this.locale, createLabeledInputText);
    labeledInput.value = value;
    labeledInput.label = label;

    return labeledInput;
  }

  _createButton(label, icon, className) {
    const button = new ButtonView(this.locale);

    button.set({
      label,
      icon,
      tooltip: true,
    });

    button.extendTemplate({
      attributes: {
        class: className,
      },
    });

    return button;
  }

  _createSelect(label, value, options) {
    const selectView = new View(this.locale);
    const id = `ck-select-${label.replace(/\s+/g, '-').toLowerCase()}`;

    selectView.setTemplate({
      tag: 'select',
      attributes: {
        id,
        class: ['ck', 'ck-input'],
      },
      children: options.map(option => ({
        tag: 'option',
        attributes: {
          value: option.value,
        },
        children: [{ text: option.label }],
      })),
    });

    // Expose value API (important)
    Object.defineProperty(selectView, 'value', {
      get() {
        return selectView.element?.value;
      },
      set(val) {
        if (selectView.element) {
          selectView.element.value = val;
        }
      },
    });

    const labeledField = new LabeledFieldView(this.locale, () => selectView);
    labeledField.label = label;
    labeledField.fieldViewId = id;

    labeledField.isEmpty = false;

    labeledField.on('render', () => {
      selectView.value = value;
    });

    return labeledField;
  }

  _createBooleanField(label, value) {
    return this._createSelect(label, value ? 'true' : 'false', [
      { label: 'True', value: 'true' },
      { label: 'False', value: 'false' },
    ]);
  }
}
