import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-tag',
  styleUrls: {
    ec: './build/styles/ecl-tag-ec.css',
    eu: './build/styles/ecl-tag-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclTag {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() external: boolean = false;
  @Prop() variant: string = 'display';
  @Prop() toBeRemoved: boolean = false;

  getClass(): string {
    return [
      `ecl-tag`,
      `ecl-tag--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  getTag(variant) {
    switch (variant) {
      case 'link':
        return 'a'

      case 'display':
        return 'span';

      case 'removable':
        return 'button';

       default:
    }
  }

  getExternal() {
    return (
      <ecl-icon 
        icon="external"
        style-class={`ecl-tag__icon ecl-tag__icon--external sc-ecl-tag-${this.theme}`}
        size = "2xs"
      >
      </ecl-icon>
    )  
  }

  getRemovable() {
    return (
      <span
        class="ecl-tag__icon"
      >
        <ecl-icon 
          icon="close"
          style-class={`ecl-tag__icon-close sc-ecl-tag-${this.theme}`}
        >
        </ecl-icon>
        <ecl-icon
          icon="close-filled"
          style-class={`ecl-tag__icon-close-filled sc-ecl-tag-${this.theme}`}
        ></ecl-icon>
      </span>
    )
  }

  componentDidRender() {
    const closeButton = this.el.querySelector('.ecl-tag__icon');
    
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.toBeRemoved = true;
      });
    }
    console.log(this.toBeRemoved);
  }

  render() {
    const Element = this.getTag(this.variant);
    return (
      <Element 
        class={this.getClass()}
      >
        <slot></slot>
        { this.variant === 'link' && this.external ? this.getExternal() : '' }
        { this.variant === 'removable' ? this.getRemovable() : '' }
      </Element>
    )
  }
}