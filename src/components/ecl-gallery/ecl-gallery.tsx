import { Component, h, Prop, Element, getAssetPath } from '@stencil/core';
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
  @Prop() viewAllLabel: string;
  @Prop() description: string;
  @Prop() meta: string;
  @Prop() nextLabel: string;
  @Prop() prevLabel: string;
  @Prop() closeLabel: string;
  @Prop() shareLabel: string;
  @Prop() downloadLabel: string;
  @Prop() footerLinkPath: string;
  @Prop() footerLinkLabel: string;

  getClass(): string {
    return [
      `ecl-gallery`,
      this.styleClass
    ].join(' ');
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
      >
        <ul class="ecl-gallery__list">
          <slot></slot>
        </ul>
        <div class="ecl-gallery__info">
          <strong data-ecl-gallery-count>0</strong> {this.counterLabel}
        </div>
      { this.viewAllLabel ?
        <ecl-button
          style-class="ecl-gallery__view-all"
          variant="ghost"
          data-ecl-gallery-all
        > {this.viewAllLabel}
        </ecl-button> : ''
      }
      { this.footerLinkPath && this.footerLinkLabel ?
        <div class="ecl-gallery__footer">

          <ecl-link
            path={this.footerLinkPath}
            variant="standalone"
          > {this.footerLinkLabel}
          </ecl-link>
        </div> : ''
      }
        <dialog
          class="ecl-gallery__overlay"
          data-ecl-gallery-overlay
        >
          <header
            class="ecl-gallery__close"
            data-ecl-gallery-overlay-header
          >
            <ecl-button
              style-class={`ecl-gallery__close-button sc-ecl-gallery-${this.theme}`}
              variant="ghost"
              data-ecl-gallery-close
            >
              {this.closeLabel}
              <ecl-icon
                style-class
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
            <ecl-button
              style-class={`ecl-gallery__slider-previous sc-ecl-gallery-${this.theme}`}
              data-ecl-gallery-overlay-previous
              variant="ghost"
              type="button"
            >
              <ecl-icon
                style-class={`sc-ecl-gallery-${this.theme}`}
                slot="icon-before"
                size="s"
                transform="rotate-270"
                icon="corner-arrow"
              ></ecl-icon>
              {this.prevLabel}
            </ecl-button>
            <ecl-button
              style-class={`ecl-gallery__slider-next sc-ecl-gallery-${this.theme}`}
              data-ecl-gallery-overlay-next
              variant="ghost"
              type="button"
            >
              {this.nextLabel}
              <ecl-icon
                style-class={`sc-ecl-gallery-${this.theme}`}
                slot="icon-after"
                size="s"
                transform="rotate-90"
                icon="corner-arrow"
              ></ecl-icon>
            </ecl-button>
          </section>
          <footer
            class="ecl-gallery__detail"
            data-ecl-gallery-overlay-footer
          >
            <div class="ecl-gallery__detail-counter">
              <span data-ecl-gallery-overlay-counter-current>0</span>
              {` ${this.counterSeparator} `}
              <span data-ecl-gallery-overlay-counter-max>0</span>
            </div>
            <div class="ecl-gallery__detail-actions">
              <ecl-link
                style-class={`ecl-gallery__download sc-ecl-gallery-${this.theme}`}
                data-ecl-gallery-overlay-download
                name="download"
                variant="standalone"
                path=""
              >
                {this.downloadLabel}
                <ecl-icon
                  icon="download"
                  size="fluid"
                  slot="icon-after"
                ></ecl-icon>

              </ecl-link>
              <ecl-link
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
              </ecl-link>
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
          </footer>
        </dialog>
      </section>
    );
  }
}
