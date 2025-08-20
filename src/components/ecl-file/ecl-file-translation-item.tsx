 import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-file-translations-item',
  shadow: false,
})

export class EclFileTranslationsItem {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() variant: string = 'default';
  @Prop() meta: string;
  @Prop({ mutable: true }) parentId: string;
  @Prop() fileTitle: string;
  @Prop() downloadLink: string;
  @Prop() downloadLabel: string;
  @Prop({ mutable: true }) downloadAttribute: boolean = false;
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
            id={`${this.parentId}-lang`}
          >
            {this.fileTitle}
          </div>
  }

  getMeta() {
    return  <div class={`ecl-file__translation-meta sc-ecl-file-${this.theme}`}>
              {this.meta}
            </div>
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const parentFile = this.el.closest('.ecl-file');

    if (parentFile) {
      this.parentId = parentFile.id;
      this.downloadAttribute = parentFile.hasAttribute('download-attribute');
    }
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
        <div class={`ecl-file__translation-action sc-ecl-file-${this.theme}`}>
          <ecl-link
            path={this.downloadLink}
            variant="standalone"
            styleClass={`ecl-file__translation-download sc-ecl-file-${this.theme}`}
            theme={this.theme}
            aria-labelledby={`${this.parentId}-label ${this.parentId}-title ${this.parentId}-link`}
            id={`${this.parentId}-link`}
            {...(this.downloadAttribute ? { download: true } : {})}
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
        </div>
      </li>
    );
  }
}
