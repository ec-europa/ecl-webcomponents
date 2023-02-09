 import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-file-translations-item',
  shadow: false,
})

export class EclFileTranslationsItem{
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() variant: string = 'default';
  @Prop() meta: string;
  @Prop() fileTitle: string;
  @Prop() downloadLink: string;
  @Prop() downloadLabel: string;
  @Prop() language: string;

  getClass(): string {
    const styleClasses = [
      `ecl-file__translation-item`,
      `sc-ecl-file-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  getChildrenClass() {
    return `ecl-file__translation-${this.variant === 'default' ? 'info' : 'detail'}`;
  }

  getTitle() {
    return <div 
            class={`ecl-file__translation-title sc-ecl-file-${this.theme}`}
            lang={this.language}
          >
            {this.fileTitle}
          </div>
  }

  getMeta() {
    return  <div class={`ecl-file__translation-meta sc-ecl-file-${this.theme}`}>
              {this.meta}
            </div>
  }

  render() { 
    return (
      <li
        class={this.getClass()}
      >
      { this.variant == 'thumbnail' ?
        <div class={`ecl-file__translation-detail sc-ecl-file-${this.theme}`}>
          {this.getTitle()}
        </div> : '' 
      }
      { this.variant == 'thumbnail' ?
        <div class={`ecl-file__translation-info sc-ecl-file-${this.theme}`}> 
          {this.getMeta()}
        </div> :
        <div class={`ecl-file__translation-info sc-ecl-file-${this.theme}`}>
          {this.getTitle()}
          {this.getMeta()}
        </div> 
      }
        <ecl-link
          path={this.downloadLink}
          variant="standalone"
          styleClass={`ecl-file__translation-download sc-ecl-file-${this.theme}`}
          theme={this.theme}
        >
          {this.downloadLabel}
          <ecl-icon 
            slot="icon-after"
            size="fluid"
            icon="download"
            theme={this.theme}
          >
          </ecl-icon>    
        </ecl-link>
      </li>
    );
  }
}
