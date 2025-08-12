import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-divider',
  styleUrls: {
    ec: './build/styles/ecl-divider-ec.css',
    eu: './build/styles/ecl-divider-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclDivider {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;

  getClass(): string {
    const styleClasses = [
      `ecl-separator`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <hr class={this.getClass()} />
    );
  }
}