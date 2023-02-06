import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-search-form',
  styleUrls: {
    ec: './build/styles/ecl-search-form-ec.css',
    eu: './build/styles/ecl-search-form-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclSearchForm {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() invalid: boolean = false;
  @Prop() invalidText: string;
  @Prop() helperId: string;
  @Prop() helperText: string;
  @Prop() placeholder: string;
  @Prop() inputId: string;
  @Prop() width: string = 'm';
  @Prop() label: string;
  @Prop() type: string;
  @Prop() name: string;
  @Prop() buttonLabel: string;
  @Prop() buttonAriaLabel: string;

  getClass(): string {
    const styleClasses = ['ecl-search-form', this.styleClass];

    return styleClasses.join(' ');
  }

  render() {
    return (
      <form
        class={this.getClass()}
        role="search"
      >
        <ecl-form-group
          style-class={`sc-ecl-search-form-${this.theme}`}
          label={this.label}
          required={this.required}
          invalid={this.invalid}
          invalid-text={this.invalidText}
          theme={this.theme}
        >
          <ecl-input
            style-class={`ecl-search-form__text-input sc-ecl-search-form-${this.theme}`}
            type="search"
            theme={this.theme}
            input-id={this.inputId}
            required={this.required}
            disabled={this.disabled}
            invalid={this.invalid}
            width="m"
            placeholder={this.placeholder}
          >
          </ecl-input>
        </ecl-form-group>
        <ecl-button
          style-class={`ecl-search-form__button sc-ecl-search-form-${this.theme}`}
          type="submit"
          aria-label={this.buttonAriaLabel}
        >
          {this.buttonLabel}
          <ecl-icon
            style-class={`sc-ecl-search-form-${this.theme}`}
            slot="icon-after"
            icon="search"
            size="xs"
          >
          </ecl-icon>
        </ecl-button>
      </form>
    );
  }
}