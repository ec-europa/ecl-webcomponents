import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-description-list',
  styleUrls: {
    ec: './build/styles/ecl-description-list-ec.css',
    eu: './build/styles/ecl-description-list-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclDescriptionList {
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() variant: string = 'vertical';

  getClass(): string {
    return [
      `ecl-description-list`,
      `ecl-description-list--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <dl class={this.getClass()}>
        <slot></slot>
      </dl>
    );
  }
}
