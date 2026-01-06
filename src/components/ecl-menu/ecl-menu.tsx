import { Component, h, Prop, Element } from '@stencil/core';
import Menu from "@ecl/menu";
declare const ECL: any;

@Component({
  tag: 'ecl-menu',
  styleUrls: {
    ec: './build/styles/ecl-menu-ec.css',
    eu: './build/styles/ecl-menu-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclMenu {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() menuId: string;
  @Prop() eclScript: boolean = true;
  @Prop() styleClass: string;
  @Prop() group: string = 'group1';
  @Prop() maxLines: number = 2;
  @Prop() menuTitle: string;
  @Prop() closeLabel: string;
  @Prop() backLabel: string;
  @Prop() siteName: string;
  @Prop() previousLabel: string;
  @Prop() nextLabel: string;

  getClass(): string {
    const styleClasses = [
      'ecl-menu',
      `sc-ecl-menu-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentDidLoad() {
    if (this.eclScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Menu = Menu;
      const menu = new Menu(this.el.firstElementChild);
      menu.init();
    }
  }

  componentDidRender() {
    if (this.menuId) {
      const items = this.el.querySelectorAll('.ecl-menu__item');
      if (items) {
        items.forEach((item, i) => {
          item.id = `ecl-menu-item-${this.menuId}-${i}`;
        });
      }
    }
  }

  getAttrs() {
    const attrs = {
      'aria-expanded': 'false',
      'data-ecl-menu-max-lines': this.maxLines,
      'role': 'navigation',
    };

    return attrs;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <nav
        class={this.getClass()}
        {...this.getAttrs()}
      >
        <div class="ecl-menu__overlay" data-ecl-menu-overlay></div>
        <div class="ecl-container ecl-menu__container">
          <ecl-button
            styleClass={`ecl-menu__open sc-ecl-menu-${this.theme}`}
            data-ecl-menu-open
            hide-label
            buttonStyle="neutral"
            variant="tertiary"
          >
            <ecl-icon
              icon="hamburger"
              size="m"
              slot="icon-before"
              styleClass={`sc-ecl-menu-${this.theme}`}
            ></ecl-icon>
            {this.menuTitle}
            <ecl-icon
              icon="close"
              size="m"
              slot="icon-after"
              styleClass={`sc-ecl-menu-${this.theme} ecl-menu__close-switch`}
            ></ecl-icon>
          </ecl-button>
          <section
            class="ecl-menu__inner"
            aria-label={this.menuTitle}
            data-ecl-menu-inner
          >
            <header class="ecl-menu__inner-header">
              <ecl-button
                styleClass={`ecl-menu__close sc-ecl-menu-${this.theme}`}
                type="submit"
                data-ecl-menu-close
                variant="tertiary"
              >
                <ecl-icon
                  icon="close"
                  size="s"
                  slot="icon-before"
                  styleClass={`ecl-button__icon ecl-button__icon--before sc-ecl-menu-${this.theme}`}
                ></ecl-icon>
                {this.closeLabel}
              </ecl-button>
              <div class="ecl-menu__title">{this.menuTitle}</div>
              <ecl-button
                data-ecl-menu-back
                type="submit"
                variant="ghost"
                styleClass={`ecl-menu__back sc-ecl-menu-${this.theme}`}
                containerExtraClasses={`sc-ecl-menu-${this.theme}`}
              >
                <ecl-icon
                  icon="corner-arrow"
                  rotate="270"
                  size="xs"
                  slot="icon-before"
                  styleClass={`sc-ecl-menu-${this.theme}`}
                ></ecl-icon>
                    {this.backLabel}
              </ecl-button>
            </header>
            <ecl-button
              theme={this.theme}
              type="button"
              variant="ghost"
              hideLabel
              styleClass={`ecl-menu__item ecl-menu__items-previous sc-ecl-menu-${this.theme}`}
              data-ecl-menu-items-previous
              tabindex="-1"
            >
              <ecl-icon
                slot="icon-before"
                icon="corner-arrow"
                rotate="270"
                size="s"
              ></ecl-icon>
              {this.previousLabel}
            </ecl-button>
            <ecl-button
              theme={this.theme}
              type="button"
              variant="ghost"
              hideLabel
              styleClass={`ecl-menu__item ecl-menu__items-next sc-ecl-menu-${this.theme}`}
              data-ecl-menu-items-next
              tabindex="-1"
            >
              <ecl-icon
                slot="icon-before"
                icon="corner-arrow"
                rotate="270"
                size="s"
              ></ecl-icon>
              {this.nextLabel}
            </ecl-button>
            <ul class="ecl-menu__list" data-ecl-menu-list>
              <slot></slot>
            </ul>
          </section>
        </div>
      </nav>
    )
  }
}