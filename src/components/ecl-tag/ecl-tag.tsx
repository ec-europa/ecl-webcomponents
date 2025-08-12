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
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() external: boolean = false;
  @Prop() colorMode: string;
  @Prop() variant: string = 'link';
  @Prop() url: string = '';
  @Prop() noWrap: boolean = false;
  @State() toBeRemoved: boolean = false;

  @Event() removeTag: EventEmitter<boolean>;

  getClass(): string {
    const styleClasses = [
      `ecl-tag`,
      `ecl-tag--${this.variant}`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.noWrap) {
      styleClasses.push('ecl-tag--nowrap');
    }

    return styleClasses.join(' ');
  }

  getTag(variant) {
    switch (variant) {
      case 'link':
        return 'a';

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
          icon="close-outline"
          style-class={`ecl-tag__icon-close sc-ecl-tag-${this.theme}`}
          size="xs"
        >
        </ecl-icon>
      </span>
    )
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    const Element = this.getTag(this.variant);
    return (
      <Element 
        class={this.getClass()}
        {...(this.variant === 'link' && { href: this.url })}
        {...(this.variant === 'removable' && { type: 'button' })}
      >
        <slot></slot>
        { this.variant === 'link' && this.external ? this.getExternal() : '' }
        { this.variant === 'removable' ? this.getRemovable() : '' }
      </Element>
    )
  }
}
