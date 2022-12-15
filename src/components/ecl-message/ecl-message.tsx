import { Component, h, Prop, getAssetPath, Element } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-message',
  styleUrls: {
    ec: './build/styles/ecl-message-ec.css',
    eu: './build/styles/ecl-message-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclMessage {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() variant: string = 'info';
  @Prop() styleClass: string;
  @Prop() messageTitle: string;
  @Prop() closeLabel: string;
  @Prop() eclScript: boolean = false;
  @Prop() withUtils: boolean = false;


  getClass(): string {
    return [
      `ecl-message`,
      `ecl-message--${this.getVariant()}`,
      this.styleClass
    ].join(' ');
  }

  getVariant() : string {
    return this.variant === 'information' ? 'info' : this.variant;
  }

  componentDidRender() {
    if (this.withUtils && !document.querySelector('#ecl-utils-styles')) {
      const style = document.createElement('style');
      style.id = 'ecl-utils-styles';
      style.innerHTML = `@import "./build/styles/ecl-utilities-${this.theme}.css"`;
      document.body.appendChild(style);
    }
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-message-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const message = new ECL.Message(this.el.firstElementChild);
        message.init();
      };
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div
        class={this.getClass()}
        data-ecl-message role="alert"
      >
        <ecl-icon 
          icon={this.variant}
          size={this.theme === 'ec' ? 'l' : 'm'}
          style-class={`ecl-message__icon sc-ecl-message-${this.theme}`}
        >
        </ecl-icon>
        <div class="ecl-message__content">
          <ecl-button
            type="ghost"
            style-class={`ecl-message__close sc-ecl-message-${this.theme}`}
            data-ecl-message-close
          >
            {this.closeLabel}
            <ecl-icon
              slot="icon-after"
              icon="close-filled"
              theme={this.theme}
              style-class="ecl-button__icon ecl-button__icon--after" 
            ></ecl-icon>
          </ecl-button>
          { this.messageTitle ?
            <div class="ecl-message__title">{this.messageTitle}</div>
           : '' }
          <div class="ecl-message__description">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
