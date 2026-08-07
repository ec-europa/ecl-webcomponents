import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-file-translations',
  shadow: false,
})

export class EclFileTranslations {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() elId: string = `ecl-file-translations-${Math.random().toString(36).slice(2, 10)}`;
  @Prop() styleClass: string;
  @Prop() toggleLabel: string;
  @Prop() others: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-file__translation-list`,
      `sc-ecl-file-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() { 
    return (
      <div 
        class={this.getClass()}
        id={this.elId}
        hidden
      >
        <slot></slot>
      { this.others ?
        <div
          class={`ecl-file__translation-item ecl-file__translation-description sc-ecl-file-${this.theme}`}
        >
          <slot name="others"></slot>
        </div> : '' }
      </div>
    );
  }
}
