 import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-file-translations-item',
  shadow: false,
})

export class EclFileTranslationsItem{
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() meta: string;
  @Prop() fileTitle: string;
  @Prop() downloadLink: string;
  @Prop() downloadLabel: string;
  @Prop() language: string;

  getClass(): string {
    const styleClasses = [
      `ecl-file__translation-item`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  render() { 
    return (
      <li
        class={this.getClass()}
      >
        <div class="ecl-file__translation-info">
          <div 
            class="ecl-file__translation-title"
            lang={this.language}
          >
            {this.fileTitle}
          </div>
          <div class="ecl-file__translation-meta">{this.meta}</div>
        </div>
        <ecl-link
          path={this.downloadLink}
          variant="standalone"
        >
          {this.downloadLabel}
          <ecl-icon 
            slot="icon-after"
            size="fluid"
            icon="download"
            styleClass="ecl-file__translation-download"
          >
          </ecl-icon>    
        </ecl-link>
      </li>
    );
  }
}
