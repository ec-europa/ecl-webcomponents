import { Component, Prop, h, Element, State } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-accordion',
  styleUrls: {
    ec: './build/styles/ecl-accordion-ec.css',
    eu: './build/styles/ecl-accordion-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclAccordion {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() eclScript: boolean = false;
  @Prop() theme: string;
  @Prop() colorMode: string = '';
  @State() openItemId: string;

  handleToggle = (itemId: string) => {
    this.openItemId = this.openItemId === itemId ? null : itemId;
  };

  getClass(): string {
    const styleClasses = [
      `ecl-accordion`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');

    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-accordion-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const accordion = new ECL.Accordion(this.el);
        accordion.init();
      };
      document.body.appendChild(script);
    }
  }

  componentDidLoad() {
    const items = this.el.querySelectorAll('ecl-accordion-item');

    items.forEach((item: any, index: number) => { 
      const container = item.querySelector('.ecl-accordion__item');
      if (container) {
        container.classList.toggle('is-first', index === 0);
        container.classList.toggle('is-last', index === items.length - 1);
      }

      item.addEventListener('toggleItem', (e) => {
        const id = e.detail;

        // Just toggle the clicked item, don't collapse the others
        if (item.itemId === id) {
          item.expanded = !item.expanded;
        }
      });
    });
  }

  render() {
    return (
      <div
        class={this.getClass()}
      >
        <slot></slot> 
      </div>
    )
  }
}
