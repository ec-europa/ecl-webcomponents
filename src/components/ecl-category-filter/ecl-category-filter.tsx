import { Component, Prop, h, Element } from '@stencil/core';
import CategoryFilter from "@ecl/category-filter";
declare var ECL: any;

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
  @Prop({ mutable: true }) theme: string;
  @Prop() noScript: boolean = false;
  @Prop() colorMode: string;

  getClass(): string {
    const styleClasses = [
      `ecl-category-filter`,
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

  componentDidRender() {
    const items = Array.from(this.el.querySelectorAll('.ecl-category-filter__item--level-1'));
    if (items[0]) {
      const lastItem = items[items.length - 1] as HTMLElement;
      lastItem.parentElement.parentElement.style.border = 'none';
    }

    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.CategoryFilter = CategoryFilter;
      const categoryFilter = new CategoryFilter(this.el.firstElementChild);
      categoryFilter.init();
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
