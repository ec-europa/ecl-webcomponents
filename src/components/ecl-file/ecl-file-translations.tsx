import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-file-translations',
  shadow: false,
})

export class EclFileTranslations {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() toggleLabel: string;
  @Prop() others: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-file__translation-container`,
      `sc-ecl-file-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentDidRender() {
    const translationsTotal = this.el.querySelectorAll('.ecl-file__translation-item').length as unknown as string;
    const text = document.createTextNode(`( ${translationsTotal} )`);
    if (this.el.querySelector('.ecl-file__translation-toggle')) {
      this.el.querySelector('.ecl-file__translation-toggle .ecl-button__label').appendChild(text);
    }
  }

  render() { 
    return (
      <div 
        class={this.getClass()}
        data-ecl-file-translation-container
      >
        <ecl-button
          styleClass={`ecl-file__translation-toggle sc-ecl-file-${this.theme}`}
          variant="ghost"
          data-ecl-file-translation-toggle
          theme={this.theme}
        >
          {this.toggleLabel}
          <ecl-icon
            styleClass="ecl-button__icon ecl-button__icon--after"
            icon="corener-arrow"
            transform="rotate-180"
            size="fluid"
          >
          </ecl-icon>
        </ecl-button>
        <ul class={`ecl-file__translation-list sc-ecl-file-${this.theme}`}>
          <slot></slot>
        { this.others ?
          <li 
            class={`ecl-file__translation-item ecl-file__translation-description sc-ecl-file-${this.theme}`}
          >
            <slot name="others"></slot>
          </li> : '' }
        </ul>
      </div>
    );
  }
}
