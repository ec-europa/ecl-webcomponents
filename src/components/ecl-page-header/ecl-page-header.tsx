import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";

declare const PAGEHEADER: any;

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
  @Prop() eclScript: boolean = false;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() image: string ;
  @Prop() imageAlt: string;
  @Prop() meta: string;
  @Prop() expandableHeader: string;
  @Prop() expandableContent: string;
  @Prop() expandableLabel: string = `toggle panel's visibility`;
  @Prop() expandablePanelId: string = `ecl-page-header-expandable-panel-${Math.random().toString(36).slice(2, 10)}`;
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
    if (this.eclScript && this.expandableHeader) {
      const src = getAssetPath('./build/scripts/ecl-page-header-expandable-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        ;(window as any).ECL = (window as any).ECL || {};
        const expandable = new PAGEHEADER.PageHeaderExpandable(this.el.firstElementChild);
        expandable.init();
      };

      document.body.appendChild(script);
    }
  };

  render() {
    return (
      <div
        class={this.getClass()}
      >
      { this.expandableHeader &&
        <div class="ecl-page-header-expandable">
          <div class="ecl-page-header-expandable__header">
            <div class="ecl-container ecl-page-header-expandable__container">
              <div class="ecl-page-header-expandable__header-text">
                { this.expandableHeader }
              </div>
            { this.expandableContent &&
              <ecl-button 
                styleClass={`ecl-page-header-expandable__toggle sc-ecl-page-header-${this.theme}`}
                variant="tertiary"
                type="submit"
                aria-controls={this.expandablePanelId}
                aria-expanded="false"
                hide-label
                data-ecl-page-header-expandable-toggle
              >
                { this.expandableLabel }
                <ecl-icon
                  slot="icon-after"
                  size="m"
                  flip="vertical"
                  icon="corner-arrow"
                  styleClass={`sc-ecl-page-header-${this.theme}`}
                >
                </ecl-icon>
              </ecl-button>
            } 
            </div>
          </div>
        { this.expandableContent &&
          <div
            class="ecl-page-header-expandable__panel"
            id={this.expandablePanelId}
            hidden
          >
            <div class="ecl-container ecl-page-header-expandable__container">
              { this.expandableContent }
            </div>
          </div>
        }
        </div>
      }
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

