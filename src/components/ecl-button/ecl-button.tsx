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
  @Prop() theme: string = 'ec';
  @Prop() hideLabel: boolean = false;    
  @Prop() ariaControls: string;
  @Prop() itemId: string;
  @Prop() showIndicator: boolean = false;
  @Prop() indicatorValue: string = '';

  @State() indicatorSlot: 'before' | 'after' = 'after';
  @State() hasLabelContent: boolean = false;

  componentDidLoad() {
    const dataAttrs = Object.keys(this.el.dataset);
    if (dataAttrs) {
      dataAttrs.forEach((attr) => {
        const button = this.el.firstElementChild as HTMLElement;
        const attrValue = this.el.dataset[attr];
        if (attrValue === '' || attrValue === attr) {
          button.dataset[attr] = attr;
        } else {
          button.dataset[attr] = attrValue;
        }
        delete this.el.dataset[attr];
      });
    }

    const iconEl = this.el.querySelector('ecl-icon');
    if (iconEl && iconEl.shadowRoot === null) {
      const slot = iconEl.getAttribute('slot');
      const svgIcon = this.el.querySelector('.ecl-icon');
      if (svgIcon) {
        svgIcon.classList.add('ecl-button__icon');
        if (slot && !this.hideLabel) {
          svgIcon.classList.add(`ecl-button__${slot.substring(0, 5)}-${slot.substring(5)}`);
        }
      }
    }

    const iconBefore = this.el.querySelector('[slot="icon-before"]');
    const iconAfter = this.el.querySelector('[slot="icon-after"]');

    if (iconBefore) {
      this.indicatorSlot = 'before';
    } else if (iconAfter) {
      this.indicatorSlot = 'after';
    }

    const labelEl = this.el.querySelector('.ecl-button__label');
    if (labelEl) {
      this.hasLabelContent = labelEl.textContent.trim() !== '';
    }
  }

  getClass(): string {
    return [
      'ecl-button',
      `ecl-button--${this.variant}`,
      this.hasLabelContent ? 'ecl-button--has-label' : '',
      this.styleClass,
    ].join(' ').trim();
  }

  render() {
    return (
      <button
        class={this.getClass()}
        type={this.type}
        {...(this.ariaControls && { 'aria-controls': this.ariaControls })}
        {...(this.itemId && { id: this.itemId })}
      >
        <span class="ecl-button__container">
          <span class="ecl-button__icon-container">
            <slot name="icon-before"></slot>
            {this.showIndicator && this.hideLabel && this.indicatorSlot === 'before' && (
              <ecl-indicator value={this.indicatorValue}></ecl-indicator>
            )}
          </span>

          {!this.hideLabel ? (
            <span class="ecl-button__label">
              <slot></slot>
            </span>
          ) : (
            <span class="ecl-u-sr-only" data-ecl-label>
              <slot></slot>
            </span>
          )}

          <span class="ecl-button__icon-container">
            <slot name="icon-after"></slot>
            {this.showIndicator && this.hideLabel && this.indicatorSlot === 'after' && (
              <ecl-indicator value={this.indicatorValue}></ecl-indicator>
            )}
          </span>
        </span>
      </button>
    );
  }
}
