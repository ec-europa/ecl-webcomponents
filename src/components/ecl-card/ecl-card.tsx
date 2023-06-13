import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-card',
  styleUrls: {
    ec: './build/styles/ecl-card-ec.css',
    eu: './build/styles/ecl-card-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclCard {
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() image: string;
  @Prop() imageAlt: string;

  getClass(): string {
    return [
      `ecl-card`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
     <article class={this.getClass()}>
      <ecl-picture
        image={this.image}
        imageAlt={this.imageAlt}
        imgClass={`ecl-card__image sc-ecl-card-${this.theme}`}
        styleClass={`ecl-card__picture sc-ecl-picture-${this.theme}`}
      >
        <slot name="sources"></slot>
      </ecl-picture>
      <div class="ecl-card__body">
        <slot></slot>
      </div>
     </article>
    )
  }
}
