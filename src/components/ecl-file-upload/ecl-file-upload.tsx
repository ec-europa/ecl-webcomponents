import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-file-upload',
  styleUrls: {
    ec: './build/styles/ecl-file-upload-ec.css',
    eu: './build/styles/ecl-file-upload-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclFileUpload {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() inputClass: string;
  @Prop() eclScript: boolean = false;
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
  @Prop() multiple: boolean = false;
  @Prop() defaultValue: string;
  @Prop() buttonChooseLabel: string;
  @Prop() buttonReplaceLabel: string;

  getClass(): string {
    const styleClasses = ['ecl-input', this.styleClass];

    return styleClasses.join(' ');
  }

  getInputClasses(): string {
    const inputClasses = ['ecl-file-upload'];
    
    if (this.inputClass) {
      inputClasses.push(this.inputClass);
    }

    return inputClasses.join(' ');
  }

  componentDidRender() {
    if (this.inputId) {
      const group = this.el.closest('.ecl-form-group');
      if (group) {
        const label =  group.querySelector('.ecl-form-label');
        if (label) {
          label.setAttribute('for', this.inputId);
          label.setAttribute('id', `${this.inputId}-label`);
        }
        const helper = group.querySelector('.ecl-help-block');
        if (helper) {
          helper.setAttribute('id', `${this.inputId}-helper`);
        }
      }
    }
    if (this.eclScript) {
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
              htmlNode.classList.add(`sc-ecl-file-upload-${this.theme}`);
              const name = htmlNode.querySelector('.ecl-file-upload__item-name');
              if (name) {
                name.classList.add(`sc-ecl-file-upload-${this.theme}`);
              }
              const meta = htmlNode.querySelector('.ecl-file-upload__item-meta');
              if (meta) {
                meta.classList.add(`sc-ecl-file-upload-${this.theme}`);
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
    wrapperAttrs['data-ecl-file-upload-group'] = true;
    
    const attributes = {
      class: this.getInputClasses(),
      type: this.type,
      id: this.inputId,
      name: this.name,
      required: this.required,
      disabled: this.disabled,
      placeholder: this.placeholder,
      'data-ecl-file-upload-input': true,
      multiple: this.multiple,
      value: this.defaultValue,
    }

    return (
      <div 
        class={this.getClass()}
        {...wrapperAttrs}
      >
        <input {...attributes} />

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
        </label>
        <ul
          class="ecl-file-upload__list"
          data-ecl-file-upload-list
          > 
        </ul> 
      </div>
    );
  }
}