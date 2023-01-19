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

  cleanList(list) {
    const subitems = list.querySelectorAll('.ecl-category-filter__list-item');
    subitems.forEach((subitem) => {
      const sublink = subitem.getElementsByTagName('a')[0];
      const sublist = subitem.getElementsByTagName('ul')[0];
      subitem.innerHTML = '';
      subitem.appendChild(sublink);
      console.log(sublink);
      console.log(sublist);

    });   
  }

  componentDidRender() {
    /*const categoryList = this.el.querySelector('.ecl-category-filter__list');
    const items = this.el.querySelectorAll('.ecl-category-filter__list-item');
    if (items) {
      items.forEach((item) => {
        const link = item.getElementsByTagName('a')[0];
        const list = item.getElementsByTagName('ul')[0];
        item.innerHTML = '';
        item.appendChild(link);
        if (list) {
          this.cleanList(list);
        }
        console.log(item);
      });
      const categoryListItems = this.el.querySelectorAll('.ecl-category-filter__list-item');
      categoryList.innerHTML = '';
      categoryList.append(...categoryListItems);
    }*/
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
