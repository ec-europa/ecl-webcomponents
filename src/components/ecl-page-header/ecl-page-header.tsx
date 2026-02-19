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
  @Prop() noScript: boolean = false;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() colorMode: string = '';
  @Prop() image: string ;
  @Prop() imageAlt: string;
  @Prop() withDescription: boolean = true;
  @Prop() withMeta: boolean;
  @Prop() withBackground: boolean = false;
  @Prop() imagePosition: string = 'top';
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
      styleClasses.push(`ecl-page-header--picture-${this.imagePosition}`);
    }

    if (!this.headerTitle) {
      styleClasses.push('ecl-page-header__info--no-margin');
    }

    if (this.withBackground) {
      styleClasses.push(`ecl-page-header--background`);
    }

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.withDescription) {
      styleClasses.push(`ecl-page-header--description-${this.descriptionPosition}`);
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
      if (items) {
        items.forEach((item) => {
          item.replaceWith(item.firstElementChild);
        });
      }
    }
    if (!this.noScript && this.expandable && this.expandableContent) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.PageHeaderExpandable = PageHeaderExpandable;

      const expandable = new PageHeaderExpandable(this.el.firstElementChild);
      expandable.init();
    }
  };

  getPicture() {
    if (this.image) {
      return <ecl-picture
              styleClass={`ecl-page-header__picture-background sc-ecl-page-header-${this.theme}`}
              image={this.image}
              imgClass={`ecl-page-header__background sc-ecl-page-header-${this.theme}`}
            >
              <slot name="sources"></slot>
            </ecl-picture>;
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

  get5050Markup() {
    return (
    <div class="ecl-page-header__container">
      {this.getPicture()}
      <div class="ecl-page-header__section-info ecl-container">
        <slot name="breadcrumb"></slot>
        <div class="ecl-page-header__content-info">
          {this.getTitle()}
        { (this.descriptionPosition === 'top' && (this.withDescription || this.thumbnail)) &&
          <div class="ecl-page-header__description-top">
            {this.getDescription()}
          </div>
        }
        </div>
        {this.getMeta()}
      </div>
    </div>
    );
  }

  getBasicMarkup() {
    return (
      <div class="ecl-page-header__container">
        <div class="ecl-container">
          <slot name="breadcrumb"></slot>
          {this.getTitle()}
          { (this.descriptionPosition === 'top' && (this.withDescription || this.thumbnail)) &&
          <div class="ecl-page-header__description-top">
            {this.getDescription()}
          </div>
          }
          {this.getMeta()}
        {this.imagePosition === 'bottom' &&
          this.getPicture()
        }
        </div>
      </div>
    );
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
      { this.imagePosition === 'top' &&
        this.getPicture()
      }
        
      { (this.image && this.imagePosition === 'beside') ? (
        this.get5050Markup()
      )
       : (
        this.getBasicMarkup()
      )
     }

      { (this.descriptionPosition === 'bottom' && (this.withDescription || this.thumbnail)) &&
        <div class="ecl-page-header__description-bottom">
          <div class="ecl-container">
            {this.getDescription()}
          </div>
        </div>
      }
      </div>
    );
  }
}
