import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ecl-rating-star',
  styleUrls: {
    ec: './build/styles/ecl-rating-field-ec.css',
    eu: './build/styles/ecl-rating-field-eu.css',
  },
  shadow: false,
})
export class EclRatingStar {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() itemId: string;
  @Prop() value: string;
  @Prop() name: string;
  @Prop() checked: boolean = false;
  @Prop() required: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() icon: string = 'star-outline';
  @Prop() iconFilled: string = 'star-filled';
  @Prop() label: string;
  @Prop() hasChanged: boolean = false;
  @Prop() isFocused: boolean = false;
  @Event() inputFocus: EventEmitter<FocusEvent>;
  @Event() inputBlur: EventEmitter<FocusEvent>;
  @Event() inputChange: EventEmitter;

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
    return (
      <div>
        <input
          id={this.itemId}
          class="ecl-rating-field__input ecl-rating-field__star"
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.checked}
          required={this.required}
          disabled={this.disabled}
          onFocus={ev => this.handleFocus(ev)}
          onBlur={ev => this.handleBlur(ev)}
          onChange={ev => this.handleChange(ev)}
        />
        <label 
          class="ecl-rating-field__label ecl-rating-field__star" 
          htmlFor={this.itemId}
        >
        { this.label ?
          <span class="ecl-u-sr-only">{ this.label }</span> : '' }
          <ecl-icon
            icon={this.iconFilled}
            styleClass="ecl-rating-field__icon-filled"
            size="m"
          >
          </ecl-icon>
          <ecl-icon
            icon={this.icon}
            styleClass="ecl-rating-field__icon-outline"
            size="m"
          >
          </ecl-icon>
        </label>
      </div>
    );
  }
}