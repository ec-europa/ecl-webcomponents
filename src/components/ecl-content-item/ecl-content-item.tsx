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
  @Prop({ mutable: true }) theme: string;
  @Prop() imagePosition: string = 'left';
  @Prop() imageSize: string = 'medium';
  @Prop() imageZoom: boolean = false;
  @Prop() divider: boolean = false;
  @Prop() colorMode: string;

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidRender() {
    const picture = this.el.getElementsByTagName('picture')[0];
    const date = this.el.getElementsByTagName('ecl-date-block')[0];
    const themeClass = `sc-ecl-content-item-${this.theme}`;
    if (picture) {
      picture.classList.add(
        `sc-ecl-content-item-${this.theme}`,
        'ecl-content-item__picture',
        `ecl-content-item__picture--${this.imageSize}`,
        `ecl-content-item__picture--${this.imagePosition}`,
      );

      if (this.imageZoom) {
        picture.classList.add('ecl-picture--zoom');
      }

      if (this.imagePosition === 'right') {
        picture.parentElement.style.order = '1';
      }

      const img = picture.getElementsByTagName('img')[0];
      if (img) {
        img.classList.add(`ecl-content-item__image`, themeClass);
      } 
    } else if (date) {
      date.firstElementChild.classList.add('ecl-content-item__date', `sc-ecl-content-item-${this.theme}`);
      this.el.firstElementChild.classList.add('ecl-content-item--inline');
    }


    const block = this.el.querySelector('.ecl-content-block');
    if (block) {
      block.classList.add(`ecl-content-item__content-block`, themeClass);
    }
  }

  getClass(): string {
    const styleClasses = [
      `ecl-content-item`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.divider) {
      styleClasses.push('ecl-content-item--divider');
    }

    if (this.imagePosition === 'top') {
      styleClasses.push('ecl-content-item--stack');
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
     <article class={this.getClass()}>
      <slot name="sidebar"></slot>
      <slot name="content-block"></slot>
     </article>
    )
  }
}
