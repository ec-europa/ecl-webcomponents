import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";

@Component({
  tag: 'ecl-splash-page',
  styleUrls: {
    ec: './build/styles/ecl-splash-page-ec.css',
    eu: './build/styles/ecl-splash-page-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclSplashPage {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() elTitle: string;
  @Prop() language: string;
  @Prop() langCode: string;
  @Prop() logo: string;
  @Prop() logoLink: string;
  @Prop() logoAlt: string;
  @Prop() euLabel: string;
  @Prop() nonEuLabel: string;

  getClass(): string {
    const classes = [
      `ecl-splash-page`,
      this.styleClass
    ];

    return classes.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const items = this.el.querySelectorAll('[slot="eu-category"]');
    const container = this.el.querySelector('.ecl-splash-page__language-container');

    if (items.length === 1) {
      container.classList.add('ecl-splash-page__language-single-item-category');
    }
    if (items.length === 2) {
      container.classList.add('ecl-splash-page__language-single-item-category');
    }
    if (items.length === 4) {
      container.classList.add('ecl-splash-page__language-four-item-category');
    }
  }

  render() {
    const logoPath = this.logo
      ? this.logo
      : this.theme === 'ec'
        ? getAssetPath(`./build/images/${this.theme}/logos/logo-${this.theme}--mute.svg`)
        : getAssetPath(`./build/images/${this.theme}/logos/condensed-version/positive/logo-${this.theme}--${this.langCode}.svg`);
    
    return (
      <div class={this.getClass()}>
        <div class="ecl-splash-page__logo-container">
          <ecl-grid container styleClass={`sc-ecl-splash-page-${this.theme}`}>
            <ecl-link
              styleClass={`ecl-splash-page__logo-link sc-ecl-splash-page-${this.theme}`}
              path={this.logoLink}
              variant="standalone"
            >
              <ecl-picture
                styleClass={`ecl-splash-page__picture sc-ecl-picture-${this.theme}`}
                imageAlt={this.logoAlt}
                imgClass={`ecl-splash-page__logo-image sc-ecl-splash-page-${this.theme}`}
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
          </ecl-grid>
        </div>
        <ecl-grid
          container
          styleClass={`sc-ecl-splash-page-${this.theme} ecl-splash-page__language-container`}
        >
        { this.elTitle &&
          <h1 class="ecl-splash-page__language-title">{ this.elTitle }</h1>
        }
          <div class="ecl-splash-page__language-content">
            <div class="ecl-splash-page__language-category">
            { this.euLabel && 
              <h2 class="ecl-splash-page__language-category-title">
                {this.euLabel}
              </h2>
            }
              <ul class="ecl-splash-page__language-list">
                <slot name="eu-category"></slot>
              </ul>
            </div>
            <div class="ecl-splash-page__language-category">
            { this.nonEuLabel && 
              <h2 class="ecl-splash-page__language-category-title">
                {this.nonEuLabel}
              </h2>
            }
              <ul class="ecl-splash-page__language-list">
                <slot name="non-eu-category"></slot>
              </ul>
            </div>
          </div>
        </ecl-grid>
      </div>
    )
  }
}
