import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ecl-mega-menu-subitem',
  shadow: false,
})
export class EclMegaMenuSubitem {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() label!: string;
  @Prop() path?: string;
  @Prop() oneLevelOnly = false;
  @Prop() external = false;
  @Prop() seeAll = false;
  @Prop() hasFeatured = false;
  @Prop() featuredTitle: string;
  @Prop() hasChildren: boolean = false;
  @Prop() seeAllLabel?: string;

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  getClass(): string {
    const styleClasses = [
      `ecl-mega-menu__subitem`,
      `sc-ecl-mega-menu-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  render() {
    return (
      <Host
        class={this.getClass()}
        data-ecl-mega-menu-subitem
      >
        
      { this.hasChildren ?
        <ecl-button
          type="button"
          style-class={`ecl-mega-menu__sublink sc-ecl-mega-menu-${this.theme}`}
          data-ecl-mega-menu-sublink
          aria-expanded="false"
          aria-haspopup
        >
          {this.label}
          <ecl-icon
            style-class={`sc-ecl-mega-menu-${this.theme} is-first`}
            icon="corner-arrow"
            size="2xs"
            rotate="90"
            slot="icon-after"
          ></ecl-icon>
          <ecl-icon
            style-class={`sc-ecl-mega-menu-${this.theme}`}
            icon="arrow-left"
            flip="horizontal"
            size="s"
            slot="icon-after"
          ></ecl-icon>
        </ecl-button> :
        <ecl-link
          variant="standalone"
          data-ecl-mega-menu-link
          path={this.path}
          style-class={`ecl-mega-menu__sublink sc-ecl-mega-menu-${this.theme}`}
        >
          {this.label}
        </ecl-link> 
      }
      { this.hasChildren &&
        <div
          class={`ecl-mega-menu__mega ecl-mega-menu__mega--level-2 sc-ecl-mega-menu-${this.theme} ${!this.hasChildren ? 'ecl-mega-menu-featured-only' : ''}`}
          data-ecl-mega-menu-mega
        >
          <ul class={`ecl-mega-menu__sublist sc-ecl-mega-menu-${this.theme}`}>
            <slot />
            <li 
              class={`ecl-mega-menu__spacer sc-ecl-mega-menu-${this.theme}`}
              data-ecl-mega-menu-subitem>&nbsp;</li>
          { this.seeAll && (
            <li
              class={`ecl-mega-menu__subitem ecl-mega-menu__see-all sc-ecl-mega-menu-${this.theme}`}
              data-ecl-mega-menu-subitem
            >
              <ecl-link
                style-class={`sc-ecl-mega-menu-${this.theme}`}
                variant="standalone"
                path={this.path}
              >
                {this.seeAllLabel}
                <ecl-icon
                  style-class={`sc-ecl-mega-menu-${this.theme}`}
                  icon="arrow-left"
                  size="xs"
                  rotate="180"
                  slot="icon-after"
                ></ecl-icon>
              </ecl-link>
            </li>
          )}
          </ul>
        { this.hasFeatured &&
          <div
            class={`ecl-mega-menu__featured sc-ecl-mega-menu-${this.theme}`}
            data-ecl-mega-menu-featured
          >
            <div class={`ecl-mega-menu__featured-scrollable sc-ecl-mega-menu-${this.theme}`}>
            { this.featuredTitle &&
              <div class={`ecl-mega-menu__featured-title sc-ecl-mega-menu-${this.theme}`}>{this.featuredTitle}</div>
            }
              <ul class={`ecl-mega-menu__featured-list sc-ecl-mega-menu-${this.theme}`}>
                <slot name="featured-second" />
              </ul>
            </div>
          </div>
        }
        </div>
      }
      </Host>
    )
  }
}
