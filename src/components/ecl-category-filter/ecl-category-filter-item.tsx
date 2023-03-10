import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-category-filter-item',
  shadow: false,
})

export class EclCategoryFilterItem {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() label: string;
  @Prop() path: string;
  @Prop() level: number;
  @Prop() subItems: boolean = false;

  getClass(): string {
    return [
      `ecl-category-filter__list-item`,
      `sc-ecl-category-filter-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  getLinkClass(): string {
    const linkClasses = [
      `ecl-category-filter__item`,
      `sc-ecl-category-filter-${this.theme}`,
      `ecl-category-filter__item--level-${this.level}`,
      this.styleClass
    ];

    if (this.subItems) {
      linkClasses.push(`ecl-category-filter__item--has-children`);
    }

    return linkClasses.join(' ');
  }

  render() {
    const elAttrs = this.subItems ? { 'aria-expanded': "false" } : {};
    return (
      <li
        class={this.getClass()}
        {...elAttrs}
      >
      { this.path ?
        <ecl-link
          style-class={this.getLinkClass()}
          path={this.path}
        >
          {this.label}
          {this.subItems ?
            <ecl-icon
              style-class={`ecl-category-filter__item-icon sc-ecl-category-filter-${this.theme}`}
              icon={this.level === 1 ? 'corner-arrow' : 'solid-arrow'}
              size={this.level === 1 ? 'xs' : 'm'}
              transform={this.level === 1 ? 'rotate-180' : 'rotate-90'}
              slot={this.level === 1 ? 'icon-after' : 'icon-before'}
            ></ecl-icon> : '' 
          }
        </ecl-link> : '' 
      }
      { !this.path ? this.label : '' }
      { this.subItems ?
        <ul class={`ecl-category-filter__list sc-ecl-category-filter-${this.theme}`}>
          <slot></slot>
        </ul> : ''
      }
      </li>
    )
  }
}
