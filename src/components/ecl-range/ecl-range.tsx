import { Component, h, Prop, Element, State, Event, EventEmitter } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-range',
  styleUrls: {
    ec: './build/styles/ecl-range-ec.css',
    eu: './build/styles/ecl-range-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclRange {
  @Element() el: HTMLElement;
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
  @Prop() inputId: string;
  @Prop() name: string;
  @Prop() defaultValue: string;
  @Prop() max: number;
  @Prop() min: number;
  @Prop() step: number = 1;
  @Prop() valueLabel: string;
  @State() value: number;
  @Prop() hasChanged: boolean = false;
  @Prop() isFocused: boolean = false;
  @Event() inputFocus: EventEmitter<FocusEvent>;
  @Event() inputBlur: EventEmitter<FocusEvent>;
  @Event() inputChange: EventEmitter;

  getClass(): string {
    const styleClasses = ['ecl-input', this.styleClass];

    return styleClasses.join(' ');
  }

  getInputClasses(): string {
    const inputClasses = ['ecl-range', `ecl-range--${this.width}`];
    
    if (this.inputClass) {
      inputClasses.push(this.inputClass);
    }

    if (this.disabled) {
      inputClasses.push(`ecl-range--disabled`);
    }

    if (this.invalid) {
      inputClasses.push(`ecl-range--invalid`);
    }

    return inputClasses.join(' ');
  }

  componentDidRender() {
    if (this.inputId) {
      const group = this.el.closest('.ecl-form-group');
      if (group) {
        const label =  group.querySelector('.ecl-form-label');
        if (label) {
          label.setAttribute('for', this.inputId);
          label.setAttribute('id', `${this.inputId}-label`);
        }
        const helper = group.querySelector('.ecl-help-block');
        if (helper) {
          helper.setAttribute('id', `${this.inputId}-helper`);
        }
      }
    }
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-range-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const formGroup = this.el.closest('.ecl-form-group');
        formGroup.setAttribute('data-ecl-range', 'data-ecl-range');
        formGroup.classList.add(`sc-ecl-range-${this.theme}`);
        const range = new ECL.Range(formGroup);
        range.init();
      };
      document.body.appendChild(script);
    }
  }

  handleFocus(event) {
    this.inputFocus.emit(event);
    this.isFocused = true;
  }

  handleChange(event) {
    this.inputChange.emit(event);
    this.hasChanged = true;
  }

  handleBlur(event) {
    this.inputBlur.emit(event);
    this.isFocused = false;
  }

  render() {
    const wrapperAttrs = {};
    wrapperAttrs['data-ecl-range'] = true;
  
    const attributes = {
      type: 'range',
      class: this.getInputClasses(),
      id: this.inputId,
      name: this.name,
      required: this.required,
      disabled: this.disabled,
      placeholder: this.placeholder,
      'data-ecl-range-input': true,
      min: this.min,
      max: this.max,
      step: this.step,
      value: this.defaultValue,
    };

    return (
      <div 
        class={this.getClass()}
        {...wrapperAttrs}
      >
        <input
          {...attributes}
          onInput={ev => this.handleChange(ev)}
          onFocus={ev => this.handleFocus(ev)}
          onBlur={ev => this.handleBlur(ev)}
          onChange={ev => this.handleChange(ev)}
        />
      
        <div class="ecl-range__value">
          {this.valueLabel}
          <span class="ecl-range__value-current" data-ecl-range-value-current></span>
        </div>
      </div>
    );
  }
}