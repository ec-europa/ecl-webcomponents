import { Component, h, Prop } from '@stencil/core';
import Fragment from 'stencil-fragment';

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

  render() {
    return (
      <Fragment>
        <input
          id={this.itemId}
          class="ecl-rating-field__input ecl-rating-field__star"
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.checked}
          required={this.required}
          disabled={this.disabled}
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
      </Fragment>
    );
  }
}