import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from '../../utils/assetPath';
declare const ECL: any;

@Component({
  tag: 'ecl-indicator',
  styleUrls: {
    ec: './build/styles/ecl-indicator-ec.css',
    eu: './build/styles/ecl-indicator-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclIndicator {
  @Element() el: HTMLElement;
  @Prop() value: string = '';
  @Prop() extraClasses: string = '';
  @Prop() eclScript: boolean = false;
  @Prop() styleClass: string = '';

  getClass(): string {
    const styleClasses = ['ecl-indicator', this.styleClass];

    if (this.extraClasses) {
      styleClasses.push(this.extraClasses);
    }

    return styleClasses.join(' ').trim();
  }

  componentDidRender() {
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-indicator.js');
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.remove();
      }

      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const indicator = new ECL.Indicator(this.el);
        indicator.init();
      };
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <span
        class={this.getClass()} // Use the getClass method to handle the classes
        data-ecl-indicator
      >
        {this.value}
      </span>
    );
  }
}
