import { Component, Prop, h, Element } from '@stencil/core';
import DescriptionList from "@ecl/description-list";
declare const ECL: any;

@Component({
  tag: 'ecl-description-list',
  styleUrls: {
    ec: './build/styles/ecl-description-list-ec.css',
    eu: './build/styles/ecl-description-list-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclDescriptionList {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() colorMode: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() variant: string = 'vertical';
  @Prop() visibleItems: number;
  @Prop() moreLabel: string;
  @Prop() eclScript: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-description-list`,
      `ecl-description-list--${this.variant}`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  getAttrs() {
    const attrs = {
      'class': this.getClass(),
    };

    if (this.visibleItems) {
      attrs['data-ecl-description-list'] = true;
      attrs['data-ecl-description-list-more-label'] = this.moreLabel;
      attrs['data-ecl-description-list-visible-items'] = this.visibleItems;
    }

    return attrs;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (this.eclScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.DescriptionList = DescriptionList;

      const descriptionList = new DescriptionList(this.el.firstElementChild);
      descriptionList.init();

      const firstTerm = this.el.querySelectorAll('.ecl-description-list__term');
      if (firstTerm[0]) {
        firstTerm[0].classList.add('is-first');
      } 

      const seeMore = this.el.querySelectorAll('.ecl-description-list__see_more');
      if (seeMore[0]) {
        seeMore.forEach((more) => {
          more.classList.add(`sc-ecl-description-list-${this.theme}`);
          more.firstElementChild.classList.add(`sc-ecl-description-list-${this.theme}`);
        });
      }
    }
  }

  render() {
    return (
      <dl {...this.getAttrs()}>
        <slot></slot>
      </dl>
    );
  }
}
