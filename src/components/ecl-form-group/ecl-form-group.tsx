import { Component, Prop, h } from '@stencil/core';

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
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() label: string;
  @Prop() invalid: boolean = false;
  @Prop() required: boolean = false;
  @Prop() requiredText: string = '*';
  @Prop() optionalText: string;
  @Prop() invalidText: string;
  @Prop() helperText: string;
  @Prop() helperId: string;
  @Prop() name: string;
  @Prop() invalidIcon: string = 'error';
  @Prop() labelClass: string;

  getClass(): string {
    return [
      `ecl-form-group`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <fieldset
        class={this.getClass()}
        aria-describedby={this.helperId}
      >
      { this.label ?
        <legend
          class={`ecl-form-label ${this.invalid ? 'ecl-form-label--invalid' : ''} ${this.labelClass || ''}`}
        >
          {this.label}
      { this.required && this.requiredText ?
        <span class="ecl-form-label__required">{this.requiredText}</span> : ''
      }
      { !this.required && this.optionalText ?
        <span class="ecl-form-label__optional">{this.optionalText}</span> : ''
      }
        </legend> : ''
      }
      { this.helperText ? 
        <div
          class="ecl-help-block"
        >
          {this.helperText}
        </div> : ''
      }
      { this.invalid && this.invalidText ?
        <div class="ecl-feedback-message">
        { this.invalidIcon ? 
          <ecl-icon
            styleClass={`ecl-feedback-message__icon sc-ecl-form-group-${this.theme}`}
            icon={this.invalidIcon}
            size="m"
          ></ecl-icon> : '' 
        }
          {this.invalidText}
        </div> : '' 
      }
        <slot></slot>
      </fieldset>
    )
  }
}