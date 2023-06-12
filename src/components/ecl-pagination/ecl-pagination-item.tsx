import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-pagination-item',
  scoped: false,
  shadow: false,
})

export class EclPaginationItem {
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() path: string;
  @Prop() ariaLabel: string;
  @Prop() current: boolean;
  @Prop() previous: boolean;
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

    return styleClasses.join(' ');
  }

  render() {
    return (
      <li class={this.getClass()}>
      { !this.current ?
        <ecl-link
          theme={this.theme}
          variant="standalone"
          path={this.path}
          aria-label={this.ariaLabel}
          styleClass={`sc-ecl-pagination-${this.theme}`}
        >
          <slot></slot>
        { this.previous || this.next ? 
          <ecl-icon
            icon="corner-arrow"
            size="xs"
            theme={this.theme}
            transform={this.previous ? 'rotate-270' : 'rotate-90'}
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

