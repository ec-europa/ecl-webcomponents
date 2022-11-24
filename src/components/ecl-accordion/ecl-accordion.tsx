import { Component, Prop, h, Host, Element, getAssetPath } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-accordion',
  styleUrls: {
    ec: './build/styles/ecl-accordion-ec.css',
    eu: './build/styles/ecl-accordion-eu.css'
  },
  shadow: false,
  assetsDirs: ['build'],
})

export class EclAccordion {
  @Element() el: HTMLElement;
  @Prop() styleClass: string;
  @Prop() eclScript: boolean;
  @Prop() theme: string = 'ec';

  getClass(): string {
    return [
      `ecl-accordion`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
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

  render() {
    return (
      <Host
        class={this.getClass()}
      >
        <slot></slot> 
      </Host>
    )
  }
}
