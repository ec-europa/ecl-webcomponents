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
  @Prop() siteNameLink: string;
  @Prop() variant: string;
  @Prop() description: string;
  @Prop() descriptionName: string;
  @Prop() coOwnerTitle: string;
  @Prop() coOwnerLinks: string;
  @Prop() actionButton: string = '';
  @Prop() feedbackButton: string = '';
  @Prop() feedbackButtonDescription: string = '';

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
    const titles = this.el.querySelectorAll('ecl-text[tag="div"]');
    if (titles && titles[0]) {
      titles.forEach((title) => {
        title.firstElementChild.classList.add(`sc-ecl-footer-${this.theme}-${this.theme}`);
      });
    }
  }

  render() {
    const logoPath = getAssetPath(`./build/images/${this.theme}/logos/standard-version/positive/logo-${this.theme}--${this.logoLangCode}.svg`);
    const coOwnerLinks = this.coOwnerLinks ? JSON.parse(this.coOwnerLinks) : '';
    const feedbackButton = this.feedbackButton ? JSON.parse(this.feedbackButton) : null;
    const actionButton = this.actionButton ? JSON.parse(this.actionButton) : null;

    return (
      <footer
        class={this.getClass()}
      >
        { (this.coOwnerTitle || this.coOwnerLinks) &&
        <div class="ecl-site-footer__co-owner">
          <div class="ecl-container ecl-site-footer__co-owner-container">
          { this.coOwnerTitle &&
            <div class="ecl-site-footer__co-owner-title">{this.coOwnerTitle}</div>
          }
          { coOwnerLinks &&
            <ul class="ecl-site-footer__co-owner-list">
              { coOwnerLinks.map((link, i) => {
                  let liClass = 'ecl-site-footer__co-owner-item';
                  if (i === 0) {
                    liClass += ' is-first';
                  }
                  return (
                    <li class={liClass}>
                      <ecl-link
                        path={link.path}
                        styleClass={`ecl-site-footer__co-owner-link sc-ecl-footer-${this.theme}-${this.theme}`}
                      >
                        {link.label}
                      </ecl-link>
                    </li>
                  )}
                )
              }
            </ul>
          }
          </div>
        </div>
        }
        <div class="ecl-site-footer__main">
          <div class="ecl-container ecl-site-footer__container">
          { feedbackButton &&
            <div class="ecl-site-footer__row">
              <div class="ecl-site-footer__section ecl-site-footer__section--feedback">
                { this.feedbackButtonDescription &&
                <div class="ecl-site-footer__description">
                  {this.feedbackButtonDescription}
                </div>
                }
                <ecl-link
                  style-class={`ecl-site-footer__action-button ecl-button--m sc-ecl-footer-eu-${this.theme}`}
                  path={feedbackButton.path}
                  variant="primary-highlight-inverted"
                >
                  {feedbackButton.label}
                  <ecl-icon
                    slot="icon-after"
                    icon="arrow-up-right"
                    family="phosphor"
                  >
                  </ecl-icon>
                </ecl-link>
              </div>
            </div>
          }
          {this.variant === 'harmonised' &&
            <div class="ecl-site-footer__row">
              <div class="ecl-site-footer__column">
                <div class="ecl-site-footer__section  ecl-site-footer__section--site-info">
                  <h2 class="ecl-site-footer__title">
                { !this.siteNameLink ? this.siteName : 
                    <ecl-link
                      path={this.siteNameLink}
                      style-class={`ecl-site-footer__title-link sc-ecl-footer-eu-${this.theme}`}
                    >
                      {this.siteName}
                    </ecl-link>
                }
                  </h2>
                  <div class="ecl-site-footer__description">
                    {this.description}
                  {this.descriptionName &&
                    <span class="ecl-site-footer__description-name">
                      {` ${this.descriptionName}`}
                    </span>
                  }
                  </div>
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-list-info"></slot>
                  </div>
                  { actionButton &&
                    <ecl-link
                      style-class={`ecl-site-footer__action-button ecl-button--m sc-ecl-footer-eu-${this.theme}`}
                      path={feedbackButton.path}
                      variant="secondary-neutral"
                    >
                      {actionButton.label}
                      <ecl-icon
                        slot="icon-after"
                        icon="envelope-simple"
                        family="phosphor"
                      >
                      </ecl-icon>
                    </ecl-link>
                  }
                </div>
              </div>
              <div class="ecl-site-footer__column">
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-list-top-middle"></slot>
                  </div>
                </div>
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-list-top-middle-bottom"></slot>
                  </div>
                </div>
              </div>
              <div class="ecl-site-footer__column">
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-list-top-right"></slot>
                  </div>
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
                { (this.variant === 'core' && actionButton) &&
                  <ecl-link
                    style-class={`ecl-site-footer__action-button ecl-button--m sc-ecl-footer-eu-${this.theme}`}
                    path={feedbackButton.path}
                    variant="secondary-neutral"
                  >
                    {actionButton.label}
                    <ecl-icon
                      slot="icon-after"
                      icon="envelope-simple"
                      family="phosphor"
                    >
                    </ecl-icon>
                  </ecl-link>
                }
                { this.variant === 'harmonised' &&
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-logo-info"></slot>
                  </div>
                }
                </div>
              </div>
              <div class="ecl-site-footer__column">
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-list-main"></slot>
                  </div>
                </div>
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                     <slot name="ecl-footer-list-bottom-left"></slot>
                  </div>
                </div> 
              { (this.variant === 'harmonised') &&
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-list-main-bottom"></slot>
                  </div>
                </div>
              }
              { this.variant === 'core' &&
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                     <slot name="ecl-footer-list-bottom-right"></slot>
                  </div>
                </div>
              }
              </div> 
              <div class="ecl-site-footer__column">
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-list-right-top"></slot>
                  </div>
                </div>   
                <div class="ecl-site-footer__section">
                  <div
                    class="ecl-site-footer__list"
                    role="list"
                  >
                    <slot name="ecl-footer-list-right"></slot>
                  </div>
                </div>              
              </div> 
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

