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
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() loginBlock: boolean = false;
  @Prop() languageBlock: boolean = false;
  @Prop() searchBlock: boolean = true;
  @Prop() logoAlt: string;
  @Prop() logoTitle: string;
  @Prop() searchText: string;
  @Prop() searchPlaceholder: string;
  @Prop() language: string = 'english';
  @Prop() langCode: string = 'en';
  @Prop() loginText: string;
  @Prop() loginLink: string;
  @Prop() euLabel: string;
  @Prop() nonEuLabel: string;
  @Prop() closeLabel: string;
  @Prop() languageTitle: string;
  @Prop() languageId: string;
  @Prop() languageAriaLabel: string;
  @Prop() siteName: string

  getClass(): string {
    const styleClasses = [
      `ecl-site-header`,
      this.styleClass
    ];

    return styleClasses.join(' ');
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
    const logoPath = this.theme === 'ec' ?
      getAssetPath(`./build/images/${this.theme}/logos/positive/logo-${this.theme}--${this.langCode}.svg`) :
      getAssetPath(`./build/images/${this.theme}/logos/standard-version/positive/logo-${this.theme}--${this.langCode}.svg`);

    return (
      <header class="ecl-site-header">
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
              { this.theme === 'eu' ? (
                <ecl-picture
                  styleClass={`ecl-site-header__picture sc-ecl-picture-${this.theme}`}
                  imageAlt={this.logoAlt}
                  imgClass={`ecl-site-header__logo-image-mobile sc-ecl-site-header-${this.theme}`}
                  image={getAssetPath(`./build/images/${this.theme}/logos/condensed-version/positive/logo-${this.theme}--${this.langCode}.svg`)}
                >
                  <slot name="sources"></slot>
                </ecl-picture> ) : ( '' )
              }
                <ecl-picture
                  styleClass={`ecl-site-header__picture sc-ecl-picture-${this.theme}`}
                  imageAlt={this.logoAlt}
                  imgClass={`ecl-site-header__logo-image ecl-site-header__logo-image-desktop sc-ecl-site-header-${this.theme}`}
                  image={logoPath}
                >
                  <slot name="sources"></slot>
                </ecl-picture>
              </ecl-link>
              <div class="ecl-site-header__action">
              { this.loginBlock ?
                <div class="ecl-site-header__login-container">
                  <a 
                    class="ecl-button ecl-button--ghost ecl-site-header__login-toggle"
                    href={this.loginLink}
                  >
                    <ecl-icon
                      style-class={`ecl-site-header__icon sc-ecl-site-header-${this.theme}`}
                      icon="log-in"
                      size="s"
                      theme={this.theme}
                    ></ecl-icon>
                    {this.loginText}
                  </a>
                </div> : ''
              }
              { this.languageBlock ?
                <div class="ecl-site-header__language">
                  <a
                    class="ecl-button ecl-button--ghost ecl-site-header__language-selector"
                    data-ecl-language-selector
                    aria-label={this.languageAriaLabel}
                    aria-controls={this.languageId}
                  >
                    <span class="ecl-site-header__language-icon">
                      <ecl-icon
                        icon="language"
                        size="s"
                        style-class={`ecl-site-header__icon sc-ecl-site-header-${this.theme}`}
                        theme={this.theme}
                      ></ecl-icon>
                      <span class="ecl-site-header__language-code">
                        {this.langCode}
                      </span>
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
                      <button
                        class="ecl-button ecl-button--ghost ecl-site-header__language-close"
                        type="submit"
                        data-ecl-language-list-close
                      >
                        <span class="ecl-button__container">
                          <span class="ecl-u-sr-only" data-ecl-label="true">
                            {this.closeLabel}
                          </span>
                          <ecl-icon
                            slot="icon-after"
                            size="s"
                            style-class={`ecl-button__icon ecl-button__icon--after sc-ecl-site-header-${this.theme}`}
                            data-ecl-icon
                            icon="close-filled"
                            theme={this.theme}
                          ></ecl-icon>
                        </span>
                      </button>
                    </div>
                    <div class="ecl-site-header__language-content">
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
                <div class="ecl-site-header__search-container">
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
                      theme={this.theme}
                    >
                     </ecl-icon>
                    {this.searchText}
                  </a>
                  <ecl-search-form
                    style-class={`ecl-site-header__search sc-ecl-site-header-${this.theme}`}
                    theme={this.theme}
                    width="m"
                    placeholder={this.searchPlaceholder}
                    button-label={this.searchText}
                    button-aria-label={this.searchText}
                  ></ecl-search-form>
                </div> : <slot name="search"></slot>
              }
              </div>
            </div>
          </div>
        </div>
      { this.siteName ?
        <div class="ecl-site-header__banner">
          <div class="ecl-container">
            <div class="ecl-site-header__site-name">{this.siteName}</div>
          </div>
        </div> : ''
      }
        <slot name="menu"></slot>
      </header>
    );
  }
}
