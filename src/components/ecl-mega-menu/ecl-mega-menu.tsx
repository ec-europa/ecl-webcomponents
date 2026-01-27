import { Component, h, Prop, Element } from '@stencil/core';
import MegaMenu from "@ecl/mega-menu";
declare const ECL: any;

@Component({
  tag: 'ecl-mega-menu',
  shadow: false,
  styleUrls: {
    ec: './build/styles/ecl-mega-menu-ec.css',
    eu: './build/styles/ecl-mega-menu-eu.css',
  },
  scoped: true,
})
export class EclMegaMenu {
  @Element() el: HTMLElement;
  @Prop() styleClass: string;
  @Prop({ mutable: true }) theme: string;
  @Prop() noScript: boolean = false;
  @Prop() menuId?: string = `ecl-mega-menu-${Math.random().toString(36).slice(2, 10)}`;
  @Prop() ariaLabel: string;
  @Prop() backLabel?: string;
  @Prop() toggleLabel?: string;
  @Prop() featuredPriority: 'primary' | 'secondary' = 'secondary';

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const subLists = this.el.querySelectorAll('.ecl-mega-menu__sublist');

    if (subLists) {
      [...subLists].forEach((list) => {
        const items = list.querySelectorAll('.ecl-mega-menu__sublink');
        if (items.length > 0) {
          const lastItem = items[items.length - 1];
          lastItem.classList.add('ecl-mega-menu__sublink--last');
        }
      });
    }

    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      const megaMenu = new MegaMenu(this.el.firstElementChild);
      megaMenu.init();
    }
  }

  getClass(): string {
    const styleClasses = [
      `ecl-mega-menu`,
      this.styleClass
    ];

    if (this.featuredPriority === 'primary') {
      styleClasses.push('ecl-mega-menu--featured--primary');
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      <nav
        class={this.getClass()}
        data-ecl-mega-menu
        role="navigation"
        id={this.menuId}
        aria-label={this.ariaLabel}
      >
        <div class="ecl-mega-menu__overlay" />

        <div class="ecl-container ecl-mega-menu__container">
          <ecl-button
            variant="tertiary"
            type="button"
            hide-label
            button-style="neutral"
            style-class={`ecl-mega-menu__open sc-ecl-mega-menu-${this.theme}`}
            aria-expanded="false"
            data-ecl-mega-menu-open
          >
            <ecl-icon
              style-class={`sc-ecl-mega-menu-${this.theme} is-first`}
              icon="hamburger"
              size="m"
              slot="icon-after"
            ></ecl-icon>
            <ecl-icon
              style-class={`sc-ecl-mega-menu-${this.theme}`}
              icon="close"
              size="m"
              slot="icon-after"
            ></ecl-icon>
              {this.toggleLabel}
          </ecl-button>
          <section
            class="ecl-mega-menu__inner"
            data-ecl-mega-menu-inner
          >
            <header class="ecl-mega-menu__inner-header">
              {this.backLabel && (
                <ecl-button
                  style-class={`ecl-mega-menu__back sc-ecl-mega-menu-${this.theme}`}
                  type="button"
                  variant="tertiary"
                  icon-position="before"
                  data-ecl-mega-menu-back
                >
                  <ecl-icon
                    icon="corner-arrow"
                    size="xs"
                    rotate="270"
                    style-class={`sc-ecl-mega-menu-${this.theme}`}
                  ></ecl-icon>
                  {this.backLabel}
                </ecl-button>
              )}
            </header>

            <ul
              class="ecl-mega-menu__list"
            >
              <slot />
            </ul>
          </section>
        </div>
      </nav>
    );
  }
}

