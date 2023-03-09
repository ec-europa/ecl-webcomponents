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

  getImgAttr() {
    const attrs = {
      class: 'ecl-card__image',
      role: 'img',
    }

    if (this.imageAlt) {
      attrs['alt'] = this.imageAlt;
    }

    return attrs;
  }

  render() {
    return (
     <article class={this.getClass()}>
      <div
        style={{ backgroundImage: "url(" + this.image + ")"}}
        {...this.getImgAttr()}
      ></div>
      <div class="ecl-card__body">
        <slot></slot>
      </div>
     </article>
    )
  }
}
