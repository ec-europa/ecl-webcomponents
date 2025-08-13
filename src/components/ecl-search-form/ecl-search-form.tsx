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
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() invalid: boolean = false;
  @Prop() invalidText: string;
  @Prop() helperId: string;
  @Prop() helperText: string;
  @Prop() placeholder: string;
  @Prop() inputId: string = `ecl-search-form-${Math.random().toString(36).slice(2, 10)}`;
  @Prop() inputDefaultValue: string;
  @Prop() label: string;
  @Prop() type: string;
  @Prop() name: string;
  @Prop() buttonLabel: string;
  @Prop() buttonAriaLabel: string;

  getClass(): string {
    const styleClasses = ['ecl-search-form', this.styleClass];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
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
            style-class={`sc-ecl-search-form-${this.theme}`}
            type="search"
            input-class={`ecl-search-form__text-input sc-ecl-search-form-${this.theme}`}
            theme={this.theme}
            input-id={this.inputId}
            required={this.required}
            disabled={this.disabled}
            invalid={this.invalid}
            placeholder={this.placeholder}
            default-value={this.inputDefaultValue}
          >
          </ecl-input>
        </ecl-form-group>
        <ecl-button
          style-class={`ecl-search-form__button sc-ecl-search-form-${this.theme}`}
          aria-label={this.buttonAriaLabel}
          variant={this.theme === 'ec' ? 'ghost' : 'primary'}
          type="search"
          theme={this.theme}
        >
          {this.buttonLabel}
          <ecl-icon
            style-class={`sc-ecl-search-form-${this.theme}`}
            slot="icon-before"
            icon="search"
            size="xs"
            theme={this.theme}
          >
          </ecl-icon>
        </ecl-button>
      </form>
    );
  }
}