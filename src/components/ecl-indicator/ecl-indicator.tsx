import { Component, Prop, h, Element } from '@stencil/core';
import Indicator from '@ecl/indicator';
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
  @Prop() noScript: boolean = false;
  @Prop() srLabel: string = '';
  @Prop() styleClass: string = '';

  getClass(): string {
    const styleClasses = ['ecl-indicator', this.styleClass];

    return styleClasses.join(' ').trim();
  }

  componentDidRender() {
    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Indicator = Indicator;
      const indicator = new Indicator(this.el.firstElementChild);
      indicator.init();
    }
  }

  render() {
    return (
      <span
        class={this.getClass()}
        data-ecl-indicator
      >
        <span class="ecl-indicator__value">
          {this.value}
        </span>
      { this.srLabel &&
        <span class="ecl-indicator__label">
          {this.srLabel}
        </span>
      }
      </span>
    );
  }
}
