import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-category-filter-item',
  shadow: false,
  scoped: false,
})

export class EclCategoryFilterItem {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() label: string;
  @Prop() path: string;
  @Prop() level: number;
  @Prop() subItems: boolean = false;
  @Prop() expanded: boolean = false;
  @Prop() lastClicked: HTMLElement;

  clickedItem(ev): void {
    this.lastClicked = ev.target.closest('.ecl-category-filter__list-item');
  }

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

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    const elAttrs = {};
    if (this.subItems) {
      elAttrs['aria-expanded'] = "false";
    }
    if (this.expanded) {
      elAttrs['aria-expanded'] = "true";
    }

    return (
      <li
        class={this.getClass()}
        onClick={ev => this.clickedItem(ev)}
      >
        {this.path && !this.subItems && (
          <ecl-link
            styleClass={this.getLinkClass()}
            path={this.path}
          >
            {this.label}
          </ecl-link>
        )}

        {this.path && this.subItems && (
          <button
            class={this.getLinkClass()}
            {...elAttrs}
          >
            { this.level === 1 && this.label }
            <ecl-icon
              styleClass={`ecl-category-filter__item-icon sc-ecl-category-filter-${this.theme}`}
              icon={this.level === 1 ? 'corner-arrow' : 'solid-arrow'}
              rotate={this.level === 1 ? '180' : '90'}
            />
            { this.level > 1 && this.label }
          </button>
        )}

        {!this.path && this.label}

        {this.subItems && (
          <ul class={`ecl-category-filter__list sc-ecl-category-filter-${this.theme}`}>
            <slot></slot>
          </ul>
        )}
      </li>
    );
  }
}
