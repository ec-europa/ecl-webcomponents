import { Component, Prop, h, Element, getAssetPath } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-file',
  styleUrls: {
    ec: './build/styles/ecl-file-ec.css',
    eu: './build/styles/ecl-file-eu.css',
  },
  shadow: false,
  scoped: false,
})
export class EclFile {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() variant: string = 'default';
  @Prop() downloadLabel: string;
  @Prop() downloadLink: string;
  @Prop() fileTitle: string;
  @Prop() detailMeta: string;
  @Prop() language: string;
  @Prop() meta: string;
  @Prop() ariaLabel: string;
  @Prop() eclScript: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-file`,
      `ecl-file--${this.variant}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentDidRender() {
    if (this.el.querySelector('.ecl-file__translation-list') && this.eclScript) {
      const translations = this.el.querySelectorAll('.ecl-file__translation-item');
      this.el.querySelector('.ecl-file__translation-list').innerHTML = '';
      this.el.querySelector('.ecl-file__translation-list').append(...translations);
      const src = getAssetPath('./build/scripts/ecl-file-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const file = new ECL.FileDownload(this.el.firstElementChild);
        file.init();
      };
      document.body.appendChild(script);
    }
  }

  render() {
    const detailMetaArray = this.detailMeta ? JSON.parse(this.detailMeta) : '';  
    return (
      <div 
        class={this.getClass()}
        data-ecl-file
      >
        <div class="ecl-file__container">
          <ecl-icon
            icon="file"
            size={this.theme === 'ec' ? '2xl' : 'm'}
            styleClass={`ecl-file__icon`}
            theme={this.theme}
          ></ecl-icon>
          <div class="ecl-file__info">
            <div class="ecl-file__detail-meta">
            { detailMetaArray ?
                detailMetaArray.map((meta) => (
                  <span class="ecl-file__detail-meta-item">{ meta }</span>
                )) : '' }
            </div>
            <div class="ecl-file__title">{this.fileTitle}</div>
            <div class="ecl-file__language">{this.language}</div>
            <div class="ecl-file__meta">{this.meta}</div>
          </div>
          <ecl-link
            path={this.downloadLink}
            variant="standalone"
          >
            {this.downloadLabel}
            <ecl-icon
              theme={this.theme}
              icon="download"
              size="fluid"
              slot="icon-after"
            ></ecl-icon>
          </ecl-link>
        </div>
        <slot></slot>
      </div>
    );
  }
}
