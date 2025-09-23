import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from '../../utils/assetPath';
declare const ECL: any;

@Component({
  tag: 'ecl-site-header',
  styleUrls: {
    ec: './build/styles/ecl-site-header-ec.css',
    eu: './build/styles/ecl-site-header-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build']
})

export class EclSiteHeader {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() loginBlock: boolean = false;
  @Prop() languageBlock: boolean = false;
  @Prop() searchBlock: boolean = true;
  @Prop() logo: string;
  @Prop() logoAlt: string;
  @Prop() logoTitle: string;
  @Prop() logoSize: string = 'l';
  @Prop() searchText: string;
  @Prop() searchFormId: string = `ecl-site-header-search-form-${Math.random().toString(36).slice(2, 10)}`;
  @Prop() searchPlaceholder: string;
  @Prop() language: string;
  @Prop() langCode: string;
  @Prop() loginText: string;
  @Prop() loggedInText: string;
  @Prop() loginLink: string;
  @Prop() logged: boolean = false;
  @Prop() logoutLink: string;
  @Prop() logoutText: string;
  @Prop() euLabel: string;
  @Prop() nonEuLabel: string;
  @Prop() closeLabel: string;
  @Prop() languageTitle: string;
  @Prop() languageId: string;
  @Prop() languageAriaLabel: string;
  @Prop() siteName: string;
  @Prop() bannerTop: string;
  @Prop() bannerTopLink: string;
  @Prop() siteNameMobileOnly: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-site-header`,
      `ecl-site-header-with-logo-${this.logoSize}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (this.el.querySelector('.ecl-site-header__logo-link')) {
      const logo = this.el.querySelector('.ecl-site-header__logo-link');
      const headerTop = logo.parentElement.parentElement;
      headerTop.insertBefore(logo, headerTop.firstElementChild);
      //logo.parentElement.remove();
    }
    if (this.el.querySelector('.ecl-search-form')) {
      this.el.querySelector('.ecl-search-form').setAttribute('data-ecl-search-form', '');
    }
    if (this.el.querySelector('.ecl-menu')) {
      this.el.firstElementChild.classList.add('ecl-site-header--has-menu');
      const open = this.el.querySelector('.ecl-menu__open');
      open.classList.add(`sc-ecl-site-header-${this.theme}`);
    }
    if (this.el.querySelector('.ecl-mega-menu')) {
      this.el.firstElementChild.classList.add('ecl-site-header--has-mega-menu');
      const open = this.el.querySelector('.ecl-mega-menu__open');
      open.classList.add(`sc-ecl-site-header-${this.theme}`);
    }
    if (this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-site-header-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const siteHeader = new ECL.SiteHeader(this.el.firstElementChild);
        siteHeader.init();
      };

      document.body.appendChild(script);
    }
  }

  render() {
    const logoPath = this.logo
      ? this.logo
      : this.theme === 'ec'
        ? getAssetPath(`./build/images/${this.theme}/logos/logo-${this.theme}--mute.svg`)
        : getAssetPath(`./build/images/${this.theme}/logos/condensed-version/positive/logo-${this.theme}--${this.langCode}.svg`);

    return (
      <header class={this.getClass()}>
        <div class="ecl-site-header__inner">
          <div class="ecl-site-header__header">
            <div class="ecl-site-header__container ecl-container">
              <div
                class="ecl-site-header__top"
                data-ecl-site-header-top
              >
                <ecl-link
                  variant="standalone"
                  styleClass={`ecl-site-header__logo-link sc-ecl-site-header-${this.theme}`}
                >
                  <ecl-picture
                    styleClass={`ecl-site-header__picture sc-ecl-picture-${this.theme}`}
                    imageAlt={this.logoAlt}
                    imgClass={`ecl-site-header__logo-image ecl-site-header__logo-image--${this.logoSize} sc-ecl-site-header-${this.theme}`}
                    image={logoPath}
                  >
                    {!this.logo && (
                      this.theme === 'eu' ? (
                        <source
                          srcSet={getAssetPath(`./build/images/${this.theme}/logos/standard-version/positive/logo-${this.theme}--${this.langCode}.svg`)}
                          media="(min-width: 996px)"
                        />
                      ) : this.theme === 'ec' ? (
                        <source
                          srcSet={getAssetPath(`./build/images/${this.theme}/logos/positive/logo-${this.theme}--${this.langCode}.svg`)}
                          media="(min-width: 415px)"
                        />
                      ) : null
                    )}
                    <slot name="logoSources"></slot>
                  </ecl-picture>
                </ecl-link>
                <div class="ecl-site-header__action">
                  <div class="ecl-site-header__login-container">
                  { this.loginBlock &&
                    <a
                      class={`ecl-button ecl-button--tertiary ecl-site-header__login-toggle sc-ecl-site-header-${this.theme}`}
                      data-ecl-login-toggle
                      aria-expanded="false"
                      href={this.loginLink}
                    >
                      <ecl-icon
                        icon={this.logged ? 'logged-in' : 'log-in'}
                        size="m"
                        as-image
                        slot="icon-before"
                        style-class={`ecl-site-header__icon sc-ecl-site-header-${this.theme}`}
                      >
                      </ecl-icon>
                      {this.logged ? this.loggedInText : this.loginText }
                    </a>
                  }
                  { this.loginBlock &&
                    <div
                      class="ecl-site-header__login-box"
                      data-ecl-login-box
                    >
                      <p class="ecl-site-header__login-description">
                        <slot name="ecl-site-header-login-description"></slot>
                      </p>
                      <hr class="ecl-site-header__login-separator" />
                      <ecl-link
                        variant="standalone"
                        path={this.logoutLink}
                      >
                        {this.logoutText}
                      </ecl-link> 
                    </div>
                  }
                  </div>
                { this.languageBlock ?
                  <div class="ecl-site-header__language">
                    <a
                      class="ecl-button ecl-button--tertiary ecl-site-header__language-selector"
                      data-ecl-language-selector
                      aria-label={this.languageAriaLabel}
                      aria-controls={this.languageId}
                      role="button"
                    >
                      <span class="ecl-site-header__language-icon">
                        <ecl-icon
                          icon="global"
                          size="s"
                          style-class={`ecl-site-header__icon sc-ecl-site-header-${this.theme}`}
                        ></ecl-icon>
                        {this.language}
                      </span>
                    </a>
                    <div
                      class="ecl-site-header__language-container"
                      id={this.languageId}
                      data-ecl-language-list-overlay
                      aria-labelledby="ecl-site-header__language-title"
                      role="dialog"
                      aria-modal="true"
                      hidden
                    >
                      <div class="ecl-site-header__language-header">
                        <div
                          class="ecl-site-header__language-title"
                          id="ecl-site-header__language-title"
                        >
                          {this.languageTitle}
                        </div>
                        <ecl-button
                          style-class={`ecl-site-header__language-close sc-ecl-site-header-${this.theme}`}
                          type="submit"
                          hide-label
                          variant="tertiary"
                          data-ecl-language-list-close
                        >
                          {this.closeLabel}
                          <ecl-icon
                            slot="icon-after"
                            size="s"
                            style-class={`sc-ecl-site-header-${this.theme}`}
                            data-ecl-icon
                            icon="close"
                          ></ecl-icon>
                        </ecl-button>
                      </div>
                      <div
                        class="ecl-site-header__language-content"
                        data-ecl-language-list-content
                      >
                        <div
                          class="ecl-site-header__language-category"
                          data-ecl-language-list-eu
                        >
                          <div class="ecl-site-header__language-category-title">
                            {this.euLabel}
                          </div>
                          <ul class="ecl-site-header__language-list">
                            <slot name="eu-category"></slot>
                          </ul>
                        </div>
                      { this.nonEuLabel ?
                        <div 
                          class="ecl-site-header__language-category"
                          data-ecl-language-list-non-eu
                        >
                          <div class="ecl-site-header__language-category-title">
                            {this.nonEuLabel}
                          </div>
                          <ul class="ecl-site-header__language-list">
                            <slot name="non-eu-category"></slot>
                          </ul>
                        </div> : ''
                      }
                      </div>
                    </div>
                  </div> : ''
                }
                { this.searchBlock ?
                  <div
                    class="ecl-site-header__search-container"
                    role="search"
                  >
                    <a
                      class="ecl-button ecl-button--ghost ecl-site-header__search-toggle"
                      data-ecl-search-toggle
                      aria-controls="search-form-id"
                      aria-expanded="false"
                    >
                      <ecl-icon
                        icon="search"
                        style-class={`ecl-icon ecl-icon--s ecl-site-header__icon sc-ecl-site-header-${this.theme}`}
                        size="s"
                      >
                       </ecl-icon>
                      {this.searchText}
                    </a>
                    <ecl-search-form
                      style-class={`ecl-site-header__search sc-ecl-site-header-${this.theme}`}
                      theme={this.theme}
                      input-id={this.searchFormId}
                      placeholder={this.searchPlaceholder}
                      button-label={this.searchText}
                      button-aria-label={this.searchText}
                      button-class={`sc-ecl-site-header-${this.theme}`}
                    ></ecl-search-form>
                  </div> : <slot name="search"></slot>
                }
                </div>
              </div>
            </div>
          </div>
        { this.bannerTop &&
          <div class="ecl-container">
            <div class="ecl-site-header__banner-top">
              <ecl-link
                variant="standalone"
                path={this.bannerTopLink}
              >
                { this.bannerTop }
              </ecl-link>
            </div>
          </div>
        }
        { this.siteName ?
          <div class={`ecl-site-header__banner ${this.siteNameMobileOnly ? 'ecl-site-header__site-name--mobile-only' : '' }`}>
            <div class="ecl-container">
              <div class="ecl-site-header__site-name">{this.siteName}</div>
            </div>
          </div> : ''
        }
        </div>
        <slot name="menu"></slot>
      </header>
    );
  }
}
