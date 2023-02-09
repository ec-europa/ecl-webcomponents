import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-description-list-term',
  shadow: false,
})
export class EclDescriptionListTerm {
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';

  getClass(): string {
    return [
      `ecl-description-list__term`,
      `sc-ecl-description-list-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <dt class={this.getClass()}>
        <slot></slot>
      </dt>
    );
  }
}