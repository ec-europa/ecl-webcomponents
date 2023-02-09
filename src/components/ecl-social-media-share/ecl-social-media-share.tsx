import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-social-media-share',
  styleUrls: {
    ec: './build/styles/ecl-social-media-share-ec.css',
    eu: './build/styles/ecl-social-media-share-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclSocialMediaShare {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() variant: string = 'horizontal';
  @Prop() description: string;

  getClass(): string {
    return [
      `ecl-social-media-share`,
      `ecl-social-media-share--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
    if (this.el.querySelector('.ecl-social-media-share__list')) {
      const list = this.el.querySelector('.ecl-social-media-share__list');
      const popover = this.el.getElementsByTagName('ecl-popover')[0] || false;
      if (popover) {
        const li = document.createElement('li');
        li.classList.add('ecl-social-media-share__item', `sc-ecl-social-media-share-${this.theme}`);
        popover.parentNode.insertBefore(li, popover);
        li.appendChild(popover);
        li.querySelector('.ecl-popover__toggle').classList.add(`ecl-social-media-share__link`, `sc-ecl-social-media-share-${this.theme}`);
      }
      const items = this.el.querySelectorAll('.ecl-social-media-share__item');

      list.innerHTML = '';
      list.append(...items);
    }
  }

  render() {
    return (
      <div 
        class={this.getClass()}
      >
      { this.description ? 
        <p class="ecl-social-media-share__description">{this.description}</p> : '' 
      }
        <ul class="ecl-social-media-share__list">
          <slot></slot>
        </ul>
      </div>
    );
  }
}
