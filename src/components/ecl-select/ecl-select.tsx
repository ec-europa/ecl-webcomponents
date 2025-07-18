import { Component, h, Prop, State, Element, Event, EventEmitter } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-select',
  styleUrls: {
    ec: './build/styles/ecl-select-ec.css',
    eu: './build/styles/ecl-select-eu.css',
  },
  shadow: false,
  scoped: false,
  assetsDirs: ['build'],
})

export class EclSelect {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() invalid: boolean = false;
  @Prop() width: string = 'm';
  @Prop() selectId: string;
  @Prop() name: string;
  @Prop() multiple: boolean = false;
  @Prop() multiplePlaceholder: string;
  @Prop() multipleSearchText: string;
  @Prop() multipleSearchNoResultsText: string;
  @Prop() multipleAllText: string;
  @Prop() multipleClearAllText: string;
  @Prop() multipleCloseText: string;
  @Prop() inputValue: string;
  @State() selectValue: string[];
  @Prop() hasChanged: boolean = false;
  @State() isFocused: boolean = false;
  @Event() inputChange: EventEmitter;
  @Event() inputFocus: EventEmitter<FocusEvent>;
  @Event() inputBlur: EventEmitter<FocusEvent>;

  getClass(): string {
    const styleClasses = [
      `ecl-select__container`,
      `ecl-select__container--${this.width}`,
      this.styleClass
    ];

    if (this.disabled) {
      styleClasses.push('ecl-select__container--disabled');
    }
    if (this.invalid) {
      styleClasses.push('ecl-select__container--invalid');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.selectValue = JSON.parse(this.inputValue || '[]');
  }

  componentDidLoad() {
    if (this.selectId) {
      const group = this.el.closest('.ecl-form-group');
      if (group) {
        const label =  group.querySelector('.ecl-form-label');
        if (label) {
          label.setAttribute('id', `${this.selectId}-label`);
        }
        const helper = group.querySelector('.ecl-help-block');
        if (helper) {
          helper.setAttribute('id', `${this.selectId}-helper`);
        }
      }
    }
    if (this.eclScript && this.multiple) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-select-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const select = new ECL.Select(this.el.getElementsByTagName('select')[0]);
        select.init();
      };

      document.body.appendChild(script);
    }

    if (this.inputValue) {
      this.handleSelection();
    }
  }

  handleFocus(event) {
    this.inputFocus.emit(event);
    this.isFocused = true;
  }

  handleChange(event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    this.selectValue = selectedOptions;
    this.inputChange.emit(this.selectValue);
  }

  private handleSelection() {;
    const options = this.el.querySelectorAll('option');
    options.forEach((option: HTMLOptionElement) => {
      const optionValue = String(option.value);
      option.selected = this.selectValue.some(val => String(val) === optionValue);
    });
  }

  handleBlur(event) {
    this.inputBlur.emit(event);
    this.isFocused = false;
  }

  render() {
    let attributes = {
      class: 'ecl-select',
      id: this.selectId,
      name: this.name,
      required: this.required,
      disabled: this.disabled,
      value: this.inputValue,
    };

    if (this.multiple) {
      attributes['multiple'] = 'data-ecl-select-multiple';
      attributes['data-ecl-select-default'] = this.multiplePlaceholder;
      attributes['data-ecl-select-no-results'] = this.multipleSearchNoResultsText;
      attributes['data-ecl-select-all'] = this.multipleAllText;
      attributes['data-ecl-select-clear-all'] = this.multipleClearAllText;
      attributes['data-ecl-select-close'] = this.multipleCloseText;
      attributes['data-ecl-select-search'] = this.multipleSearchText;
    }

    return (
      <div 
        class={this.getClass()}
        role="application"
      >
        <select
          {...attributes}
          onFocus={ev => this.handleFocus(ev)}
          onBlur={ev => this.handleBlur(ev)}
          onChange={ev => this.handleChange(ev)}
          onInput={ev => this.handleChange(ev)}
        >
          <slot></slot>
        </select>
        <div class="ecl-select__icon">
          <ecl-icon
            theme={this.theme}
            style-class={`ecl-select__icon-shape sc-ecl-select-${this.theme}`}
            icon="corner-arrow"
            size="s"
            transform="rotate-180"
            ></ecl-icon>
        </div>
      </div>
    );
  }
}