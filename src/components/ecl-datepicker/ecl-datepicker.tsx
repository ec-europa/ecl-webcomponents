import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const DATEPICKER: any;

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
  @Prop() firstDayOfTheWeek: number = 1;
  @Prop() width: string = 'm';
  @Prop() min: string = '';
  @Prop() max: string = '';
  @Prop() name: string = this.inputId;
  @Prop() defaultValue: string;

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
    const styleClasses = [
      'ecl-datepicker',
      `ecl-datepicker--${this.width}`,
      this.styleClass
    ];

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
    const duetSrc = 'https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.esm.js';

    if (document.querySelector(`script[src="${duetSrc}"]`)) {
      document.querySelector(`script[src="${duetSrc}"]`).remove();
    }

    const duet = document.createElement('script');
    duet.setAttribute('type', 'module');
    duet.src = duetSrc;

    duet.onload = () => {
      const src = getAssetPath('./build/scripts/ecl-datepicker-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }

      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = () => {
        ;(window as any).ECL = (window as any).ECL || {};
        const datepicker = new DATEPICKER.Datepicker(
          this.el.querySelector('.ecl-datepicker'),
        );

        datepicker.init();
      };

      document.body.appendChild(script);
    };

    document.body.appendChild(duet);
  }

  render() {
    const attributes = {};
    if (this.invalid) {
      attributes['invalid'] = true;
    }
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
      <div 
        class={this.getClass()}
        data-ecl-datepicker-toggle
        data-placeholder={this.placeholder}
        data-value={this.defaultValue}
        {...attributes}
      >
        <duet-date-picker
          identifier={this.inputId}
          name={this.name}
          required={this.required}
          disabled={this.disabled}
          first-day-of-the-week={this.firstDayOfTheWeek}
          min={this.min}
          max={this.max}
        ></duet-date-picker>
      </div>
    );
  }
}