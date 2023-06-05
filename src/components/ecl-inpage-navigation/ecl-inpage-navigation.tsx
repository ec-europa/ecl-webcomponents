import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-inpage-navigation',
  styleUrls: {
    ec: './build/styles/ecl-inpage-navigation-ec.css',
    eu: './build/styles/ecl-inpage-navigation-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclInpageNavigation {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() inpageTitle: string;
  @Prop() inpageId: string;

  getClass(): string {
    return [
      `ecl-inpage-navigation`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
    const items = this.el.querySelectorAll('.ecl-inpage-navigation__item');
    if (items) {
      items.forEach((item) => {
        const link = item.querySelector('.ecl-inpage-navigation__link');
        if (link) {
          link.setAttribute('data-ecl-inpage-navigation-link', 'data-ecl-inpage-navigation-link');
          item.innerHTML = '';
          item.appendChild(link);
        }
      });
      this.el.querySelector('.ecl-inpage-navigation__list').innerHTML = '';
      this.el.querySelector('.ecl-inpage-navigation__list').append(...items);
    }

    if (this.eclScript) { 
      const src = getAssetPath('./build/scripts/ecl-inpage-navigation-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const inpageNavigation = new ECL.InpageNavigation(this.el.firstElementChild);
        inpageNavigation.init();
      };

      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <nav
        class={this.getClass()}
        data-ecl-inpage-navigation
        aria-labelledby={this.inpageId}
      >
        <div
          class="ecl-inpage-navigation__title"
          id={this.inpageId}
        >
          {this.inpageTitle}
        </div>
        <div class="ecl-inpage-navigation__body">
          <button
            class={`ecl-inpage-navigation__trigger sc-ecl-inpage-navigation-${this.theme}`}
            id={`${this.inpageId}-trigger`}
            aria-expanded="false"
            aria-controls="ecl-inpage-navigation-list"
            data-ecl-inpage-navigation-trigger
            aria-label=""
          >
            <span
              class="ecl-inpage-navigation__trigger-current"
              data-ecl-inpage-navigation-trigger-current
            ></span>
            <ecl-icon
              icon="corner-arrow"
              size="s"
              transform="rotate-180"
              style-class="ecl-inpage-navigation__trigger-icon"
            ></ecl-icon>
          </button>
          <ul
            class="ecl-inpage-navigation__list"
            data-ecl-inpage-navigation-list
            id={`${this.inpageId}-list`}
          >
            <slot></slot>
          </ul>
        </div>
      </nav>
    );
  }
}