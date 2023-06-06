import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ecl-list-illustration-item',
  shadow: false,
  scoped: false,
})

export class EclListIllustrationItem {
  @Prop() theme: string = 'ec';
  @Prop() itemTitle: string;
  @Prop() itemLink: string;
  @Prop() image: string;
  @Prop() icon: string;
  @Prop() imageAlt: string;
  @Prop() squareImage: boolean = false;
  @Prop() styleClass: string;
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

  getIconSize() {
    return this.mediaSize === 'l' ? '2xl' : 'l';
  }

  render() {
    return (
      <div class={this.getClass()}>
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
        <div class={`ecl-list-illustration__detail sc-ecl-list-illustration-${this.theme}`}>
          <div class={`ecl-list-illustration__title-container sc-ecl-list-illustration-${this.theme}`}>
          { this.icon ?
            <ecl-icon
              icon={this.icon}
              size={this.getIconSize()}
              style-class={`ecl-list-illustration__icon sc-ecl-list-illustration-${this.theme}`}
            ></ecl-icon> : '' 
          }
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
    );
  }
}
