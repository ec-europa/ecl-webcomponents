import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-rating-field',
  styleUrls: {
    ec: './build/styles/ecl-rating-field-ec.css',
    eu: './build/styles/ecl-rating-field-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclRatingField {
  @Prop() theme: string = 'ec';
  @Prop() inputId: string = `ecl-rating-field-${Math.random().toString(36).slice(2, 10)}`;
  @Prop() styleClass: string;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-rating-field`,
      this.styleClass
    ];

    if (this.disabled) {
      styleClasses.push('ecl-rating-field--disabled');
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      <div class={this.getClass()}>
        <slot></slot>
      </div>
    );
  }
}