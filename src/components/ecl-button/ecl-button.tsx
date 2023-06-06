import { Component, Prop, h, Element } from '@stencil/core';

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
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() type: string = 'submit';
  @Prop() variant: string = 'primary';
  @Prop() theme: string = 'ec';
  @Prop() itemId: string;

  componentDidRender() {
    const dataAttrs = Object.keys(this.el.dataset);
    if (dataAttrs) {
      dataAttrs.forEach((attr) => {
        const button = this.el.firstElementChild as HTMLElement;
        button.dataset[attr] = '';
        delete this.el.dataset[attr];
      });
    }

    if (this.el.getElementsByTagName('ecl-icon')[0] && this.el.querySelector('.ecl-icon')) {
      const slot = this.el.getElementsByTagName('ecl-icon')[0].getAttribute('slot');
      this.el.querySelector('.ecl-icon').classList.add('ecl-button__icon');
      if (slot) {
        this.el.querySelector('.ecl-icon').classList.add(`ecl-button__${slot.substring(0, 5) + '-' + slot.substring(5)}`, `sc-ecl-button-${this.theme}`);
      }
    }
  }

  getClass(): string {
    return [
      `ecl-button`,
      `ecl-button--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <button
        class={this.getClass()}
        type={this.type}
        {...(this.itemId && { id: this.itemId })}>
        <span class="ecl-button__container">
          <slot name="icon-before"></slot>
          <span class="ecl-button__label">
            <slot></slot>
          </span>
          <slot name="icon-after"></slot>
        </span>
      </button>
    )
  }
}
