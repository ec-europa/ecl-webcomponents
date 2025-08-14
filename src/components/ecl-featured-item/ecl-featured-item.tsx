import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-featured-item',
  styleUrls: {
    ec: './build/styles/ecl-featured-item-ec.css',
    eu: './build/styles/ecl-featured-item-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclFeaturedItem {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() variant: string = 'default';
  @Prop() itemTitle: string;
  @Prop() image: string;
  @Prop() colorMode: string;
  @Prop() linkPath: string;
  @Prop() linkLabel: string;
  @Prop() mediaCaption: string;
  @Prop() position: string = 'left';
  @Prop() eclScript: boolean = false;
  @Prop() defaultContainerClass = 'ecl-featured-item__container';

  getClass(): string {
    const styleClasses = [
      `ecl-featured-item`,
      `ecl-featured-item--${this.variant}`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    const containerClasses = this.position === 'right' ? `${this.defaultContainerClass} ecl-featured-item__container--right` : this.defaultContainerClass;

    return (
      <article
        class={this.getClass()}
      >
        <div class={containerClasses}>
        { this.image &&
          <div class="ecl-featured-item__item">
            <ecl-media-container
              styleClass="ecl-featured-item__media_container"
              image={this.image}
              hasCaption={this.mediaCaption !== ''}
            >
             {this.mediaCaption}
            </ecl-media-container>
          </div>
        }
          <div class="ecl-featured-item__item">
          { this.itemTitle ?
            <div class="ecl-featured-item__title">
              {this.itemTitle}
            </div> : '' }
            <div class="ecl-featured-item__description">
              <slot></slot>
            </div>
          { (this.linkPath && this.linkLabel) &&
            <ecl-link
              variant="standalone"
              style-class={`ecl-featured-item__link sc-ecl-featured-item-${this.theme}`}
              path={this.linkPath}
            >
              {this.linkLabel}
              <ecl-icon
                style-class={`sc-ecl-featured-item-${this.theme}`}
                slot="icon-after"
                icon="arrow-left"
                transform="flip-horizontal"
              />
            </ecl-link>
          }
          </div>
        </div>
      </article>
    );
  }
}
