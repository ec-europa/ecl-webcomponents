import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-breadcrumb',
  styleUrls: {
    ec: './build/styles/ecl-breadcrumb-ec.css',
    eu: './build/styles/ecl-breadcrumb-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build']
})

export class EclBreadcrumb {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() variant: string = 'default';
  @Prop() theme: string = 'ec';
  @Prop() eclScript: boolean = false;
  @Prop() minItemsRight: number = 2;


  getClass(): string {
    return [
      `ecl-breadcrumb`,
      `ecl-breadcrumb--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
    const items = this.el.querySelectorAll('.ecl-breadcrumb__segment');
    const itemsCount = items.length;
    const ellipsis = this.el.querySelector('.ecl-breadcrumb__segment--ellipsis');
    const startHidingIndex = Array.from(items).indexOf(ellipsis);
    const toBeHidden = Array.from(items).slice((startHidingIndex + 1), (itemsCount - this.minItemsRight));

    toBeHidden.forEach((item) => {
      item.setAttribute('data-ecl-breadcrumb-item', 'expandable');
    });

    this.el.querySelector('.ecl-breadcrumb__container').innerHTML = '';
    this.el.querySelector('.ecl-breadcrumb__container').append(...items);

    if (this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-breadcrumb-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const breadcrumb = new ECL.Breadcrumb(this.el.firstElementChild);
        breadcrumb.init();
      };

      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <nav
        class={this.getClass()}
        data-ecl-breadcrumb
      >
        <ol class="ecl-breadcrumb__container">
          <slot></slot>
        </ol>
      </nav>
    )
  }
}

