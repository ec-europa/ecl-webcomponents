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
    const classes = ['ecl-indicator'];
    if (this.extraClasses) {
      classes.push(this.extraClasses);
    }

    return (
      <span
        class={classes.join(' ')}
        data-ecl-indicator
        data-ecl-auto-init="Indicator"
      >
        {this.value}
      </span>
    );
  }
}
