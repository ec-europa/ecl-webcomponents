import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from '../../utils/assetPath';
declare const ECL: any;

@Component({
  tag: 'ecl-breadcrumb',
  styleUrls: {
    ec: './build/styles/ecl-breadcrumb-ec.css',
    eu: './build/styles/ecl-breadcrumb-eu.css',
  },
  shadow: false,
  scoped: true
})
export class EclBreadcrumb {
  @Element() el: HTMLElement;

  @Prop() styleClass: string = '';
  @Prop() theme: string;
  @Prop() eclScript: boolean = false;
  @Prop() navigationText: string = '';
  @Prop() ellipsisLabel: string = '';
  @Prop() minItemsLeft: number = 1;
  @Prop() minItemsRight: number = 2;

  getClass(): string {
    return [
      `ecl-breadcrumb`,
      this.styleClass
    ].join(' ');
  }

  getNavAttributes() {
    const attrs: any = {};

    if (this.navigationText) {
      attrs['aria-label'] = this.navigationText;
    }

    return attrs;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');

    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-breadcrumb.js');
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        if (typeof ECL?.Breadcrumb === 'function') {
          const breadcrumb = new ECL.Breadcrumb(this.el.firstElementChild);
          breadcrumb.init();
        }
      };
      document.body.appendChild(script);
    }
  }

  componentDidLoad() {
    const container = this.el.querySelector('.ecl-breadcrumb__container');
    const items = Array.from(container?.children || []).filter(
      (el) =>
        el.tagName.toLowerCase() === 'ecl-breadcrumb-item' &&
        !el.hasAttribute('ellipsis')
    );

    if (container && items.length > 0) {
      const ellipsis = document.createElement('ecl-breadcrumb-item');
      ellipsis.setAttribute('ellipsis', 'true');
      ellipsis.setAttribute('button-aria-label', this.ellipsisLabel);
      container.insertBefore(ellipsis, items[this.minItemsLeft]);

      items.forEach((item, index) => {
        if (index > this.minItemsLeft - 1 && index < items.length - this.minItemsRight) {
          item.setAttribute('data-ecl-breadcrumb-item', 'expandable');
          item.setAttribute('aria-hidden', 'false');
        } else {
          item.setAttribute('data-ecl-breadcrumb-item', 'static');
        }
      });
    }
  }

  render() {
    return (
      <nav class={this.getClass()} {...this.getNavAttributes()}>
        <ol class="ecl-breadcrumb__container">
          <slot></slot>
        </ol>
      </nav>
    );
  }
}
