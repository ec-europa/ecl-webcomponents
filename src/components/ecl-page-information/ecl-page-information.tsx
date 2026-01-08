import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-page-information',
  styleUrls: {
    ec: './build/styles/ecl-page-information-ec.css',
    eu: './build/styles/ecl-page-information-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclPageInformation {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;

  getClass(): string {
    const styleClasses = [
      `ecl-page-info`,
      this.styleClass
    ]

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <div
        class={this.getClass()}
      >
        <slot></slot>
      </div>
    );
  }
}
