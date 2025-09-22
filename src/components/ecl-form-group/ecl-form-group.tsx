import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-form-group',
  styleUrls: {
    ec: './build/styles/ecl-form-group-ec.css',
    eu: './build/styles/ecl-form-group-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclFormGroup {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() label: string;
  @Prop() invalid: boolean = false;
  @Prop() required: boolean = false;
  @Prop() requiredText: string = '*';
  @Prop() optionalText: string;
  @Prop() invalidText: string;
  @Prop() helperText: string;
  @Prop() helperId: string;
  @Prop() hideLabel: boolean = false;
  @Prop() labelTag: string = 'label';
  @Prop() tag: string = 'div';
  @Prop() name: string;
  @Prop() invalidIcon: string = 'error';
  @Prop() labelClass: string;
  @Prop() ariaLabelOptional: string;
  @Prop() ariaLabelRequired: string;

  getClass(): string {
    return [
      `ecl-form-group`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidRender() {
    if (this.hideLabel) {
      const inputs = this.el.querySelectorAll('ecl-input');
      if (inputs.length === 1 && (inputs[0].getAttribute('type') === 'checkbox' || inputs[0].getAttribute('type') === 'radio')) {
        const label = inputs[0].querySelector('.ecl-checkbox__text') || inputs[0].querySelector('.ecl-radio__text');
        if (label) {
          const span = document.createElement('span');
          if (this.required) {
            span.className = `ecl-form-label__required sc-ecl-form-group-${this.theme}`;
            span.textContent = this.requiredText;
          } else if (this.optionalText) {
              span.className = `ecl-form-label__optional sc-ecl-form-group-${this.theme}`;
              span.textContent = this.optionalText;
          }
          if (span.textContent) {
            label.after(span);
          }
        }
      }
    }
  }

  render() {
    return (
      <this.tag
        class={this.getClass()}
        aria-describedby={this.helperId}
      >
      { this.label ?
        <this.labelTag
          class={`ecl-form-label ${this.invalid ? 'ecl-form-label--invalid' : ''} ${this.hideLabel ? 'ecl-form-label--hidden' : ''} ${this.labelClass || ''}`}
          {...(this.ariaLabelRequired ? { 'aria-label': this.ariaLabelRequired } : {})}
        >
          {this.label}
      {this.required && this.requiredText ? (
        <span
          class="ecl-form-label__required"
          role="note"
          {...(this.ariaLabelRequired ? { 'aria-label': this.ariaLabelRequired } : {})}
        >
          {this.requiredText}
        </span>
      ) : ''}
      { !this.required && this.optionalText ?
        <span
          class="ecl-form-label__optional"
          role="note"
          {...(this.ariaLabelOptional ? { 'aria-label': this.ariaLabelOptional } : {})}
        >
          {this.optionalText}</span> : ''
      }
        </this.labelTag> : ''
      }
      { this.helperText ? 
        <div
          class="ecl-help-block"
        >
          {this.helperText}
        </div> : ''
      }
        <slot></slot>
      { this.invalid && this.invalidText ?
        <div class="ecl-feedback-message">
        { this.invalidIcon ? 
          <ecl-icon
            styleClass={`ecl-feedback-message__icon sc-ecl-form-group-${this.theme}`}
            icon={this.invalidIcon}
            size="xs"
          ></ecl-icon> : '' 
        }
          {this.invalidText}
        </div> : '' 
      }
      </this.tag>
    )
  }
}