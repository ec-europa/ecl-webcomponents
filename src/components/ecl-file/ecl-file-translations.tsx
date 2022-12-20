import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-file-translations',
  shadow: false,
})

export class EclFileTranslations {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() toggleLabel: string;
  @Prop() translationsTotal: number;
  @Prop() others: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-file__translation-container`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  render() { 
    return (
      <div 
        class={this.getClass()}
        data-ecl-file-translation-container
      >
        <ecl-button
          styleClass="ecl-file__translation-toggle"
          type="ghost"
          data-ecl-file-translation-toggle
          theme={this.theme}
        >
          {this.toggleLabel} { this.translationsTotal ? `(${this.translationsTotal})` : ''}
          <ecl-icon
            styleClass="ecl-button__icon ecl-button__icon--after"
            icon="corener-arrow"
            transform="rotate-180"
            size="fluid"
          >
          </ecl-icon>
        </ecl-button>
        <ul class="ecl-file__translation-list">
          <slot></slot>
        { this.others ?
          <li 
            class="ecl-file__translation-item ecl-file__translation-description"
          >
            <slot name="others"></slot>
          </li> : '' }
        </ul>
      </div>
    );
  }
}
