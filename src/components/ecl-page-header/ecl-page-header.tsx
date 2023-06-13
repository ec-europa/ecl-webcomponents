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
  @Prop() variant: string = 'default';
  @Prop() theme: string = 'ec';
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
      `ecl-page-header--${this.variant}`,
      this.styleClass
    ]

    if (this.image) {
      styleClasses.push('ecl-page-header--image');
    }

    if (this.overlay) {
      styleClasses.push(`ecl-page-header--overlay-${this.overlay}`);
    }

    return styleClasses.join(' ');
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
      { this.image ?
        <ecl-picture
          styleClass={`ecl-page-header__picture-background sc-ecl-page-header-${this.theme}`}
          image={this.image}
          imgClass={`ecl-page-header__background sc-ecl-page-header-${this.theme}`}
        >
          <slot name="sources"></slot>
        </ecl-picture> : ''
      }
        <div class="ecl-container">
          <slot name="breadcrumb"></slot>
        { this.meta ? 
          <div class="ecl-page-header__meta">
            <span class="ecl-page-header__meta-item">{this.meta}</span>
          </div> : ''
        }
          <div class="ecl-page-header__title-container">
            <h1 class="ecl-page-header__title">{this.headerTitle}</h1>
          </div>
          <div class="ecl-page-header__description-container">
          { this.thumbnail ?
            <img
              class="ecl-page-header__description-thumbnail"
              src={this.thumbnail}
              alt={this.thumbnailAlt}
            /> : ''
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

