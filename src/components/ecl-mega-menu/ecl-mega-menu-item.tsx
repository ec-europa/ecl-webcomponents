import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ecl-mega-menu-item',
  shadow: false,
})
export class EclMegaMenuItem {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() label!: string;
  @Prop() path?: string;
  @Prop() featuredImage: string;
  @Prop() oneLevelOnly = false;
  @Prop() isPromotional = false;
  @Prop() external = false;
  @Prop() seeAll = false;
  @Prop() hasInfo = false;
  @Prop() hasFeatured = false;
  @Prop() featuredTitle: string;
  @Prop() hasChildren: boolean = false;
  @Prop() seeAllLabel?: string;
  @Prop() infoTitle: string;
  @Prop() isContainer: boolean = false;

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  getClass(): string {
    const styleClasses = [
      `ecl-mega-menu__item`,
      `sc-ecl-mega-menu-${this.theme}`,
      this.styleClass
    ];

    if (this.isPromotional) {
      styleClasses.push('ecl-mega-menu__item--promotional');
    }

    if (this.hasChildren) {
      styleClasses.push('ecl-mega-menu__item--has-children');
    }

    if (this.isContainer) {
      styleClasses.push('ecl-mega-menu__item--has-container');
    }

    if (this.oneLevelOnly) {
      styleClasses.push('ecl-mega-menu__item--one-level-only');
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      <Host
        class={this.getClass()}
        data-ecl-mega-menu-item
        {...(this.hasChildren && { 'data-ecl-has-children': '' })}
        {...(this.isContainer && { 'data-ecl-has-container' : ''})}
      >
        
      { this.hasChildren || this.isContainer ?
        <ecl-button
          type="button"
          style-class={`ecl-mega-menu__link sc-ecl-mega-menu-${this.theme}`}
          data-ecl-mega-menu-link
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
          style-class={`ecl-mega-menu__link sc-ecl-mega-menu-${this.theme}`}
        >
          {this.label}
        </ecl-link> 
      }
      { this.isContainer &&
        <div
          class={`
            ecl-mega-menu__mega
            ecl-mega-menu__mega-container
            sc-ecl-mega-menu-${this.theme}
            ${!this.hasInfo ? 'ecl-mega-menu__mega--no-info' : ''}
          `}
          data-ecl-mega-menu-mega
        >
          <ecl-grid container>
            <div class="ecl-mega-menu__mega-container-scrollable">
              <slot name="container" />
            </div>
          </ecl-grid>
        </div>
      }
      { this.hasChildren &&
        <div class={`ecl-mega-menu__wrapper sc-ecl-mega-menu-${this.theme}`}>
          <div class={`ecl-container sc-ecl-mega-menu-${this.theme}`}>
          { this.hasInfo &&
            <div
              class={`ecl-mega-menu__info sc-ecl-mega-menu-${this.theme}`}
              data-ecl-mega-menu-mega
            >
              <span class={`ecl-mega-menu__info-title sc-ecl-mega-menu-${this.theme}`}>
                {this.infoTitle}
              </span>
              <div class={`ecl-mega-menu__info-scrollable sc-ecl-mega-menu-${this.theme}`}>
                <div class={`ecl-mega-menu__info-content sc-ecl-mega-menu-${this.theme}`}>
                  <slot name="info" />
                </div>
              </div>
            </div>
          }
            <div
              class={`
                ecl-mega-menu__mega
                sc-ecl-mega-menu-${this.theme}
                ${!this.hasInfo ? 'ecl-mega-menu__mega--no-info' : ''}
                ${this.hasFeatured ? 'ecl-mega-menu__mega--has-featured' : ''}
              `}
              data-ecl-mega-menu-mega
            >
              <ul class={`ecl-mega-menu__sublist sc-ecl-mega-menu-${this.theme}`}>
                <slot />
                <li 
                  class={`ecl-mega-menu__spacer sc-ecl-mega-menu-${this.theme}`}
                  data-ecl-mega-menu-subitem>&nbsp;</li>
              {this.seeAll && (
                <li
                  class={`ecl-mega-menu__subitem ecl-mega-menu__see-all sc-ecl-mega-menu-${this.theme}`}
                  data-ecl-mega-menu-subitem
                >
                  <ecl-link
                    style-class={`ecl-mega-menu__info-link sc-ecl-mega-menu-${this.theme}`}
                    path={this.path}
                  >
                    {this.seeAllLabel}
                    <ecl-icon
                      style-class={`sc-ecl-mega-menu-${this.theme}`}
                      icon="arrow-left"
                      size="xs"
                      slot="icon-after"
                      rotate="180"
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
                    <slot name="featured" />
                  </ul>
                </div>
              </div>
            }
            </div>
          </div>
        </div>
      }
      </Host>
    )
  }
}
