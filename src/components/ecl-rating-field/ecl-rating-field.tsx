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

  componentDidRender() {
    const stars = this.el.querySelectorAll('.ecl-rating-field__star');
    this.el.querySelector('.ecl-rating-field').innerHTML = '';
    this.el.querySelector('.ecl-rating-field').append(...stars);
  }

  getClass(): string {
    return [
      `ecl-rating-field`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <div class={this.getClass()}>
        <slot></slot>
      </div>
    );
  }
}