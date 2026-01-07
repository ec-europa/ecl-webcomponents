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
    const lists = this.el.querySelectorAll('.ecl-site-footer__list');
    const titles = this.el.querySelectorAll('ecl-text[tag="div"]');
    const social = this.el.querySelector('.ecl-social-media-follow__description');
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
    if (social) {
      social.classList.add(`sc-ecl-footer-${this.theme}-${this.theme}`);
    }
  }

  render() {
    const coOwnerLinks = this.coOwnerLinks ? JSON.parse(this.coOwnerLinks) : '';
    const logoPath = getAssetPath(`./build/images/${this.theme}/logos/negative/logo-${this.theme}--${this.logoLangCode}.svg`);

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
                <slot name="ecl-footer-social-follow-info"></slot>
              </div>
            { this.variant === 'core' &&
              <div class="ecl-site-footer__section ecl-site-footer__section--core">
                <ul class="ecl-site-footer__list">
                  <slot name="ecl-footer-list-core"></slot>
                </ul>
              </div>
            }
            { this.variant !== 'core' &&
              <div class="ecl-site-footer__section ecl-site-footer__section--links">
                <div class="ecl-site-footer__row">
                  <div class="ecl-site-footer__section ecl-site-footer__section--contact">
                    <ul class="ecl-site-footer__list">
                      <slot name="ecl-footer-list-contact"></slot>
                    </ul>
                  </div>
                  <div class="ecl-site-footer__section ecl-site-footer__section--about">
                    <ul class="ecl-site-footer__list">
                      <slot name="ecl-footer-list-about"></slot>
                    </ul>
                  </div>
                </div>
                <div class="ecl-site-footer__row">
                  <div class="ecl-site-footer__section ecl-site-footer__section--more">
                    <ul class="ecl-site-footer__list">
                      <slot name="ecl-footer-list-more"></slot>
                    </ul>
                  </div>
                  <div class="ecl-site-footer__section ecl-site-footer__section--related">
                    <ul class="ecl-site-footer__list">
                      <slot name="ecl-footer-list-related"></slot>
                    </ul>
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
                <ul class="ecl-site-footer__list  ecl-site-footer__list--inline">
                   <slot name="ecl-footer-list-bottom-left"></slot>
                </ul>
              </div> 
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

