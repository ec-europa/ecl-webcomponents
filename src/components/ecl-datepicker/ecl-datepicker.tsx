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
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() placeholder: string = 'DD-MM-YYYY';
  @Prop() inputId: string;
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

  componentDidRender() {
    const momentSrc = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';

    if (document.querySelector(`script[src="${momentSrc}"]`)) {
      document.querySelector(`script[src="${momentSrc}"]`).remove();
    }

    const moment = document.createElement('script');
    moment.setAttribute('integrity', 'sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=');
    moment.setAttribute('crossorigin', 'anonymous');
    moment.src = momentSrc;

    moment.onload = () => {
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

    document.body.appendChild(moment);
  }

  render() {
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
        />
        <ecl-icon
          theme={this.theme}
          styleClass={`ecl-datepicker__icon sc-ecl-datepicker-${this.theme}`}
          icon="calendar"
          size="s"
        >  
        </ecl-icon>
      </div>
    );
  }
}