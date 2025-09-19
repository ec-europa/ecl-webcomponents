import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-page-header',
  styleUrls: {
    ec: './build/styles/ecl-page-header-ec.css',
    eu: './build/styles/ecl-page-header-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclPageHeader {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() image: string ;
  @Prop() imageAlt: string;
  @Prop() meta: string;
  @Prop() headerTitle: string;
  @Prop() thumbnail: string;
  @Prop() thumbnailAlt: string;
  @Prop() overlay: string;

  getClass(): string {
    const styleClasses = [
      `ecl-page-header`,
      this.styleClass
    ]

    if (this.image) {
      styleClasses.push('ecl-page-header--image');
    }

    if (!this.headerTitle) {
      styleClasses.push('ecl-page-header__info--no-margin');
    }

    if (this.overlay) {
      styleClasses.push(`ecl-page-header--overlay-${this.overlay}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidRender() {
    if (this.el.querySelector('.ecl-breadcrumb')) {
      this.el.querySelector('.ecl-breadcrumb').classList.add(`ecl-page-header__breadcrumb`, `sc-ecl-page-header-${this.theme}`);
      this.el.querySelector('.ecl-breadcrumb__container').classList.add(`sc-ecl-page-header-${this.theme}`);
      this.el.querySelectorAll('.ecl-breadcrumb__segment').forEach((segment) => {
        segment.classList.add(`sc-ecl-page-header-${this.theme}`);
      })
    }
  };

  render() {
    return (
      <div class={this.getClass()}>
      { this.image &&
        <div class="ecl-page-header__background-container" aria-hidden="true">
          <ecl-picture
            styleClass={`ecl-page-header__picture-background sc-ecl-page-header-${this.theme}`}
            image={this.image}
            imgClass={`ecl-page-header__background sc-ecl-page-header-${this.theme}`}
          >
            <slot name="sources"></slot>
          </ecl-picture>
        </div>
      }
        <div class="ecl-container">
          <slot name="breadcrumb"></slot>
          <div class="page-header__info">
          { this.meta &&
            <div class="ecl-page-header__meta">
              <span class="ecl-page-header__meta-item">{this.meta}</span>
            </div>
          }
          { this.headerTitle &&
            <h1 class="ecl-page-header__title">{this.headerTitle}</h1>
          }
          </div>
          <div class="ecl-page-header__description-container">
          { this.thumbnail &&
            <ecl-picture
              style-class={`ecl-page-header__picture-thumbnail sc-ecl-page-header-${this.theme}`}
              image={this.thumbnail}
              imageAlt={this.thumbnailAlt}
              imgClass={`ecl-page-header__description-thumbnail sc-ecl-page-header-${this.theme}`}
            ></ecl-picture>
          }
            <p class="ecl-page-header__description">
              <slot></slot>
            </p>
          </div>
        </div>
      </div>
    )
  };
}

