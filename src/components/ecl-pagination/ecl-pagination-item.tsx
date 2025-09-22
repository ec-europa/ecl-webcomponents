import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-pagination-item',
  scoped: false,
  shadow: false,
})

export class EclPaginationItem {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() path: string;
  @Prop() ariaLabel: string;
  @Prop() current: boolean;
  @Prop() previous: boolean;
  @Prop() truncation: boolean = false;
  @Prop() next: boolean;

  getClass(): string {
    const styleClasses = [
      `ecl-pagination__item`,
      `sc-ecl-pagination-${this.theme}`,
      this.styleClass
    ]

    if (this.current) {
      styleClasses.push('ecl-pagination__item--current')
    }
    if (this.previous) {
      styleClasses.push('ecl-pagination__item--previous');
    }
    if (this.next) {
      styleClasses.push('ecl-pagination__item--next');
    }
    if (this.truncation) {
      styleClasses.push('ecl-pagination__item--truncation');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <li class={this.getClass()}>
      { this.truncation ?
        <span class={`ecl-pagination__text ecl-pagination__text--summary sc-ecl-pagination-${this.theme}`}>...</span>
      : !this.current ?
        <ecl-link
          theme={this.theme}
          variant="standalone"
          path={this.path}
          aria-label={this.ariaLabel}
          hide-label={!!(this.previous || this.next)}
          styleClass={`sc-ecl-pagination-${this.theme} ecl-pagination__link`}
        >
          <slot></slot>
        { this.previous || this.next ? 
          <ecl-icon
            icon="corner-arrow"
            size="xs"
            rotate={this.previous ? '270' : '90'}
            slot={this.previous ? 'icon-before' : 'icon-after'}
            style-class={`sc-ecl-pagination-${this.theme}`}
          ></ecl-icon> : ''
        }
        </ecl-link> : ''
      }
      { this.current ?
        <span class={`ecl-pagination__text ecl-pagination__text--summary sc-ecl-pagination-${this.theme}`}>
          <slot></slot>
        </span> : ''
      }
      {this.current ? 
        <span class={`ecl-pagination__text ecl-pagination__text--full sc-ecl-pagination-${this.theme}`}>
          {this.ariaLabel}
        </span> : ''
      }
      </li>
    )
  };
}

