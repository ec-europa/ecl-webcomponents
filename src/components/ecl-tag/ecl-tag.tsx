import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

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
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() external: boolean = false;
  @Prop() variant: string = 'display';
  @Prop() url: string = '';
  @State() toBeRemoved: boolean = false;

  @Event() removeTag: EventEmitter<boolean>;

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
        return 'a';

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
        size="2xs"
      >
      </ecl-icon>
    )  
  }

  getRemovable() {
    return (
      <span
        class="ecl-tag__icon"
        onClick={() => {
          this.toBeRemoved = true;
          this.removeTag.emit(true); // Emit the custom event
        }}
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

  render() {
    const Element = this.getTag(this.variant);
    return (
      <Element 
        class={this.getClass()}
        {...(this.variant === 'link' && { href: this.url })}
      >
        <slot></slot>
        { this.variant === 'link' && this.external ? this.getExternal() : '' }
        { this.variant === 'removable' ? this.getRemovable() : '' }
      </Element>
    )
  }
}
