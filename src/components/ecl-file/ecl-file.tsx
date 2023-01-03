import { Component, Prop, h, Element, getAssetPath } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-file',
  styleUrls: {
    ec: './build/styles/ecl-file-ec.css',
    eu: './build/styles/ecl-file-eu.css',
  },
  shadow: false,
  scoped: true,
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
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() ariaLabel: string;
  @Prop() labels: string;
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
      // Clean the html so that the script finds what it expects.
      const translations = this.el.querySelectorAll('.ecl-file__translation-item');
      this.el.querySelector('.ecl-file__translation-list').innerHTML = '';
      this.el.querySelector('.ecl-file__translation-list').append(...translations);
      // Load the ECL vanilla js if not already present.
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

  getLabels() {
    const labelsArray = this.labels ? JSON.parse(this.labels) : '';
    let labelsMarkup = '';
    if (labelsArray) {
      labelsMarkup = labelsArray.map((label) => (
        <div class="ecl-file__label">
          <ecl-label 
            variant={label.variant}
            theme={this.theme}
          >
            {label.label}
          </ecl-label>
        </div>
      )); 
    }

    return labelsMarkup;
  }

  getMeta() {
    return <div class="ecl-file__meta">{this.meta}</div>
  }

  getDetailedMeta() {
    const detailMetaArray = this.detailMeta ? JSON.parse(this.detailMeta) : '';
    let detailMetaMarkup = '';

    if (detailMetaArray) {
      detailMetaMarkup = 
      <div class="ecl-file__detail-meta">
      {detailMetaArray.map((meta) => (
        <span class="ecl-file__detail-meta-item">{ meta }</span>
      ))} 
      </div>;
    }

    return detailMetaMarkup;
  }

  getTitle() {
    return <div class="ecl-file__title">{this.fileTitle}</div>
  }

  getLanguage() {
    return <div class="ecl-file__language">{this.language}</div> 
  }

  getDownload() {
    const downloadMarkup =
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
    </ecl-link>;

    return downloadMarkup;
  }

  render() {
    const isDefault = this.variant == 'default';

    return (
      <div 
        class={this.getClass()}
        data-ecl-file
      >
        <div class="ecl-file__container">
        { isDefault ?
          <ecl-icon
            icon="file"
            size={this.theme === 'ec' ? '2xl' : 'm'}
            styleClass={`ecl-file__icon sc-ecl-file-${this.theme}`}
            theme={this.theme}
          ></ecl-icon> : 
          <div class="ecl-file__detail">
            <div class="ecl-file__detail-info">
              {this.getLabels()}
              {this.getDetailedMeta()}
              {this.getTitle()}
              <div class="ecl-file__description">
                <slot></slot>
              </div>
            </div>
          { this.image ?
            <img class="ecl-file__image" src={this.image} alt={this.imageAlt} /> : '' 
          }
          </div>
        }
        { isDefault ?
          <div class="ecl-file__info">
            {this.getLabels()}
            {this.getDetailedMeta()}
            {this.getTitle()}
            {this.getLanguage()}        
            {this.getMeta()}
          </div> :
          <div class="ecl-file__info">
            {this.getLanguage()}
            {this.getMeta()}
          </div>
        }
          {this.getDownload()}
        </div>
        <slot name="file-translations"></slot>
      </div>
    );
  }
}
