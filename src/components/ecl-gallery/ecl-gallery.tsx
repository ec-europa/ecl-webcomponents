import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-gallery',
  styleUrls: {
    ec: './build/styles/ecl-gallery-ec.css',
    eu: './build/styles/ecl-gallery-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclGallery {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() eclScript: boolean = false;
  @Prop() slidesNumber: number;
  @Prop() counterLabel: string ;
  @Prop() counterSeparator: string;
  @Prop() description: string;
  @Prop() meta: string;
  @Prop() nextLabel: string;
  @Prop() prevLabel: string;
  @Prop() closeLabel: string;
  @Prop() shareLabel: string;
  @Prop() footerLinkPath: string;
  @Prop() footerLinkLabel: string;
  @Prop() visibleItems: number = 8;
  @Prop() fullWidth: boolean = false;
  @Prop() viewAllLabel: string;
  @Prop() viewAllExpandedLabel: string;
  @Prop() expandable: boolean = true;
  @Prop() fullScreenLabel: string = '';
  @Prop() noOverlay: boolean = false;
  @Prop() ariaLabel: string;

  getClass(): string {
    const styleClasses = [
      `ecl-gallery`,
      this.styleClass
    ];

    if (this.fullWidth) {
      styleClasses.push('ecl-gallery--full-width');
    }

    return styleClasses.join(' ');
  }

  componentDidRender() {
    const items = this.el.querySelectorAll('.ecl-gallery__item');
    this.el.querySelector('.ecl-gallery__list').innerHTML = '';
    this.el.querySelector('.ecl-gallery__list').append(...items);

    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-gallery-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const gallery = new ECL.Gallery(this.el.firstElementChild);
        gallery.init();
      };
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <section
        class={this.getClass()}
        data-ecl-gallery
        data-ecl-gallery-visible-items={this.visibleItems}
        {...!this.expandable && ({ 'data-ecl-gallery-not-expandable' : true })}
        {...this.noOverlay && ({ 'data-ecl-gallery-no-overlay' : true })}
      >
        <ul class="ecl-gallery__list">
          <slot></slot>
        </ul>
        <div class="ecl-gallery__footer">
        {this.expandable ? (
          <div class="ecl-gallery__info">
            <strong class="ecl-gallery__info-total" data-ecl-gallery-count>0</strong>
            {this.counterLabel},
            {this.viewAllLabel || this.viewAllExpandedLabel ? (
              <ecl-button
                styleClass={`ecl-gallery__view-all sc-ecl-gallery-${this.theme}`}
                variant="ghost"
                data-ecl-gallery-collapsed-label={this.viewAllLabel}
                data-ecl-gallery-expanded-label={this.viewAllExpandedLabel}
                data-ecl-gallery-all
              >
                {this.viewAllLabel}
              </ecl-button>
            ) : null}
          </div>
        ) : null}
          <hr class="ecl-gallery__footer-divider" />
        {this.footerLinkPath && this.footerLinkLabel ? (
          <div class="ecl-gallery__footer-link">
            <ecl-link
              path={this.footerLinkPath}
              variant="standalone"
              styleClass={`sc-ecl-gallery-${this.theme}`}
            >
              {this.footerLinkLabel} 
            </ecl-link>
          </div>
          ) : null
        }
        </div>
        <dialog
          class="ecl-gallery__overlay"
          data-ecl-gallery-overlay
          aria-label={this.ariaLabel || null}
        >
          <header
            class="ecl-gallery__close"
            data-ecl-gallery-overlay-header
          >
            <ecl-button
              theme={this.theme}
              style-class={`ecl-gallery__close-button sc-ecl-gallery-${this.theme}`}
              variant="ghost"
              data-ecl-gallery-close
            >
              {this.closeLabel}
              <ecl-icon
                theme={this.theme}
                style-class={`sc-ecl-gallery-${this.theme}`}
                icon="close-filled"
                size="s"
                slot="icon-after"
              ></ecl-icon>
            </ecl-button>
          </header>
          <section class="ecl-gallery__slider">
            <div
              class="ecl-gallery__slider-media-container"
              data-ecl-gallery-overlay-media
            ></div>
          </section>
          <footer
            class="ecl-gallery__detail"
            data-ecl-gallery-overlay-footer
          >
            <div class="ecl-container">
             <div class="ecl-gallery__detail-actions">
                <ecl-link
                  theme={this.theme}
                  style-class={`ecl-gallery__download sc-ecl-gallery-${this.theme}`}
                  data-ecl-gallery-overlay-download
                  variant="standalone"
                  path=""
                  target="blank"
                >
                  {this.fullScreenLabel}
                  <ecl-icon
                    theme={this.theme}
                    icon="fullscreen"
                    size="fluid"
                    slot="icon-after"
                  ></ecl-icon>

                </ecl-link>
              { this.shareLabel ? 
                <ecl-link
                  theme={this.theme}
                  style-class={`ecl-gallery__share sc-ecl-gallery-${this.theme}`}
                  data-ecl-gallery-overlay-share
                  variant="standalone"
                  path=""
                >
                  {this.shareLabel}
                  <ecl-icon
                    theme={this.theme}
                    icon="share"
                    size="fluid"
                    slot="icon-after"
                  ></ecl-icon>
                </ecl-link> : ''
              }
              </div>
              <div
                class="ecl-gallery__detail-description"
                data-ecl-gallery-overlay-description
              >
              </div>
              <div
                class="ecl-gallery__detail-meta"
                data-ecl-gallery-overlay-meta
              >
              </div>    
              <div class="ecl-gallery__pager">
                <ecl-button
                  theme={this.theme}
                  style-class={`ecl-gallery__slider-previous sc-ecl-gallery-${this.theme}`}
                  data-ecl-gallery-overlay-previous
                  variant="ghost"
                  type="button"
                  hide-label
                >
                  <ecl-icon
                    theme={this.theme}
                    style-class={`sc-ecl-gallery-${this.theme}`}
                    slot="icon-before"
                    size="s"
                    transform="rotate-270"
                    icon="corner-arrow"
                  ></ecl-icon>
                  {this.prevLabel}
                </ecl-button>
                <div class="ecl-gallery__detail-counter">
                  <span data-ecl-gallery-overlay-counter-current>0</span>
                    {` ${this.counterSeparator} `}
                  <span data-ecl-gallery-overlay-counter-max>0</span>
                </div>
                <ecl-button
                  theme={this.theme}
                  style-class={`ecl-gallery__slider-next sc-ecl-gallery-${this.theme}`}
                  data-ecl-gallery-overlay-next
                  variant="ghost"
                  type="button"
                  hide-label
                >
                  {this.nextLabel}
                  <ecl-icon
                    theme={this.theme}
                    style-class={`sc-ecl-gallery-${this.theme}`}
                    slot="icon-after"
                    size="s"
                    transform="rotate-90"
                    icon="corner-arrow"
                  ></ecl-icon>
                </ecl-button>
              </div>       
            </div>
          </footer>
        </dialog>
      </section>
    );
  }
}
