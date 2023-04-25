import { Component, Prop, h, Element, getAssetPath } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-category-filter',
  styleUrls: {
    ec: './build/styles/ecl-category-filter-ec.css',
    eu: './build/styles/ecl-category-filter-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclCategoryFilter {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() eclScript: boolean = false;

  getClass(): string {
    return [
      `ecl-category-filter`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
    const items = Array.from(this.el.querySelectorAll('.ecl-category-filter__item--level-1'));
    if (items[0]) {
      const lastItem = items[items.length - 1] as HTMLElement;
      lastItem.parentElement.parentElement.style.border = 'none';
    }
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-category-filter-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const categoryFilter = new ECL.CategoryFilter(this.el.firstElementChild);
        categoryFilter.init();
      };
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <nav
        class={this.getClass()}
        data-ecl-category-filter
      >
        <ul class="ecl-category-filter__list">
          <slot></slot>
        </ul>
      </nav>
    )
  }
}
