import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ecl-button',
  styleUrls: {
    ec: './build/styles/ecl-button-ec.css',
    eu: './build/styles/ecl-button-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclButton {
  @Prop() styleClass: string;
  @Prop() type: string = 'primary';
  @Prop() theme: string = 'ec';

  getClass(): string {
    return [
      `ecl-button`,
      `ecl-button--${this.type}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <Host class={this.getClass()}>
        <span class="ecl-button__container">
          <slot name="icon-before"></slot>
          <span class="ecl-button__label">
            <slot></slot>
          </span>
          <slot name="icon-after"></slot>
        </span>
      </Host>
    )
  }
}
