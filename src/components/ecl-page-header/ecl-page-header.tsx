import { Component, Prop, h, Element } from '@stencil/core';
import PageHeaderExpandable from "@ecl/page-header";

declare const ECL: any;

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
  @Prop() eclScript: boolean = true;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() image: string ;
  @Prop() imageAlt: string;
  @Prop() withMeta: boolean;
  @Prop() fontSize: string = 'm';
  @Prop() variant: string;
  @Prop() descriptionPosition: string = 'top';
  @Prop() expandable: boolean = false;
  @Prop() expandableContent: boolean = false;
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

    if (this.variant) {
      styleClasses.push(`ecl-page-header--${this.variant}`);
    }

    if (!this.headerTitle) {
      styleClasses.push('ecl-page-header__info--no-margin');
    }

    if (this.fontSize === 'l') {
      styleClasses.push(`ecl-page-header--font-${this.fontSize}`);
    }

    if (this.descriptionPosition === 'bottom') {
      styleClasses.push('ecl-page-header--descrirption-bottom');
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
    if (this.withMeta) {
      const items = this.el.querySelectorAll('ecl-page-header-meta-item');
      items.forEach((item) => {
        item.replaceWith(item.firstElementChild);
      });
    }
    if (this.eclScript && this.expandable && this.expandableContent) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.PageHeaderExpandable = PageHeaderExpandable;

      const expandable = new PageHeaderExpandable(this.el.firstElementChild);
      expandable.init();
    }
  };

  getPicture() {
    if (this.image) {
      return <div class="ecl-page-header__background-container">
                <ecl-picture
                  styleClass={`ecl-page-header__picture-background sc-ecl-page-header-${this.theme}`}
                  image={this.image}
                  imgClass={`ecl-page-header__background sc-ecl-page-header-${this.theme}`}
                >
                  <slot name="sources"></slot>
                </ecl-picture>
              </div>;
    }
  }

  getTitle() {
    if (this.headerTitle) {
      return <h1 class="ecl-page-header__title">{this.headerTitle}</h1>
    }
  }

  getMeta() {
    if (this.withMeta) {
      return <ul class="ecl-page-header__meta">
                <slot name="meta"></slot>
             </ul>
    }
  }

  getDescription() {
    return <div class="ecl-page-header__description-container">
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
  }

  render() {
    return (
      <div
        class={this.getClass()}
      >
      { this.expandable &&
        <div class="ecl-page-header-expandable">
          <div class="ecl-page-header-expandable__header">
            <div class="ecl-container ecl-page-header-expandable__container">
              <div class="ecl-page-header-expandable__header-text">
                <slot name="expandable-header"></slot>
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
              <slot name="expandable-content"></slot>
            </div>
          </div>
        }
        </div>
      }

      { this.variant === 'news' &&
        <div class="ecl-container ecl-page-header__container">
          <slot name="breadcrumb"></slot>
          {this.getTitle()}
          {this.getMeta()}
          {this.getPicture()}
        </div>
      }
      { this.variant === 'news' &&
        <div class="ecl-page-header__section-description">
          <div class="ecl-container">
            {this.getDescription()}
          </div>
        </div>
      }

      { this.variant === '50-50' &&
        <div class="ecl-page-header__container">
          {this.getPicture()}
          <div class="ecl-page-header__section-info ecl-container">
            <slot name="breadcrumb"></slot>
            <div class="ecl-page-header__content-info">
              {this.getTitle()}
              <div class="ecl-page-header__description-info">
                {this.getDescription()}
              </div>
            </div>
            {this.getMeta()}
          </div>
        </div>
      }

      { this.variant === '50-50' &&
        <div class="ecl-page-header__description-info">
          {this.getDescription()}
        </div>
      }

      { !this.variant ? this.getPicture() : '' }

      { !this.variant &&
        <div class="ecl-container ecl-page-header__container">
          <slot name="breadcrumb"></slot>
          {this.getTitle()}
          {this.getDescription()}
          {this.getMeta()}
        </div>
      }
      </div>
    );
  }
}
