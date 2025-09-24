import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";

@Component({
  tag: 'ecl-footer-eu',
  styleUrls: {
    eu: './build/styles/ecl-footer-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclFooterEu {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() logoAlt: string;
  @Prop() logoTitle: string;
  @Prop() logoLink: string;
  @Prop() logoAriaLabel: string;
  @Prop() logoLangCode: string;
  @Prop() siteName: string;
  @Prop() variant: string;
  @Prop() description: string;

  getClass(): string {
    const styleClasses = [
      `ecl-site-footer`,
      `ecl-site-footer--${this.variant}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'eu');
  }

  componentDidLoad() {
    const lists = this.el.querySelectorAll('.ecl-site-footer__list');
    const titles = this.el.querySelectorAll('ecl-text[tag="div"]');
    if (titles && titles[0]) {
      titles.forEach((title) => {
        const section = title.parentElement.parentElement;
        title.firstElementChild.classList.add(`sc-ecl-footer-${this.theme}-${this.theme}`);
        section.insertBefore(title.firstElementChild, section.firstElementChild);
      });
    }
    if (lists) {
      lists.forEach((list) => {
        const items = list.querySelectorAll('.ecl-site-footer__list-item');
        if (items) {
          list.innerHTML = '';
          list.append(...items);
        }
      });
    }
  }

  render() {
    const logoPath = getAssetPath(`./build/images/${this.theme}/logos/standard-version/positive/logo-${this.theme}--${this.logoLangCode}.svg`);

    return (
      <footer
        class={this.getClass()}
      >
        <div class="ecl-container ecl-site-footer__container">
        {this.variant === 'harmonised' &&
          <div class="ecl-site-footer__row">
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section  ecl-site-footer__section--site-info">
                <h2 class="ecl-site-footer__title">{this.siteName}</h2>
                <div class="ecl-site-footer__description">
                  {this.description}
                </div>
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-info"></slot>
                </ul>
              </div>
            </div>
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-top-middle"></slot>
                </ul>
              </div>
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-top-middle-bottom"></slot>
                </ul>
              </div>
            </div>
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-top-right"></slot>
                </ul>
              </div>
            </div>
          </div>
        }
          <div class="ecl-site-footer__row">
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
                <ecl-link
                  path={this.logoLink}
                  theme={this.theme}
                  variant="standalone"
                  styleClass={`ecl-site-footer__logo-link sc-ecl-footer-eu-${this.theme}`}
                  ariaLabel={this.logoAriaLabel}
                >
                  <ecl-picture
                    theme={this.theme}
                    imageAlt={this.logoAlt}
                    imgClass={`sc-ecl-footer-eu-${this.theme} ecl-site-footer__logo-image`}
                    styleClass={`ecl-site-footer__picture sc-ecl-site-footer-eu-${this.theme}`}
                    image={
                      getAssetPath(`./build/images/${this.theme}/logos/condensed-version/positive/logo-${this.theme}--${this.logoLangCode}.svg`)
                    }
                  >   
                    <source
                      srcSet={logoPath}
                      media="(min-width: 996px)"
                    ></source>
                    <slot name="sources"></slot>
                  </ecl-picture>
                </ecl-link>
              { this.variant === 'core' &&
                <div class="ecl-site-footer__description">
                  {this.description}
                </div>
              }
              { this.variant === 'harmonised' &&
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-logo-info"></slot>
                </ul>
              }
              </div>
            </div>
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-main"></slot>
                </ul>
              </div>
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                   <slot name="ecl-footer-list-bottom-left"></slot>
                </ul>
              </div> 
            { (this.variant === 'harmonised') &&
              <div class="ecl-site-footer__section">
                <ul class={`ecl-site-footer__list`}>
                  <slot name="ecl-footer-list-main-bottom"></slot>
                </ul>
              </div>
            }
            { this.variant === 'core' &&
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                   <slot name="ecl-footer-list-bottom-right"></slot>
                </ul>
              </div>
            }
            </div> 
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-right-top"></slot>
                </ul>
              </div>   
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-right"></slot>
                </ul>
              </div>              
            </div> 
          </div>
        </div>
      </footer>
    )
  }
}

