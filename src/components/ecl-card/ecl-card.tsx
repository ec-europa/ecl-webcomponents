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
  @Prop({ mutable: true }) theme: string;
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() imageZoom: boolean = false;

  getClass(): string {
    return [
      `ecl-card`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
     <article class={this.getClass()}>
    { this.image &&
      <ecl-picture
        image={this.image}
        imageAlt={this.imageAlt}
        imgClass={`ecl-card__image sc-ecl-card-${this.theme}`}
        styleClass={`ecl-card__picture sc-ecl-picture-${this.theme}`}
        zoom={this.imageZoom}
        data-ecl-picture-link
      >
        <slot name="sources"></slot>
      </ecl-picture>
    }
      <div class="ecl-card__body">
        <slot></slot>
      </div>
     </article>
    )
  }
}
