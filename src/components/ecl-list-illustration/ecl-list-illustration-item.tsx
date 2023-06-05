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

  render() {
    return (
      <div class={this.getClass()}>
      { this.image ?
        <div
          class={this.getImgClass()}
          style={{ backgroundImage: "url(" + this.image + ")"}}
          {...this.getImgAttr()}
        ></div> : ''
      }
        <div class={`ecl-list-illustration__detail sc-ecl-list-illustration-${this.theme}`}>
          <div class={`ecl-list-illustration__title-container sc-ecl-list-illustration-${this.theme}`}>
          { this.icon ?
            <ecl-icon
              icon={this.icon}
              size="xl"
              style-class={`ecl-list-illustration__icon sc-ecl-list-illustration-${this.theme}`}
            ></ecl-icon> : '' 
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