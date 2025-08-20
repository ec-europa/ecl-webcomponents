import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-datepicker',
  styleUrls: {
    ec: './build/styles/ecl-datepicker-ec.css',
    eu: './build/styles/ecl-datepicker-eu.css',
  },
  shadow: false,
  scoped: false,
})

export class EclDatepicker {
  @Event() valueChanged: EventEmitter<string>;
  @Event() focused: EventEmitter<void>;
  @Event() blurred: EventEmitter<void>;
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() placeholder: string = 'DD-MM-YYYY';
  @Prop() inputId: string = `ecl-datepicker-${Math.random().toString(36).slice(2, 10)}`;
  @Prop() invalid: boolean = false;
  @Prop() type: string;
  @Prop() name: string;
  @Prop() defaultValue: string;
  @Prop() dateFormat: string = 'DD-MM-YYYY';
  @Prop() yearRange: number = 40;

  handleChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(newValue);
  }

  handleFocus() {
    this.focused.emit();
  }

  handleBlur() {
    this.blurred.emit();
  }

  getClass(): string {
    const styleClasses = ['ecl-datepicker', this.styleClass];

    if (this.invalid) {
      styleClasses.push('ecl-datepicker--invalid');
    }

    if (this.disabled) {
      styleClasses.push('ecl-datepicker--disabled');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const pikadaySrc = 'https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.8.2/pikaday.js';

    if (document.querySelector(`script[src="${pikadaySrc}"]`)) {
      document.querySelector(`script[src="${pikadaySrc}"]`).remove();
    }

    const pikaday = document.createElement('script');
    pikaday.setAttribute('crossorigin', 'anonymous');
    pikaday.src = pikadaySrc;

    pikaday.onload = () => {
      const src = getAssetPath('./build/scripts/ecl-datepicker-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }

      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = () => {
        const datepicker = new ECL.Datepicker(
          this.el.querySelector('.ecl-datepicker__field'),
          { format: this.dateFormat, yearRange: Number(this.yearRange) }
        );

        datepicker.init();
      };

      document.body.appendChild(script);
    };

    document.body.appendChild(pikaday);
  }

  render() {
    const attributes = {};
    if (this.inputId) {
      const group = this.el.closest('.ecl-form-group');
      if (group) {
        const label = group.querySelector('.ecl-form-label');
        if (label) {
          label.setAttribute('for', this.inputId);
          label.setAttribute('id', `${this.inputId}-label`);
        }
        const helper = group.querySelector('.ecl-help-block');
        if (helper) {
          helper.setAttribute('id', `${this.inputId}-helper`);
          attributes['aria-describedby'] = `${this.inputId}-helper`;
        }
      }
    }

    return (
      <div class={this.getClass()}>
        <input
          class={`ecl-datepicker__field ecl-text-input sc-ecl-text-input-${this.theme} ecl-text-input--s ${this.invalid ? 'ecl-text-input--invalid' : ''}`}
          autocomplete="off"
          data-ecl-datepicker-toggle
          id={this.inputId}
          value={this.defaultValue}
          required={this.required}
          disabled={this.disabled}
          placeholder={this.placeholder}
          onChange={event => this.handleChange(event)}
          onFocus={() => this.handleFocus()}
          onBlur={() => this.handleBlur()}
          {...attributes}
        />
        <ecl-icon
          styleClass={`ecl-datepicker__icon sc-ecl-datepicker-${this.theme}`}
          icon="calendar"
          size="xs"
        >  
        </ecl-icon>
      </div>
    );
  }
}