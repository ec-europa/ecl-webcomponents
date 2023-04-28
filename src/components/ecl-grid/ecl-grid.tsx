import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-grid',
  styleUrls: {
    ec: './build/styles/ecl-grid-ec.css',
    eu: './build/styles/ecl-grid-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclGrid {
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() columns: number = 12;

  getClass(): string {
    return [
      `ecl-col-${this.columns}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <div class={this.getClass()}>
        <slot></slot>
      </div>
    )
  }
}
