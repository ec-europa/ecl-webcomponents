import { Component, Prop, h, Element, getAssetPath } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-accordion',
  styleUrls: {
    ec: './build/styles/ecl-accordion-ec.css',
    eu: './build/styles/ecl-accordion-eu.css',
  },
  shadow: false,
  assetsDirs: ['build'],
})

export class EclAccordion {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() eclScript: boolean = false;
  @Prop() withUtils: boolean = false;
  @Prop() theme: string = 'ec';

  getClass(): string {
    return [
      `ecl-accordion`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    if (this.withUtils && !document.querySelector('#ecl-utils-styles')) {
      const style = document.createElement('style');
      style.id = 'ecl-utils-styles';
      style.innerHTML = `@import "./build/styles/ecl-utilities-${this.theme}.css"`;
      document.body.appendChild(style);
    }
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
