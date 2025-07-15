import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-breadcrumb-item',
  shadow: false,
})
export class EclBreadcrumbItem {
  @Element() el: HTMLElement;
  @Prop() theme: string;
  @Prop() styleClass: string = '';
  @Prop() path: string = '';
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

    if (this.currentPage) {
      styleClasses.push('ecl-breadcrumb__current-page');
    }

    return styleClasses.filter(Boolean).join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  getLinkClass(): string {
    return [
      'ecl-link',
      'sc-ecl-link-ec',
      `sc-ecl-breadcrumb-${this.theme}`,
      'ecl-link--standalone', 
      'ecl-link--no-visited',
      'ecl-breadcrumb__link'
    ].join(' ');
  }

  getLiAttrs() {
    const attrs: any = {};

    if (this.ellipsis) {
      attrs['data-ecl-breadcrumb-ellipsis'] = '';
      attrs['aria-hidden'] = 'true';
    }

    if (this.currentPage) {
      attrs['aria-current'] = 'page';
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
          <slot></slot>
        </ecl-link> :
        <slot></slot>
      }
      {this.ellipsis &&
        [
          <ecl-button
            style-class={`ecl-breadcrumb__ellipsis sc-ecl-breadcrumb-${this.theme}`}
            variant="ghost"
            data-ecl-breadcrumb-ellipsis-button
            aria-label={this.buttonAriaLabel}
            key="button"
          >
            ...
          </ecl-button>,
          <ecl-icon
            slot="icon-after"
            style-class={`ecl-breadcrumb__icon sc-ecl-breadcrumb-${this.theme}`}
            icon="corner-arrow"
            size="fluid"
            transform="rotate-90"
            role="presentation"
          ></ecl-icon>
        ]
      }
      {this.currentPage ? (
        <slot></slot>
      ) : null}

        {!this.currentPage && !this.ellipsis ? (
          <ecl-icon
            slot="icon-after"
            style-class={`ecl-breadcrumb__icon sc-ecl-breadcrumb-${this.theme}`}
            icon="corner-arrow"
            size="fluid"
            transform="rotate-90"
            role="presentation"
          ></ecl-icon>
        ) : null}
      </li>
    );
  }
}
