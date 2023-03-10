import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-social-media-follow',
  styleUrls: {
    ec: './build/styles/ecl-social-media-follow-ec.css',
    eu: './build/styles/ecl-social-media-follow-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclSocialMediaFollow {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() variant: string = 'horizontal';
  @Prop() description: string;

  getClass(): string {
    return [
      `ecl-social-media-follow`,
      `ecl-social-media-follow--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
    if (this.el.querySelector('.ecl-social-media-follow__list')) {
      const list = this.el.querySelector('.ecl-social-media-follow__list');
      const popover = this.el.getElementsByTagName('ecl-popover')[0] || false;
      if (popover) {
        const li = document.createElement('li');
        li.classList.add('ecl-social-media-follow__item', `sc-ecl-social-media-follow-${this.theme}`);
        popover.parentNode.insertBefore(li, popover);
        li.appendChild(popover);
        li.querySelector('.ecl-popover__toggle').classList.add(`ecl-social-media-follow__link`, `sc-ecl-social-media-follow-${this.theme}`);
      }
      const items = this.el.querySelectorAll('.ecl-social-media-follow__item');

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
        <p class="ecl-social-media-follow__description">{this.description}</p> : '' 
      }
        <ul class="ecl-social-media-follow__list">
          <slot></slot>
        </ul>
      </div>
    );
  }
}
