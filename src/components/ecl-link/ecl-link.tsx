import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-link',
  styleUrls: {
    ec: './build/styles/ecl-link-ec.css',
    eu: './build/styles/ecl-link-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclLink {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() path: string;
  @Prop() styleClass: string;
  @Prop() inverted: boolean = false;
  @Prop() noVisited: boolean = false;
  @Prop() variant: string = 'default';
  @Prop() titleAttr: string;
  @Prop() external: boolean = false;
  @Prop() ariaLabel: string;
  @Prop() srExternal: string;
  @Prop() name: string;
  @Prop() target: string;
  @Prop() download: boolean = false;
  @Prop() indicator: boolean = false;
  @Prop() indicatorValue: string;

  getClass(): string {
    const styleClasses = [
      `ecl-link`,
      this.styleClass
    ];

    if (this.variant) {
      styleClasses.push(`ecl-link--${this.variant}`);
    }

    if (this.inverted) {
      styleClasses.push('ecl-link--inverted');
    }

    if (this.noVisited) {
      styleClasses.push('ecl-link--no-visited');
    }

    if (this.el.querySelector('ecl-icon')) {
      styleClasses.push('ecl-link--icon');
      if (this.el.querySelector('ecl-icon').getAttribute('slot') === 'icon-after') {
        styleClasses.push('ecl-link--icon-after');
      } else {
        styleClasses.push('ecl-link--icon-before');
      }
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const dataAttrs = Object.keys(this.el.dataset);
    if (dataAttrs) {
      dataAttrs.forEach((attr) => {
        const link = this.el.firstElementChild as HTMLElement;
        link.dataset[attr] = '';
        delete this.el.dataset[attr];
      });
    }

    if (this.el.querySelector('ecl-icon')) {
      this.el.querySelector('ecl-icon svg').classList.add('ecl-link__icon');
      if (this.el.querySelector('ecl-icon').getAttribute('slot') === 'icon-after') {
        this.el.querySelector('ecl-icon svg').classList.add('ecl-link__icon--after');
      } else {
        this.el.querySelector('ecl-icon svg').classList.add('ecl-link__icon--before');
      }
    }
  }

  getExternal() {
    return (
      <ecl-icon 
        icon="external"
        style-class={`ecl-link__icon ecl-link__icon--after sc-ecl-link-${this.theme}`}
        size="2xs"
        title-tag={this.srExternal}
      >
      </ecl-icon>
    )  
  }

  getAttrs() {
    const attrs = {
      'class': this.getClass(),
      'href': this.path,
    };

    if (this.titleAttr) {
      attrs['title'] = this.titleAttr;
    }
    if (this.download) {
      attrs['download'] = true;
    }
    if (this.ariaLabel && !this.external) {
      attrs['aria-label'] = this.ariaLabel;
    }
    if (this.target) {
      attrs['target'] = this.target;
    }

    return attrs;
  }

  private get hasIconBefore(): boolean {
    return !!this.el.querySelector('[slot="icon-before"]');
  }

  private get hasIconAfter(): boolean {
    return !!this.el.querySelector('[slot="icon-after"]');
  }

  render() {
    return (
      <a {...this.getAttrs()}>
      {this.hasIconBefore && !this.indicator && (
        <slot name="icon-before"></slot>
      )}
      {this.indicator && this.hasIconBefore && (
        <span class="ecl-link__icon-container">
          <slot name="icon-before"></slot>
          <ecl-indicator ecl-script value={this.indicatorValue}></ecl-indicator>
        </span>
      )}
        <slot></slot>
      {(this.external || (this.hasIconAfter && !this.indicator)) && (
        <slot name="icon-after">{ this.external ? this.getExternal() : '' }</slot>
      )}
      {this.indicator && this.hasIconAfter && (
        <span class="ecl-link__icon-container">
          <slot name="icon-after"></slot>
          <ecl-indicator ecl-script value={this.indicatorValue}></ecl-indicator>
        </span>
      )}
      </a>
    );
  }
}
