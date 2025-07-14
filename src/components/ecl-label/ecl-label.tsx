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
  @Prop({ mutable: true }) theme: string;

  getClass(): string {
    return [
      `ecl-label`,
      `ecl-label--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <span class={this.getClass()}>
        <slot></slot>
      </span>
    )
  }
}
