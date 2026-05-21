import { Component, h, Prop, Element } from '@stencil/core';

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
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() elId: string = `ecl-featured-item-${Date.now().toString(16) + Math.random().toString(16).slice(2,10)}`;
  @Prop() styleClass: string;
  @Prop() variant: string;
  @Prop() itemTitle: string;
  @Prop() image: string;
  @Prop() colorMode: string = '';
  @Prop() linkType: string;
  @Prop() linkPath: string;
  @Prop() linkLabel: string;
  @Prop() microTitle: string;
  @Prop() mediaCaption: string;
  @Prop() mediaBehavior: string;
  @Prop() mediaAnchor: string;
  @Prop() mediaCredit: string;
  @Prop() verticalAlignment: string = 'top';
  @Prop() position: string = 'left';
  @Prop() defaultContainerClass = 'ecl-featured-item__container';

  getClass(): string {
    const styleClasses = [
      `ecl-featured-item`,
      this.styleClass
    ];

    if (this.variant === 'highlight') {
       styleClasses.push(`ecl-featured-item--${this.variant}`);
    }

    if (this.linkType === 'highlighted') {
      styleClasses.push('ecl-featured-item--link-highlighted');
    }

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.verticalAlignment === 'center') {
      styleClasses.push('ecl-featured-item--vcenter');
    }

    if (this.mediaBehavior === 'dynamic') {
      styleClasses.push('ecl-featured-item--dynamic');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const picture = this.el.querySelector('.ecl-media-container__picture');

    if (picture) {
      picture.classList.add(`sc-ecl-featured-item-${this.theme}`);
      const img = picture.querySelector('.ecl-media-container__media');
      if (img) {
        img.classList.add(`sc-ecl-featured-item-${this.theme}`);
      }
    }
  }

  render() {
    const containerClasses = this.position === 'right' ? `${this.defaultContainerClass} ecl-featured-item__container--right` : this.defaultContainerClass;

    return (
      <article
        class={this.getClass()}
      >
        <div class={containerClasses}>
          <div class="ecl-featured-item__item">
            <div class="ecl-featured-item__content">
              <div class="ecl-featured-item__info">
              { this.microTitle &&
                <div class="ecl-featured-item__micro-title">
                  {this.microTitle}
                </div>
              }
              { this.itemTitle &&
                <div 
                  class="ecl-featured-item__title"
                  id={this.elId + '-title'}
                >
                  {this.itemTitle}
                </div> 
              }
                <div class="ecl-featured-item__description">
                  <slot></slot>
                </div>
              </div>
            { (this.linkPath && this.linkLabel) &&
              <ecl-link
                variant={`${this.linkType === 'button' ? 'primary-neutral' : 'standalone' }`}
                style-class={`ecl-featured-item__link sc-ecl-featured-item-${this.theme} ${this.linkType === 'highlighted' ? 'ecl-featured-item--link-highlighted' : ''}`}
                path={this.linkPath}
                aria-describedby={this.elId + '-title'}
              >
                {this.linkLabel}
                <ecl-icon
                  style-class={`sc-ecl-featured-item-${this.theme}`}
                  slot="icon-after"
                  icon="arrow-left"
                  flip="horizontal"
                />
              </ecl-link>
            }
          </div>
        </div>
        { this.image &&
          <div class="ecl-featured-item__item">
            <ecl-media-container
              styleClass={`ecl-featured-item__media_container sc-ecl-featured-item-${this.theme}`}
              image={this.image}
              hasCaption={this.mediaCaption !== ''}
              imageAnchor={this.mediaAnchor}
              credit={this.mediaCredit}
            >
             {this.mediaCaption}
            </ecl-media-container>
          </div>
        }
        </div>
      </article>
    );
  }
}
