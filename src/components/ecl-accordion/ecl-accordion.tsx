import { Component, Prop, h, Element } from '@stencil/core';
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
  @Prop() theme: string = 'ec';
  @Prop() clickedItem: HTMLElement;

  getClass(): string {
    return [
      `ecl-accordion`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
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

  componentDidRender() {
    this.el.querySelectorAll('.ecl-accordion__item button').forEach((item) => {
      item.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        this.clickedItem = target.parentElement.parentElement;
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
