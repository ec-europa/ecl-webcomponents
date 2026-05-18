import { Component, h, Prop, Element } from '@stencil/core';
import Tooltip from "@ecl/tooltip";
declare const ECL: any;

@Component({
  tag: 'ecl-tooltip',
  styleUrls: {
    ec: './build/styles/ecl-tooltip-ec.css',
    eu: './build/styles/ecl-tooltip-eu.css',
  },
  shadow: false,
  scoped: false,
})
export class EclTooltip {
  @Element() el: HTMLElement;
  @Prop() noScript: boolean = false;

  componentDidLoad() {
    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Tooltip = Tooltip;

      const tooltip = new Tooltip(document.body);
      tooltip.init();
    }
  }

  render() {
    return;
  }
}