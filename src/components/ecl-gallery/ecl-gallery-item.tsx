import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-gallery-item',
})

export class EclGalleryItem {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() thumbnail: string;
  @Prop() thumbZoom: boolean = false;
  @Prop() imageAlt: string;
  @Prop() mediaHref: string;
  @Prop() mediaIframeHref: string;
  @Prop() mediaSharePath: string;
  @Prop() meta: string;
  @Prop() type: string = 'image';
  @Prop() icon: string;
  @Prop() elId: string;


  getClass(): string {
    return [
      `ecl-gallery__item`,
      `sc-ecl-gallery-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  getThumbClass() {
    const thumbClass = [
      'ecl-gallery__thumbnail',
      `sc-ecl-gallery-${this.theme}`,
    ];

    if (this.thumbZoom) {
      thumbClass.push('ecl-picture--zoom');
    }

    return thumbClass.join(' ');
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

  getId() {
    if (this.elId) {
      return this.elId;
    }

    const galleryId = this.el.closest('.ecl-gallery').id;
    const itemId = `${galleryId}-item-${Math.random().toString(36).slice(2, 10)}`;

    return itemId;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <li class={this.getClass()} id={this.getId()}>
        <a
          href={this.mediaIframeHref ? this.mediaIframeHref : this.mediaHref}
          class={`ecl-gallery__item-link sc-ecl-gallery-${this.theme}`}
          {...this.getLinkAttr()}
        >
          <figure class={`ecl-gallery__image-container sc-ecl-gallery-${this.theme}`}>
          { this.thumbnail &&
            <ecl-picture
              image={this.thumbnail}
              style-class={this.getThumbClass()}
              img-class={`ecl-gallery__image sc-ecl-gallery-${this.theme}`}
            >
              <slot name="thumbnail-sources"></slot>
            </ecl-picture>
          }
            <slot name="video"></slot>
          { this.type !== 'html-video' ?
            <ecl-picture 
              image={this.mediaHref}
              image-alt={this.imageAlt}
              styleClass={`ecl-gallery__picture sc-ecl-gallery-${this.theme}`}
              img-class={`ecl-gallery__image sc-ecl-gallery-${this.theme}`}
              lazy
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
              <div class="ecl-gallery__title" data-ecl-gallery-title id={`${this.getId()}-title`}><slot></slot></div>
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
