import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";

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

    if (this.theme === 'ec' && this.variant === 'core') {
      styleClasses.push('ecl-site-footer--split-columns');
    }

    return styleClasses.join(' ');
  }

  componentDidLoad() {
    const lists = this.el.querySelectorAll('.ecl-site-footer__list');
    const titles = this.el.querySelectorAll('ecl-text[tag="h2"]');
    if (titles && titles[0]) {
      titles.forEach((title) => {
        const section = title.parentElement.parentElement;
        title.firstElementChild.classList.add(`sc-ecl-footer-${this.theme}`);
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
    const logoPath = this.theme === 'ec' ?
      getAssetPath(`./build/images/${this.theme}/logos/negative/logo-${this.theme}--${this.logoLangCode}.svg`) :
      getAssetPath(`./build/images/${this.theme}/logos/standard-version/positive/logo-${this.theme}--${this.logoLangCode}.svg`);

    return (
      <footer
        class={this.getClass()}
      >
        <div class="ecl-container ecl-site-footer__container">
        { this.theme === 'eu' && this.variant === 'harmonised' ?
          <div class="ecl-site-footer__row">
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section  ecl-site-footer__section--site-info">
                <h2 class="ecl-site-footer__title">{this.siteName}</h2>
                <div class="ecl-site-footer__description">
                  {this.description}
                </div>
                <ul class={`ecl-site-footer__list`}>
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
          </div> : ''
        }
          <div class="ecl-site-footer__row">
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
              { this.variant === 'core' || this.variant === 'harmonised' ? 
                <ecl-link
                  path={this.logoLink}
                  theme={this.theme}
                  variant="standalone"
                  styleClass={`ecl-site-footer__logo-link sc-ecl-footer-${this.theme}`}
                  ariaLabel={this.logoAriaLabel}
                >
                  <ecl-picture
                    theme={this.theme}
                    imageAlt={this.logoAlt}
                    imgClass={`sc-ecl-footer-${this.theme} ecl-site-footer__logo-image`}
                    styleClass={`ecl-site-footer__picture sc-ecl-site-footer-${this.theme}`}
                    image={this.theme === 'ec' ? 
                      logoPath : 
                      getAssetPath(`./build/images/${this.theme}/logos/condensed-version/positive/logo-${this.theme}--${this.logoLangCode}.svg`)
                    }
                  >   
                    <source
                      srcSet={logoPath}
                      media="(min-width: 996px)"
                    ></source>
                    <slot name="sources"></slot>
                  </ecl-picture>
                </ecl-link> : ''
              }
              { this.theme === 'ec' ?
                <h2 class="ecl-site-footer__title">{this.siteName}</h2> : ''
              }
              { this.theme === 'ec' || this.variant === 'core' ? 
                <div class="ecl-site-footer__description">
                  <slot name="description"></slot>
                </div> :
                <div class="ecl-site-footer__description">
                  <ul class="ecl-site-footer__list">
                    <slot name="description"></slot>
                  </ul>
                </div>
              }
              { this.theme === 'ec' && this.variant !== 'core' ?
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-info"></slot>
                </ul> : '' 
              }
              </div>
            </div>
            <div class="ecl-site-footer__column">
              <div class={`ecl-site-footer__section ${this.theme === 'ec' && this.variant === 'core' ? 'ecl-site-footer__section--separator' : '' }`}>
                <ul class={`ecl-site-footer__list ${this.theme === 'ec' && this.variant === 'core' ? 'ecl-site-footer__list--columns' : '' }`}>
                  <slot name="ecl-footer-list-main"></slot>
                </ul>
              </div>
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                   <slot name="ecl-footer-list-bottom-left"></slot>
                </ul>
              </div> 
            { (this.variant === 'standardised' || this.variant === 'harmonised') ?
              <div class="ecl-site-footer__section">
                <ul class={`ecl-site-footer__list ${this.theme === 'ec' ? 'ecl-site-footer__list--inline' : '' }`}>
                  <slot name="ecl-footer-list-main-bottom"></slot>
                </ul>
              </div> : ''
            }
            { this.variant === 'core' ?
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                   <slot name="ecl-footer-list-bottom-right"></slot>
                </ul>
              </div> : ''
            }
            </div> 
            { this.theme === 'ec' && (this.variant === 'standardised' || this.variant === 'harmonised') ?
              <div class="ecl-site-footer__column">
                <div class="ecl-site-footer__section">
                  <ul class={`ecl-site-footer__list`}>
                    <slot name="ecl-footer-list-main-right"></slot>
                  </ul>
                </div>
                <div class="ecl-site-footer__section">
                  <ul class="ecl-site-footer__list">
                    <slot name="ecl-footer-list-main-right-bottom"></slot>
                  </ul>
                </div>
              </div> : ''
            }
            
          { this.theme === 'eu' ? 
            <div class="ecl-site-footer__column">
              <div class="ecl-site-footer__section">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-right"></slot>
                </ul>
              </div>              
            </div> : ''
          }
          </div>
        { this.theme === 'ec' && (this.variant === 'standardised' || this.variant === 'harmonised') ?
            <div class="ecl-site-footer__row">
              <div class="ecl-site-footer__column">
                <div class="ecl-site-footer__section ecl-site-footer-section--condensed">
                  <div class="ecl-site-footer__content">More information on: </div>
                  <ul class="ecl-site-footer__list">
                    <slot name="ecl-footer-list-middle"></slot>
                  </ul>
                </div>
              </div>
            </div> : ''
          }
          { this.theme === 'ec' && (this.variant === 'standardised' || this.variant === 'harmonised') ? (
              <div class="ecl-site-footer__row">
                <div class="ecl-site-footer__column">
                  <div class="ecl-site-footer__section">
                    <ecl-link
                      theme={this.theme}
                      path={this.logoLink}
                      variant="standalone"
                      styleClass={`ecl-site-footer__logo-link sc-ecl-footer-${this.theme}`}
                      ariaLabel={this.logoAriaLabel}
                    >
                      <ecl-picture
                        theme={this.theme}
                        imageAlt={this.logoAlt}
                        imgClass={`ecl-site-footer__logo-image sc-ecl-site-footer-${this.theme}`}
                        image={logoPath}
                        styleClass={`ecl-site-footer__picture sc-ecl-site-footer-${this.theme}`}
                      >
                        <slot name="sources"></slot>
                      </ecl-picture>
                    </ecl-link>
                  </div>
                </div>
                <div class="ecl-site-footer__column">
                  <div class="ecl-site-footer__section ecl-site-footer__section--split-list">
                    <ul class="ecl-site-footer__list">
                      <slot name="ecl-footer-list-bottom-center"></slot>
                    </ul>
                  </div>
                </div>
                <div class="ecl-site-footer__column">
                  <div class="ecl-site-footer__section ecl-site-footer__section--split-list">
                    <ul class="ecl-site-footer__list">
                      <slot name="ecl-footer-list-bottom-right"></slot>
                    </ul>
                  </div>
                </div> 
              </div> ) : ( '' )
            }
        </div>
      </footer>
    )
  }
}

