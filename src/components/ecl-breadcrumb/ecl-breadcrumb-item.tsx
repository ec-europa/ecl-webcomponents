import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ecl-breadcrumb-item',
  shadow: false,
  scoped: true,
})
export class EclBreadcrumbItem {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() variant: string;
  @Prop() path: string;
  @Prop() currentPage: boolean = false;
  @Prop() ellipsis: boolean = false;
  @Prop() buttonAriaLabel: string = '';

  getClass(): string {
    const styleClasses = [
      `ecl-breadcrumb__segment`,
      `sc-ecl-breadcrumb-${this.theme}`,
      this.styleClass
    ];

    if (this.ellipsis) {
      styleClasses.push('ecl-breadcrumb__segment--ellipsis');
    }

    return styleClasses.join(' ');
  }

  getLinkClass(): string {
    const linkClasses = [
      `sc-ecl-breadcrumb-${this.theme}`,
      'ecl-breadcrumb__link',
      'ecl-link--no-visited',
    ];

    if (this.variant === 'negative') {
      linkClasses.push('ecl-link--negative');
    }

    return linkClasses.join(' ');
  }

  getLiAttrs() {
    const attrs = { 'data-ecl-breadcrumb-item' : 'static' };
    if (this.ellipsis) {
      attrs['data-ecl-breadcrumb-ellipsis'] = 'data-ecl-breadcrumb-ellipsis';
    }

    return attrs;
  }

  render() {
    return (
      <li
        class={this.getClass()}
        {...this.getLiAttrs()}
      >
      { !this.currentPage && !this.ellipsis ? 
        <ecl-link
          variant="standalone"
          path={this.path}
          style-class={this.getLinkClass()}
        >
          <ecl-icon
            slot="icon-after"
            style-class={`ecl-breadcrumb__icon sc-ecl-breadcrumb-${this.theme}`}
            icon="corner-arrow"
            transform="rotate-90"
            size="2xs"
          ></ecl-icon>
          <slot></slot>
        </ecl-link> :
        <slot></slot>
      }
      { this.ellipsis ? 
        <ecl-button
          style-class={`ecl-breadcrumb__ellipsis sc-ecl-breadcrumb-${this.theme}`}
          variant="ghost"
          data-ecl-breadcrumb-ellipsis-button
          aria-label={this.buttonAriaLabel}
        >
          ...
          <ecl-icon
            style-class={`ecl-breadcrumb__icon sc-ecl-breadcrumb-${this.theme}`}
            size="2xs"
            transform="rotate-90"
            icon="corner-arrow"
            slot="icon-after"
          ></ecl-icon>
        </ecl-button> : '' 
      }
      { this.currentPage ?
        <slot></slot> : ''
      }
      </li>
    );
  }
}