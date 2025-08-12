import { Component, Prop, h, Element, State } from '@stencil/core';

@Component({
  tag: 'ecl-button',
  styleUrls: {
    ec: './build/styles/ecl-button-ec.css',
    eu: './build/styles/ecl-button-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclButton {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() type: string = 'submit';
  @Prop() variant: string = 'primary';
  @Prop({ mutable: true }) theme: string;
  @Prop() hideLabel: boolean = false;    
  @Prop() ariaControls: string;
  @Prop() itemId: string;
  @Prop() indicator: boolean = false;
  @Prop() indicatorValue: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @State() hasLabelContent: boolean = false;

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const dataAttrs = Object.keys(this.el.dataset);
    if (dataAttrs) {
      dataAttrs.forEach((attr) => {
        const button = this.el.querySelector('button');
        const attrValue = this.el.dataset[attr];
        if (attrValue === '' || attrValue === attr) {
          button.dataset[attr] = attr;
        } else {
          button.dataset[attr] = attrValue;
        }
        delete this.el.dataset[attr];
      });
    }

    const attributes = this.el.attributes;
    Array.from(attributes).forEach((attr) => {
      if (attr.name.startsWith('aria-')) {
        this.el.querySelector('button').setAttribute(attr.name, attr.value);
      }
    });

    if (this.el.getElementsByTagName('ecl-icon')[0] && this.el.querySelector('.ecl-icon')) {
      this.el.querySelector('.ecl-icon').classList.add('ecl-button__icon', `sc-ecl-button-${this.theme}`);
    }
  }

  getClass(): string {
    return [
      'ecl-button',
      `ecl-button--${this.variant}`,
      this.hideLabel ? 'ecl-button--icon-only' : '',
      this.styleClass,
    ].join(' ').trim();
  }

  private get hasIconBefore(): boolean {
    return !!this.el.querySelector('[slot="icon-before"]');
  }
  
  private get hasIconAfter(): boolean {
    return !!this.el.querySelector('[slot="icon-after"]');
  }

  render() {
    return (
      <button
        class={this.getClass()}
        type={this.type}
        disabled={this.disabled}
        {...(this.itemId && { id: this.itemId })}
      >
        <span class="ecl-button__container">
          {this.hasIconBefore && !this.indicator && (
            <slot name="icon-before"></slot>
          )}
          {this.indicator && this.hasIconBefore && (
            <span class="ecl-button__icon-container">
              <slot name="icon-before"></slot>
              <ecl-indicator ecl-script value={this.indicatorValue}></ecl-indicator>
            </span>
          )}

          {!this.hideLabel ? (
            <span class="ecl-button__label">
              <slot></slot>
            </span>
          ) : (
            <span class="ecl-u-sr-only" data-ecl-label>
              <slot></slot>
            </span>
          )}

          {this.hasIconAfter && !this.indicator && (
            <slot name="icon-after"></slot>
          )}
          {this.indicator && this.hasIconAfter && (
            <span class="ecl-button__icon-container">
              <slot name="icon-after"></slot>
              <ecl-indicator ecl-script value={this.indicatorValue}></ecl-indicator>
            </span>
          )}
        </span>
      </button>
    );
  }
}
