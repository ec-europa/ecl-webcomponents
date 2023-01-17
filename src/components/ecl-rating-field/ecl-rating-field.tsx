import { Component, h, Prop, Element } from '@stencil/core';

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
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;

  componentDidRender() {
    const stars = this.el.querySelectorAll('.ecl-rating-field__star');
    this.el.querySelector('.ecl-rating-field').innerHTML = '';
    this.el.querySelector('.ecl-rating-field').append(...stars);
  }

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