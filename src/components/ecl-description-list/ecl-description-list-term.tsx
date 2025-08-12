import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-description-list-term',
  shadow: false,
  scoped: false,
})
export class EclDescriptionListTerm {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

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