import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-gallery-item',
})

export class EclGalleryItem {
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() imageAlt: string;
  @Prop() mediaHref: string;
  @Prop() mediaIframeHref: string;
  @Prop() mediaSharePath: string;
  @Prop() meta: string;
  @Prop() type: string = 'image';
  @Prop() icon: string;

  getClass(): string {
    return [
      `ecl-gallery__item`,
      `sc-ecl-gallery-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  getLinkAttr() {
    const attrs = {
      'data-ecl-gallery-item': ''
    };

    if (this.mediaSharePath) {
      attrs['data-ecl-gallery-item-share'] = this.mediaSharePath;
    }
    if (this.mediaIframeHref) {
      attrs['data-ecl-gallery-item-embed-src'] = this.mediaIframeHref;
    }

    return attrs;
  } 

  render() {
    return (
      <li class={this.getClass()}>
        <a
          href={this.mediaIframeHref ? this.mediaIframeHref : this.mediaHref}
          class={`ecl-gallery__item-link sc-ecl-gallery-${this.theme}`}
          {...this.getLinkAttr()}
        >
          <figure class={`ecl-gallery__image-container sc-ecl-gallery-${this.theme}`}>
            <slot name="video"></slot>
          { this.type !== 'html-video' ?
            <ecl-picture 
              image={this.mediaHref}
              image-alt={this.imageAlt}
              styleClass={`ecl-gallery__picture sc-ecl-gallery-${this.theme}`}
              img-class={`ecl-gallery__image sc-ecl-gallery-${this.theme}`}
            >
              <slot name="sources"></slot>
            </ecl-picture> : ''
          }
          { this.type !== 'image' ? 
            <div class={`ecl-gallery__item-icon-wrapper sc-ecl-gallery-${this.theme}`}>
              <ecl-icon
                style-class={`ecl-gallery__item-icon sc-ecl-gallery-${this.theme}`}
                icon="play-filled"
                size="l"
                color="inverted"
              ></ecl-icon>
            </div> : ''
          }
            <figcaption
              class={`ecl-gallery__description sc-ecl-gallery-${this.theme}`}
              data-ecl-gallery-description
            >
            { this.icon ?
              <ecl-icon
                icon={this.icon}
                styleClass="ecl-gallery__description-icon"
                size="s"
              ></ecl-icon> : ''
            }
              <slot></slot>
              <span
                class={`ecl-gallery__meta sc-ecl-gallery-${this.theme}`}
                data-ecl-gallery-meta
              >
                {this.meta}
              </span>
            </figcaption>
          </figure>
        </a>
      </li>
    );
  }
}
