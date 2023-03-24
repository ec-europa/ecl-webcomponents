import { Component, h, Prop, Element, getAssetPath } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-input',
  styleUrls: {
    ec: './build/styles/ecl-input-ec.css',
    eu: './build/styles/ecl-input-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclInput {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() inputClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() withUtils: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() invalid: boolean = false;
  @Prop() helperId: string;
  @Prop() helperText: string;
  @Prop() placeholder: string;
  @Prop() width: string = 'm';
  @Prop() label: string;
  @Prop() type: string;
  @Prop() inputId: string;
  @Prop() name: string;
  @Prop() defaultValue: string;
  @Prop() max: number;
  @Prop() min: number;
  @Prop() step: number = 1;
  @Prop() valueLabel: string;
  @Prop() buttonChooseLabel: string;
  @Prop() buttonReplaceLabel: string;
  @Prop() multiple: boolean = false;

  getClass(): string {
    const styleClasses = ['ecl-input', this.styleClass];
    if (this.type === 'checkbox') {
      styleClasses.push('ecl-checkbox', `ecl-checkbox--${this.width}`);

      if (this.disabled) {
        styleClasses.push('ecl-checkbox--disabled');
      }
      if (this.invalid) {
        styleClasses.push('ecl-checkbox--invalid');
      }
    }
    if (this.type === 'radio') {
      styleClasses.push('ecl-radio', `ecl-radio--${this.width}`);

      if (this.disabled) {
        styleClasses.push('ecl-radio--disabled');
      }
      if (this.invalid) {
        styleClasses.push('ecl-radio--invalid');
      }
    }

    return styleClasses.join(' ');
  }

  getInputClasses(input): string {
    let inputClasses = [`ecl-${input}__input`];

    if (this.type === 'range') {
      inputClasses = ['ecl-range', `ecl-range--${this.width}`];
    }
    if (this.type === 'file') {
      inputClasses = ['ecl-file-upload'];
    }
    if (this.type === 'text' || this.type === 'search') {
      inputClasses = ['ecl-text-input', `ecl-text-input--${this.width}`];
      if (this.invalid) {
        inputClasses.push('ecl-text-input--invalid');
      }
      if (this.disabled) {
        inputClasses.push('ecl-text-input--disabled');
      }
    }
    if (this.inputClass) {
      inputClasses.push(this.inputClass);
    }

    return inputClasses.join(' ');
  }

  getBoxClasses(input, box): string {
    let boxClasses = [`ecl-${input}__${box}`];
    if (this.disabled) {
      boxClasses.push(`ecl-${input}__${box}--disabled`);
    }
    if (this.invalid) {
      boxClasses.push(`ecl-${input}__${box}--invalid`);
    }

    return boxClasses.join(' ');
  }

  componentWillLoad() {
    if (this.withUtils && !document.querySelector('#ecl-utils-styles')) {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.id = 'ecl-utils-styles';
      style.href = getAssetPath(`./build/styles/ecl-utilities-${this.theme}.css`);
      document.body.appendChild(style);
    }
  }

  componentDidRender() {
    if (this.type === 'range' && this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-range-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const formGroup = this.el.closest('.ecl-form-group');
        formGroup.setAttribute('data-ecl-range', 'data-ecl-range');
        const range = new ECL.Range(formGroup);
        range.init();
      };
      document.body.appendChild(script);
    }
    if (this.type === 'file' && this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-file-upload-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const fileUpload = new ECL.FileUpload(this.el.firstElementChild);
        fileUpload.init();
      };
      // @ts-ignore
      const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const nodes = mutation.addedNodes;
            nodes.forEach(node => {
              const htmlNode = node as HTMLElement;
              htmlNode.classList.add(`sc-ecl-input-${this.theme}`);
              const name = htmlNode.querySelector('.ecl-file-upload__item-name');
              if (name) {
                name.classList.add(`sc-ecl-input-${this.theme}`);
              }
              const meta = htmlNode.querySelector('.ecl-file-upload__item-meta');
              if (meta) {
                meta.classList.add(`sc-ecl-input-${this.theme}`);
              }
            });
          }
        }
      });

      observer.observe(this.el.querySelector('.ecl-file-upload__list'), {
        attributes: true,
        childList: true,
        subtree: true,
      });
      document.body.appendChild(script);
    }
  }

  render() {
    const wrapperAttrs = {};
    if (this.type === 'range') {
      wrapperAttrs['data-ecl-range'] = true;
    }
    if (this.type === 'file') {
      wrapperAttrs['data-ecl-file-upload-group'] = true
    }
    const attributes = {
      class: this.getInputClasses(this.type),
      type: this.type,
      id: this.inputId,
      name: this.name,
      required: this.required,
      disabled: this.disabled,
      value: this.defaultValue,
      placeholder: this.placeholder,
    };

    if (this.type === 'file') {
      attributes['data-ecl-file-upload-input'] = true;
      attributes['multiple'] = this.multiple;
    }

    if (this.type === 'range') {
      attributes['data-ecl-range-input'] = true;
      attributes['min'] = this.min;
      attributes['max'] = this.max;
      attributes['step'] = this.step;
    }

    return (
      <div 
        class={this.getClass()}
        {...wrapperAttrs}
      >
        <input {...attributes} />
      { this.type === 'checkbox' ?
        <label
          class={this.getBoxClasses('checkbox', 'label')}
          htmlFor={this.inputId}
        >
          <span class={this.getBoxClasses('checkbox', 'box')}>
            <ecl-icon
              style-class={`ecl-checkbox__icon sc-ecl-input-${this.theme}`}
              icon="check"
              size="m"
              ></ecl-icon>
          </span>
          <span class="ecl-checkbox__text">{this.label}</span>
        </label>
        : ''
      }
      { this.type === 'checkbox' && this.helperText ?
        <div
          class="ecl-checkbox__help"
          id={this.helperId}
        >
          {this.helperText}
        </div>
        : ''
      }
      { this.type === 'radio' ?
        <label 
          class={this.getBoxClasses('radio', 'label')}
          htmlFor={this.inputId}
        >
          <span class={this.getBoxClasses('radio', 'box')}>
            <span class="ecl-radio__box-inner"></span>
          </span>
          <span class="ecl-radio__text">{this.label}</span>
        </label>
        : ''
      }
      { this.type === 'radio' && this.helperText ?
        <div 
          class="ecl-radio__help"
          id={this.helperId}
        >
          {this.helperText}
        </div>
        : ''
      }
      { this.type === 'range' ?
        <div class="ecl-range__value">
          {this.valueLabel}
          <span class="ecl-range__value-current" data-ecl-range-value-current> </span>
        </div> : ''
      }
      { this.type === 'file' ?
        <label
          class="ecl-file-upload__button-container"
          htmlFor={this.inputId}
        >
          <span
            class="ecl-file-upload__button ecl-button ecl-button--primary"
            data-ecl-file-upload-button
            data-ecl-file-upload-label-choose={this.buttonChooseLabel}
            data-ecl-file-upload-label-replace={this.buttonReplaceLabel}
          >
            {this.buttonChooseLabel}
          </span>
        </label> : '' 
      }
      { this.type === 'file' ?
        <ul
          class="ecl-file-upload__list"
          data-ecl-file-upload-list
          > 
        </ul> : ''
      }
      </div>
    );
  }
}