import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
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
  @Prop() theme: string = 'ec';
  @Prop() eclScript: boolean = false;
  @Prop() styleClass: string;
  @Prop() group: string = 'group1';
  @Prop() maxLines: number = 2;
  @Prop() menuTitle: string;
  @Prop() closeLabel: string;
  @Prop() backLabel: string;
  @Prop() menuLink: string;
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
      const src = getAssetPath('./build/scripts/ecl-menu-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const menu = new ECL.Menu(this.el.firstElementChild);
        menu.init();
      };

      document.body.appendChild(script);
    }
  }

  getAttrs() {
    const attrs = {
      'aria-expanded': "false",
      'data-ecl-menu-max-lines': this.maxLines,
    };

    return attrs;
  }

  render() {
    return (
      <nav
        class={this.getClass()}
        {...this.getAttrs()}
      >
        <div class="ecl-menu__overlay" data-ecl-menu-overlay></div>
        <div class="ecl-container ecl-menu__container">
          <a
            class="ecl-link ecl-link--standalone ecl-menu__open"
            href={this.menuLink}
            data-ecl-menu-open
          >
            <ecl-icon
              icon="hamburger"
              theme={this.theme}
              size="s"
              styleClass={`sc-ecl-menu-${this.theme}`}
            ></ecl-icon>
            {this.menuTitle}
          </a>
          <section class="ecl-menu__inner" data-ecl-menu-inner>
            <header class="ecl-menu__inner-header">
              <button
                class="ecl-menu__close ecl-button ecl-button--text"
                type="submit"
                data-ecl-menu-close
              >
                <span class="ecl-menu__close-container ecl-button__container">
                  <ecl-icon
                    icon="close-filled"
                    theme={this.theme}
                    size="s"
                    styleClass={`ecl-button__icon ecl-button__icon--before sc-ecl-menu-${this.theme}`}
                  ></ecl-icon>
                  <span
                    class="ecl-button__label"
                    data-ecl-label="true">
                      {this.closeLabel}
                  </span>
                </span>
              </button>
              <div class="ecl-menu__title">{this.menuTitle}</div>
              <button
                data-ecl-menu-back
                type="submit"
                class="ecl-menu__back ecl-button ecl-button--text"
              >
                <span class="ecl-button__container">
                  <ecl-icon
                    icon="corner-arrow"
                    transform="rotate-270"
                    size="xs"
                    styleClass={`ecl-button__icon ecl-button__icon--before sc-ecl-menu-${this.theme}`}
                  ></ecl-icon>
                  <span
                    class="ecl-button__label"
                    data-ecl-label
                  >
                    {this.backLabel}
                  </span>
                </span>
              </button>
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
                theme={this.theme}
                slot="icon-before"
                icon="corner-arrow"
                transform="rotate-270"
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
                theme={this.theme}
                slot="icon-before"
                icon="corner-arrow"
                transform="rotate-270"
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