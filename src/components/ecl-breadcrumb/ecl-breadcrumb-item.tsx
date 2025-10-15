import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-breadcrumb-item',
  shadow: false,
})
export class EclBreadcrumbItem {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() path: string;
  @Prop() currentPage: boolean = false;
  @Prop() ellipsis: boolean = false;
  @Prop() buttonAriaLabel: string = '';

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

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

    return styleClasses.join(' ');
  }

  getLinkClass(): string {
    const linkClasses = [
      'ecl-link',
      `sc-ecl-link-${this.theme}`,
      `sc-ecl-breadcrumb-${this.theme}`,
      'ecl-link--standalone',
      'ecl-link--no-visited',
      'ecl-breadcrumb__link'
    ];

    return linkClasses.join(' ');
  }

  getLiAttrs() {
    const attrs = { 'data-ecl-breadcrumb-item' : 'static' };
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
      <li class={this.getClass()} {...this.getLiAttrs()}>
        { !this.currentPage && !this.ellipsis ?
          [
            <ecl-link
              variant="standalone"
              path={this.path}
              style-class={this.getLinkClass()}
            >
              <slot></slot>
            </ecl-link>,
            <ecl-icon
              style-class={`ecl-breadcrumb__icon sc-ecl-breadcrumb-${this.theme}`}
              icon="corner-arrow"
              rotate="90"
              size="fluid"
            ></ecl-icon>
          ]
          :
          <slot></slot>
        }

        { this.ellipsis ?
          [
            <ecl-button
              style-class={`ecl-breadcrumb__ellipsis sc-ecl-breadcrumb-${this.theme}`}
              variant="ghost"
              data-ecl-breadcrumb-ellipsis-button
              aria-label={this.buttonAriaLabel}
            >
              ...
            </ecl-button>,
            <ecl-icon
              style-class={`ecl-breadcrumb__icon sc-ecl-breadcrumb-${this.theme}`}
              size="fluid"
              rotate="90"
              icon="corner-arrow"
            ></ecl-icon>
          ] : ''
        }

        { this.currentPage ?
          <slot></slot> : ''
        }
      </li>
    );
  }

}
