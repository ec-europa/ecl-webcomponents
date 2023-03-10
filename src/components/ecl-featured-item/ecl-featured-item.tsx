import { Component, h, Prop, getAssetPath } from '@stencil/core';

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
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() variant: string = 'default';
  @Prop() itemTitle: string;
  @Prop() image: string;
  @Prop() mediaCaption: string;
  @Prop() position: string = 'left';
  @Prop() eclScript: boolean = false;
  @Prop() withUtils: boolean = true;
  @Prop() defaultContainerClass = 'ecl-featured-item__container';

  getClass(): string {
    return [
      `ecl-featured-item`,
      `ecl-featured-item--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    if (this.withUtils && !document.querySelector('#ecl-utils-styles')) {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.id = 'ecl-utils-styles';
      style.href = getAssetPath(`./build/styles/ecl-utilities-${this.theme}.css`);
      document.body.appendChild(style);
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
            <ecl-media-container
              styleClass="ecl-featured-item__media_container"
              image={this.image}
            >
             {this.mediaCaption}
            </ecl-media-container>
          </div>
          <div class="ecl-featured-item__item">
          { this.itemTitle ?
            <div class="ecl-featured-item__title">
              {this.itemTitle}
            </div> : '' }
            <div class="ecl-featured-item__description">
              <slot></slot>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
