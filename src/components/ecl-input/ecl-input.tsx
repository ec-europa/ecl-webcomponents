import { Component, h, Prop, State } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-input',
  styleUrls: {
    ec: './build/styles/ecl-input-ec.css',
    eu: './build/styles/ecl-input-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclInput {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() inputClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() invalid: boolean = false;
  @Prop() helperId: string;
  @Prop() helperText: string;
  @Prop() placeholder: string;
  @Prop() width: string = 'm';
  @Prop() label: string;
  @Prop() type: string;
  @Prop() inputId: string;
  @Prop() name: string;
  @Prop() defaultValue: string;
  @State() value: string;

  getClass(): string {
    const styleClasses = ['ecl-input', this.styleClass];
    if (this.type === 'checkbox') {
      styleClasses.push('ecl-checkbox', `ecl-checkbox--${this.width}`);

      if (this.disabled) {
        styleClasses.push('ecl-checkbox--disabled');
      }
      if (this.invalid) {
        styleClasses.push('ecl-checkbox--invalid');
      }
    }
    if (this.type === 'radio') {
      styleClasses.push('ecl-radio', `ecl-radio--${this.width}`);

      if (this.disabled) {
        styleClasses.push('ecl-radio--disabled');
      }
      if (this.invalid) {
        styleClasses.push('ecl-radio--invalid');
      }
    }

    return styleClasses.join(' ');
  }

  getInputClasses(input): string {
    let inputClasses = [`ecl-${input}__input`];

    if (this.type === 'text' || this.type === 'search') {
      inputClasses = ['ecl-text-input', `ecl-text-input--${this.width}`];
      if (this.invalid) {
        inputClasses.push('ecl-text-input--invalid');
      }
      if (this.disabled) {
        inputClasses.push('ecl-text-input--disabled');
      }
    }
    if (this.inputClass) {
      inputClasses.push(this.inputClass);
    }

    return inputClasses.join(' ');
  }

  getBoxClasses(input, box): string {
    let boxClasses = [`ecl-${input}__${box}`];
    if (this.disabled) {
      boxClasses.push(`ecl-${input}__${box}--disabled`);
    }
    if (this.invalid) {
      boxClasses.push(`ecl-${input}__${box}--invalid`);
    }

    return boxClasses.join(' ');
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    const wrapperAttrs = {};

    const attributes = {
      class: this.getInputClasses(this.type),
      type: this.type,
      id: this.inputId,
      name: this.name,
      required: this.required,
      disabled: this.disabled,
      value: this.defaultValue,
      placeholder: this.placeholder,
    };

    return (
      <div 
        class={this.getClass()}
        {...wrapperAttrs}
      >
        <input {...attributes} onInput={(event) => this.handleChange(event)}  />
      { this.type === 'checkbox' ?
        <label
          class={this.getBoxClasses('checkbox', 'label')}
          htmlFor={this.inputId}
        >
          <span class={this.getBoxClasses('checkbox', 'box')}>
            <ecl-icon
              style-class={`ecl-checkbox__icon sc-ecl-input-${this.theme}`}
              icon="check"
              size="m"
              ></ecl-icon>
          </span>
          <span class="ecl-checkbox__text">{this.label}</span>
        </label>
        : ''
      }
      { this.type === 'checkbox' && this.helperText ?
        <div
          class="ecl-checkbox__help"
          id={this.helperId}
        >
          {this.helperText}
        </div>
        : ''
      }
      { this.type === 'radio' ?
        <label 
          class={this.getBoxClasses('radio', 'label')}
          htmlFor={this.inputId}
        >
          <span class={this.getBoxClasses('radio', 'box')}>
            <span class="ecl-radio__box-inner"></span>
          </span>
          <span class="ecl-radio__text">{this.label}</span>
        </label>
        : ''
      }
      { this.type === 'radio' && this.helperText ?
        <div 
          class="ecl-radio__help"
          id={this.helperId}
        >
          {this.helperText}
        </div>
        : ''
      }
      </div>
    );
  }
}