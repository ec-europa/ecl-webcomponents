import { Component, h, Prop, Host} from '@stencil/core';

@Component({
  tag: 'ecl-list-illustration-item',
  shadow: false,
  scoped: false,
})

export class EclListIllustrationItem {
  @Prop({ mutable: true }) theme: string;
  @Prop() itemTitle: string;
  @Prop() itemLink: string;
  @Prop() image: string;
  @Prop() icon: string;
  @Prop() iconSize: string = '2xl';
  @Prop() imageAlt: string;
  @Prop() squareImage: boolean = false;
  @Prop() styleClass: string;
  @Prop() hasColumns: boolean = false;
  @Prop() divider: boolean = false;
  @Prop() mediaSize: string = 'm';
  @Prop() itemValue: string;

  getClass(): string {
    const styleClasses = [
      `sc-ecl-list-illustration-${this.theme}`,
      `ecl-list-illustration__item`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  } 

  getContentClass(): string  {
    const contentClasses = [
      'ecl-list-illustration__item-content',
      `sc-ecl-list-illustration-${this.theme}`,
    ];

    if (this.divider) {
      contentClasses.push('ecl-list-illustration__divider');
    }

    if (this.image && !this.hasColumns) {
      contentClasses.push('ecl-list-illustration__item-content--row');
    }

    return contentClasses.join(' ');
  }

  getImgClass(): string {
    const imgClasses = [
      `sc-ecl-list-illustration-${this.theme}`,
      `ecl-list-illustration__image`,
    ];

    if (this.squareImage) {
      imgClasses.push('ecl-list-illustration__image--square');
      imgClasses.push(`ecl-list-illustration__image--${this.mediaSize}`);
    }

    return imgClasses.join(' ');
  }

  getImgAttr() {
    const attrs = {
      role: 'img',
    }

    if (this.imageAlt) {
      attrs['aria-label'] = this.imageAlt;
    }

    return attrs;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <Host
        class={this.getClass()}
        role="listitem"
      >
        <div class={this.getContentClass()}>
        { this.image ?
          <ecl-picture
            styleClass={`ecl-list-illustration__picture sc-ecl-list-illustration-${this.theme}`}
            imgClass={this.getImgClass()}
            image={this.image}
            imageAlt={this.imageAlt}
            {...this.getImgAttr()}
          >
            <slot name="sources"></slot>
          </ecl-picture> : ''
        }
        { this.icon ?
          <ecl-icon
            icon={this.icon}
            size={this.iconSize}
            style-class={`ecl-list-illustration__icon sc-ecl-list-illustration-${this.theme}`}
          ></ecl-icon> : '' 
        }
          <div class={`ecl-list-illustration__detail sc-ecl-list-illustration-${this.theme}`}>
            <div class={`ecl-list-illustration__title-container sc-ecl-list-illustration-${this.theme}`}>
            { this.itemValue ?
              <div class={`ecl-list-illustration__value sc-ecl-list-illustration-${this.theme}`}>{this.itemValue}</div> : ''
            }
            { this.itemTitle && (
              <div class={`ecl-list-illustration__title sc-ecl-list-illustration-${this.theme}`}>
                {this.itemLink ? (
                  <ecl-link variant="standalone" path={this.itemLink}>{this.itemTitle}</ecl-link>
                ) : (
                  this.itemTitle
                )}
              </div>
            )}
            </div>
            <div class={`ecl-list-illustration__description sc-ecl-list-illustration-${this.theme}`}>
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
