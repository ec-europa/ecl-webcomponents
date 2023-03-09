import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-content-item',
  styleUrls: {
    ec: './build/styles/ecl-content-item-ec.css',
    eu: './build/styles/ecl-content-item-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclContentItem {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() imagePosition: string = 'left';
  @Prop() imageSize: string = 'medium';

  componentDidRender() {
    const picture = this.el.getElementsByTagName('picture')[0];
    if (picture) {
      picture.classList.add(
        `sc-ecl-content-item-${this.theme}`,
        'ecl-content-item__picture',
        `ecl-content-item__picture--${this.imageSize}`,
        `ecl-content-item__picture--${this.imagePosition}`,
      );

      if (this.imagePosition === 'right') {
        picture.parentElement.style.order = '1';
      }

      const img = picture.getElementsByTagName('img')[0];
      if (img) {
        img.classList.add(`ecl-content-item__image`, `sc-ecl-content-item-${this.theme}`);
      }
    }

    const block = this.el.querySelector('.ecl-content-block');
    if (block) {
      block.classList.add(`ecl-content-item__content-block`, `sc-ecl-content-item-${this.theme}`);
    }
  }

  getClass(): string {
    return [
      `ecl-content-item`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
     <article class={this.getClass()}>
      <slot name="picture"></slot>
      <slot name="content-block"></slot>
     </article>
    )
  }
}
