import { Component, Prop, h, Element, getAssetPath } from '@stencil/core';

@Component({
  tag: 'ecl-footer',
  styleUrls: {
    ec: './build/styles/ecl-footer-ec.css',
    eu: './build/styles/ecl-footer-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclFooter {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() logoAlt: string;
  @Prop() logoTitle: string;
  @Prop() logoAriaLabel: string;
  @Prop() logoLangCode: string;
  @Prop() siteName: string;
  @Prop() description: string;

  getClass(): string {
    const styleClasses = [
      `ecl-site-footer`,
      this.styleClass
    ];

    if (this.theme === 'ec') {
      styleClasses.push('ecl-site-footer--split-columns');
    }

    return styleClasses.join(' ');
  }

  componentDidLoad() {
    const lists = this.el.querySelectorAll('.ecl-site-footer__list');
    const titles = this.el.querySelectorAll('.ecl-site-footer__title--separator');
    if (titles && titles[0]) {
      titles.forEach((title) => {
        const section = title.parentElement.parentElement;
        title.classList.add(`sc-ecl-footer-${this.theme}`);
        section.insertBefore(title, section.firstElementChild);
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
    const logoPath = this.theme === 'ec' ?
      getAssetPath(`./build/images/${this.theme}/logos/negative/logo-${this.theme}--${this.logoLangCode}.svg`) :
      getAssetPath(`./build/images/${this.theme}/logos/standard-version/positive/logo-${this.theme}--${this.logoLangCode}.svg`);

    return (
      <footer
        class={this.getClass()}
      >
        <div class="ecl-container ecl-site-footer__container">
          <div class="ecl-site-footer__row">
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
                <ecl-link
                  variant="standalone"
                  styleClass={`ecl-site-footer__logo-link sc-ecl-footer-${this.theme}`}
                  ariaLabel={this.logoAriaLabel}
                >
                { this.theme === 'eu' ?
                  <img 
                    alt={this.logoAlt}
                    title={this.logoTitle}
                    class="ecl-site-footer__logo-image-mobile"
                    src={getAssetPath(`./build/images/${this.theme}/logos/condensed-version/positive/logo-${this.theme}--${this.logoLangCode}.svg`)}
                  /> : ''
                }
                  <img 
                    alt={this.logoAlt}
                    title={this.logoTitle}
                    class="ecl-site-footer__logo-image-desktop"
                    src={logoPath}
                  />
                </ecl-link>
              { this.theme === 'ec' ?
                <h2 class="ecl-site-footer__title">{this.siteName}</h2> : ''
              }
                <div class="ecl-site-footer__description">
                  {this.description}
                </div>
              </div>
            </div>
            <div class="ecl-site-footer__column">
              <div class={`ecl-site-footer__section ${this.theme === 'ec'? 'ecl-site-footer__section--separator' : '' }`}>
                <ul class={`ecl-site-footer__list ${this.theme === 'ec' ? 'ecl-site-footer__list--columns' : '' }`}>
                  <slot name="ecl-footer-list-main"></slot>
                </ul>
              </div>
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                   <slot name="ecl-footer-list-bottom-left"></slot>
                </ul>
              </div>
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                   <slot name="ecl-footer-list-bottom-right"></slot>
                </ul>
              </div>
            </div>
            { this.theme === 'eu' ? 
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-right"></slot>
                </ul>
              </div>              
            </div> : '' }
          </div>
        </div>
      </footer>
    )
  }
}

