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
  @Prop() elId: string = `ecl-gallery-${Math.random().toString(36).slice(2, 10)}`;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() eclScript: boolean = false;
  @Prop() slidesNumber: number;
  @Prop() counterLabel: string ;
  @Prop() counterSeparator: string;
  @Prop() description: string;
  @Prop() meta: string;
  @Prop() grid: boolean = false;
  @Prop() gridTemplate: number = 1;
  @Prop() ratio: string = '3-2';
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
  @Prop() disableOverlay: boolean = false;
  @Prop() srGalleryLabel: string;

  addScopedClassToDetailActions() {
    setTimeout(() => {
      const elements = [
        ...document.querySelectorAll('.ecl-gallery__detail-actions-mobile'),
        ...document.querySelectorAll('.ecl-gallery__slider-embed'),
        ...document.querySelectorAll('.ecl-gallery__slider-embed-audio'),
        ...document.querySelectorAll('.ecl-gallery__slider-video'),
        ...document.querySelectorAll('.ecl-gallery__slider-image'),
      ];

      elements.forEach(el => {
        el.classList.add(`sc-ecl-gallery-${this.theme}`);
      });
    }, 0);
  }

  getClass(): string {
    const styleClasses = [
      `ecl-gallery`,
      this.styleClass
    ];

    if (this.fullWidth) {
      styleClasses.push('ecl-gallery--full-width');
    }

    if (this.grid) {
      styleClasses.push('ecl-gallery--grid', `ecl-gallery--template-${this.gridTemplate}`, `ecl-gallery--ratio-${this.ratio}`);
    }

    if (this.disableOverlay) {
      styleClasses.push('.ecl-gallery--no-overlay');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidRender() {
    const items = this.el.querySelectorAll('.ecl-gallery__item');
    this.el.querySelector('.ecl-gallery__list').innerHTML = '';
    this.el.querySelector('.ecl-gallery__list').append(...items);
    
    const images = [
      ...this.el.querySelectorAll('.ecl-gallery__image'),
      ...this.el.querySelectorAll('.ecl-gallery__slider-previous'),
      ...this.el.querySelectorAll('.ecl-gallery__slider-next'),
    ];

    images.forEach(img => {
      img.addEventListener('click', () => {
        this.addScopedClassToDetailActions();
      });
    });

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
        id={this.elId}
        data-ecl-gallery
        {...( !this.expandable 
          ? { 'data-ecl-gallery-not-expandable': true } 
          : { 'data-ecl-gallery-visible-items': this.visibleItems }
        )}
        {...this.noOverlay && ({ 'data-ecl-gallery-no-overlay' : true })}
        {...this.disableOverlay && ({ 'data-ecl-gallery-no-overlay' : true })}
        {...(!this.expandable && this.srGalleryLabel) && ({ 'aria-label': this.srGalleryLabel })}
      >
        <ul class="ecl-gallery__list">
          <slot></slot>
        </ul>
        <div class="ecl-gallery__footer">
        {this.expandable ? (
          <div class="ecl-gallery__info">
            <div class="ecl-gallery__info-total">
              <strong data-ecl-gallery-count>0</strong>
              {this.counterLabel}
            </div>
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
              hide-label
              data-ecl-gallery-close
            >
              {this.closeLabel}
              <ecl-icon
                style-class={`sc-ecl-gallery-${this.theme}`}
                icon="close"
                size="m"
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
              <div class="ecl-gallery__detail-container">
                <div class="ecl-gallery__pager">
                  <div class="ecl-gallery__detail-counter">
                    <span data-ecl-gallery-overlay-counter-current>0</span>
                      {` ${this.counterSeparator} `}
                    <span data-ecl-gallery-overlay-counter-max>0</span>
                  </div>
                  <div class="ecl-gallery__controls">
                    <ecl-button
                      theme={this.theme}
                      style-class={`ecl-gallery__slider-previous sc-ecl-gallery-${this.theme}`}
                      data-ecl-gallery-overlay-previous
                      variant="ghost"
                      type="button"
                      hide-label
                    >
                      <ecl-icon
                        style-class={`sc-ecl-gallery-${this.theme}`}
                        slot="icon-before"
                        size="s"
                        rotate="270"
                        icon="corner-arrow"
                      ></ecl-icon>
                      {this.prevLabel}
                    </ecl-button>
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
                      style-class={`sc-ecl-gallery-${this.theme}`}
                      slot="icon-after"
                      size="s"
                      rotate="90"
                      icon="corner-arrow"
                    ></ecl-icon>
                  </ecl-button>
                </div>       
                <div class="ecl-gallery__detail-actions">
                  <ecl-link
                    theme={this.theme}
                    style-class={`ecl-gallery__download sc-ecl-link-${this.theme} sc-ecl-gallery-${this.theme}`}
                    data-ecl-gallery-overlay-download
                    variant="standalone"
                    path=""
                    target="blank"
                  >
                    {this.fullScreenLabel}
                    <ecl-icon
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
                      icon="share"
                      size="fluid"
                      slot="icon-after"
                    ></ecl-icon>
                  </ecl-link> : ''
                }
                </div>
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
            </div>
          </footer>
        </dialog>
      </section>
    );
  }
}
