import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-label',
  styleUrls: {
    ec: './build/styles/ecl-label-ec.css',
    eu: './build/styles/ecl-label-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclLabel {
  @Prop() styleClass: string = '';
  @Prop() variant: string = 'low';
  @Prop() theme: string = 'ec';

  getClass(): string {
    return [
      `ecl-label`,
      `ecl-label--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <span class={this.getClass()}>
        <slot></slot>
      </span>
    )
  }
}
