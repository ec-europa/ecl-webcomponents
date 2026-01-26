import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ecl-mega-menu-featured-list-item',
  shadow: false,
})
export class EclMegaMenuFeaturedListItem {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() label!: string;
  @Prop() path?: string;
  @Prop() image: string;
  @Prop() hasDescription: boolean = false;
  @Prop() external: boolean = false;

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  getClass(): string {
    const styleClasses = [
      `ecl-mega-menu__featured-list__item`,
      `sc-ecl-mega-menu-${this.theme}`,
      this.styleClass
    ];

    if (this.image && !this.path && !this.hasDescription) {
      styleClasses.push('ecl-mega-menu__featured-list__item--image-only');
    }

    if (this.image && this.path && this.hasDescription) {
      styleClasses.push('ecl-mega-menu__featured-list__item--combo');
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      <Host
        class={this.getClass()}
      >
        {this.image &&
        <ecl-picture
          image={this.image}
          style-class={`ecl-mega-menu__featured-picture sc-ecl-mega-menu-${this.theme}`}
          img-class={`ecl-mega-menu__featured-image sc-ecl-mega-menu-${this.theme}`}
          >
            <slot name="sources"></slot>
          </ecl-picture>
        }
        { this.path &&
          <ecl-link
            path={this.path}
            variant="standalone"
            style-class={`ecl-mega-menu__featured-link sc-ecl-mega-menu-${this.theme}`}
            {...(this.external && { 'external' : null })}
          >
            {this.label}
          </ecl-link>
        }
        { this.hasDescription && 
          <div class={`ecl-mega-menu__featured-list__item-description sc-ecl-mega-menu-${this.theme}`}>
            <slot></slot>
          </div>
        }
      </Host>
    )
  }
}
