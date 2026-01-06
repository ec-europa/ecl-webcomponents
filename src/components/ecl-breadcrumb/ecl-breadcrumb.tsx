import { Component, Prop, h, Element } from '@stencil/core';
import Breadcrumb from "@ecl/breadcrumb";
declare var ECL: any;

@Component({
  tag: 'ecl-breadcrumb',
  styleUrls: {
    ec: './build/styles/ecl-breadcrumb-ec.css',
    eu: './build/styles/ecl-breadcrumb-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build']
})

export class EclBreadcrumb {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() eclScript: boolean = true;
  @Prop() minItemsRight: number = 2;


  getClass(): string {
    return [
      `ecl-breadcrumb`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidRender() {
    const items = this.el.querySelectorAll('.ecl-breadcrumb__segment');
    const itemsCount = items.length;
    const ellipsis = this.el.querySelector('.ecl-breadcrumb__segment--ellipsis');
    const startHidingIndex = Array.from(items).indexOf(ellipsis);
    const toBeHidden = Array.from(items).slice((startHidingIndex + 1), (itemsCount - this.minItemsRight));

    toBeHidden.forEach((item) => {
      item.setAttribute('data-ecl-breadcrumb-item', 'expandable');
    });

    this.el.querySelector('.ecl-breadcrumb__container').innerHTML = '';
    this.el.querySelector('.ecl-breadcrumb__container').append(...items);

    if (this.eclScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Breadcrumb = Breadcrumb;
      
      const breadcrumb = new Breadcrumb(this.el.firstElementChild);
      breadcrumb.init();
    }
  }

  render() {
    return (
      <nav
        class={this.getClass()}
        data-ecl-breadcrumb
      >
        <ol class="ecl-breadcrumb__container">
          <slot></slot>
        </ol>
      </nav>
    )
  }
}
