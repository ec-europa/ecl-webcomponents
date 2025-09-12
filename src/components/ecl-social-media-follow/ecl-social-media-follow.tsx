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
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() variant: string = 'horizontal';
  @Prop() description: string;
  @Prop() position: string = 'left';
  @Prop() inlineTitle: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-social-media-follow`,
      `ecl-social-media-follow--${this.variant}`,
      this.styleClass
    ];

    if (this.position === 'right') {
      styleClasses.push('ecl-social-media-follow--right');
    }

    if (this.inlineTitle) {
      styleClasses.push('ecl-social-media-follow--description_inline');
    }

    return styleClasses.join(' '); 
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
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
