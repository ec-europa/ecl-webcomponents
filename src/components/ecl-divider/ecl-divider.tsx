import { Component, h, Prop, Element } from '@stencil/core';

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
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;

  getClass(): string {
    const styleClasses = [
      `ecl-separator`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  render() {
    return (
      <hr class={this.getClass()} />
    );
  }
}