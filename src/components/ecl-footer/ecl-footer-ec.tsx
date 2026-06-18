import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";

@Component({
  tag: 'ecl-footer-ec',
  styleUrls: {
    ec: './build/styles/ecl-footer-ec.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclFooterEc {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() logoAlt: string;
  @Prop() logoTitle: string;
  @Prop() logoLink: string;
  @Prop() logoLangCode: string;
  @Prop() variant: string;
  @Prop() description: string;
  @Prop() descriptionName: string;
  @Prop() siteName: string;
  @Prop() siteLink: string;
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
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const social = this.el.querySelector('.ecl-social-media-follow__description');

    if (social) {
      social.classList.add(`sc-ecl-footer-${this.theme}-${this.theme}`);
    }

    const titles = this.el.querySelectorAll('ecl-text[tag="div"]');

    if (titles && titles[0]) {
      titles.forEach((title) => {
        title.firstElementChild.classList.add(`sc-ecl-footer-${this.theme}-${this.theme}`);
      });
    }
  }

  render() {
    const coOwnerLinks = this.coOwnerLinks ? JSON.parse(this.coOwnerLinks) : '';
    const logoPath = getAssetPath(`./build/images/${this.theme}/logos/negative/logo-${this.theme}--${this.logoLangCode}.svg`);
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
                  style-class={`ecl-site-footer__action-button ecl-button--m sc-ecl-footer-ec-${this.theme}`}
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
            <div class="ecl-site-footer__row ecl-site-footer__row--specific">
              <div class="ecl-site-footer__section ecl-site-footer__section--site-info">
              { this.variant === 'core' &&
                <ecl-link
                  path={this.logoLink}
                  theme={this.theme}
                  variant="standalone"
                  styleClass={`ecl-site-footer__logo-link sc-ecl-footer-${this.theme}-${this.theme}`}
                >
                  <ecl-picture
                    theme={this.theme}
                    imageAlt={this.logoAlt}
                    imgClass={`sc-ecl-footer-${this.theme}-${this.theme} ecl-site-footer__logo-image`}
                    styleClass={`ecl-site-footer__picture sc-ecl-site-footer-${this.theme}-${this.theme}`}
                    image={logoPath}
                  >   
                    <source
                      srcSet={logoPath}
                      media="(min-width: 996px)"
                    ></source>
                    <slot name="sources"></slot>
                  </ecl-picture>
                </ecl-link>
              }

              { this.variant !== 'core' &&
                <div class="ecl-site-footer__title">
                  <ecl-link
                    inverted
                    path={this.siteLink}
                  >
                    {this.siteName}
                  </ecl-link>
                </div>
              }
                <div class="ecl-site-footer__description">
                  {this.description}
                  {this.descriptionName &&
                    <span class="ecl-site-footer__description-name">
                      {this.descriptionName}
                    </span>
                  }
                </div>
              { actionButton &&
                <ecl-link
                  style-class={`ecl-site-footer__action-button ecl-button--m sc-ecl-footer-ec-${this.theme}`}
                  path={feedbackButton.path}
                  variant="secondary-inverted"
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
                <slot name="ecl-footer-social-follow-info"></slot>
              </div>
            { this.variant === 'core' &&
              <div class="ecl-site-footer__section ecl-site-footer__section--core">
                <div 
                  class="ecl-site-footer__list"
                  role="list"
                >
                  <slot name="ecl-footer-list-core"></slot>
                </div>
              </div>
            }
            { this.variant !== 'core' &&
              <div class="ecl-site-footer__section ecl-site-footer__section--links">
                <div class="ecl-site-footer__row">
                  <div class="ecl-site-footer__section ecl-site-footer__section--contact">
                    <div 
                      class="ecl-site-footer__list"
                      role="list"
                    >
                      <slot name="ecl-footer-list-contact"></slot>
                    </div>
                  </div>
                  <div class="ecl-site-footer__section ecl-site-footer__section--about">
                    <div 
                      class="ecl-site-footer__list"
                      role="list"
                    >
                      <slot name="ecl-footer-list-about"></slot>
                    </div>
                  </div>
                </div>
                <div class="ecl-site-footer__row">
                  <div class="ecl-site-footer__section ecl-site-footer__section--more">
                    <div
                      class="ecl-site-footer__list"
                      role="list"
                    >
                      <slot name="ecl-footer-list-more"></slot>
                    </div>
                  </div>
                  <div class="ecl-site-footer__section ecl-site-footer__section--related">
                    <div
                      class="ecl-site-footer__list"
                      role="list"
                    >
                      <slot name="ecl-footer-list-related"></slot>
                    </div>
                  </div>
                </div>
              </div>
            }
            </div>
            <div class="ecl-site-footer__row ecl-site-footer__row--common">             
              <div class="ecl-site-footer__section ecl-site-footer__section--common">
              { this.variant !== 'core' &&
                <ecl-link
                  path={this.logoLink}
                  theme={this.theme}
                  variant="standalone"
                  inverted
                  styleClass={`ecl-site-footer__logo-link sc-ecl-footer-${this.theme}-${this.theme}`}
                >
                  <ecl-picture
                    theme={this.theme}
                    imageAlt={this.logoAlt}
                    imgClass={`sc-ecl-footer-${this.theme}-${this.theme} ecl-site-footer__logo-image`}
                    styleClass={`ecl-site-footer__picture sc-ecl-site-footer-${this.theme}-${this.theme}`}
                    image={logoPath}
                  >   
                    <slot name="sources"></slot>
                  </ecl-picture>
                </ecl-link>
              }
                <div class="ecl-site-footer__extra-links-container">
                  <slot name="ecl-footer-social-follow"></slot>
                </div>
                <div
                  class="ecl-site-footer__list  ecl-site-footer__list--inline"
                  role="list"
                >
                   <slot name="ecl-footer-list-bottom-left"></slot>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

