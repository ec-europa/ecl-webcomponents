import { Component, Prop, h, Element } from '@stencil/core';
import FileDownload from "@ecl/file";
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
  @Prop() elId: string = `ecl-file-${Math.random().toString(36).slice(2, 10)}`;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() downloadAttribute: boolean = false;
  @Prop() downloadId: string = `${this.elId}-link`
  @Prop() downloadLabel: string;
  @Prop() downloadLabelId: string = `${this.elId}-link-label`;
  @Prop() downloadLink: string;
  @Prop() fileTitle: string;
  @Prop() fileTitleId: string = `${this.elId}-title`;
  @Prop() fileTitlePath: string;
  @Prop() detailMeta: string;
  @Prop() language: string;
  @Prop() icon: string;
  @Prop() meta: string;
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() ariaLabel: string;
  @Prop() labels: string;
  @Prop() taxonomies: string;
  @Prop() taxonomiesLabel: string;
  @Prop() noScript: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-file`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidRender() {
    const list = this.el.querySelector('.ecl-file__translation-list');
    if (list && !this.noScript) {
      const toggle = this.el.querySelector('.ecl-file__translation-toggle');
      toggle?.setAttribute('aria-controls', list.id);

      ;(window as any).ECL = (window as any).ECL || {};
      ECL.FileDownload = FileDownload;
      const file = new FileDownload(this.el.firstElementChild);
      file.init();
    }
  }

  getLabels() {
    const labelsArray = this.labels ? JSON.parse(this.labels) : null;
  
    if (!labelsArray?.length) {
      return null;
    }
  
    return (
      <div class="ecl-file__labels">
        {labelsArray.map((label) => (
          <div class="ecl-file__label">
            <ecl-label
              variant={label.variant}
              theme={this.theme}
            >
              {label.label}
            </ecl-label>
          </div>
        ))}
      </div>
    );
  }

  getDetailedMeta() {
    const detailMetaArray = this.detailMeta ? JSON.parse(this.detailMeta) : '';
    let detailMetaMarkup = '';

    if (detailMetaArray) {
      detailMetaMarkup = 
      <div class="ecl-file__primary-meta">
      {detailMetaArray.map((meta) => (
        <span class="ecl-file__primary-meta-item">{ meta }</span>
      ))} 
      </div>;
    }

    return detailMetaMarkup;
  }

  getTitle() {
    if (!this.fileTitlePath) {
      return <div class="ecl-file__title" id={this.fileTitleId}>{this.fileTitle}</div>
    } else {
      return <div class="ecl-file__title" id={this.fileTitleId}><ecl-link variant="standalone" path={this.fileTitlePath}>{this.fileTitle}</ecl-link></div>
    }
  }

  getLanguage() {
    return <ecl-button
            variant="tertiary"
            button-style="neutral"
            data-ecl-file-translation-toggle
            style-class={`ecl-file__translation-toggle sc-ecl-file-${this.theme}`}
            aria-expanded="false"
            aria-controls="file-translation-id"
            aria-labels="Translations"
           >
            {this.language}
            <ecl-icon
              icon="caret-down"
              family="phosphor"
              size="fluid"
              slot="icon-after"
              style-class={`sc-ecl-file-${this.theme}`}
            ></ecl-icon>
          </ecl-button>;
  }

  getDownload() {
    const downloadMarkup =
    <ecl-link
      path={this.downloadLink}
      variant="standalone"
      branded
      aria-label={this.ariaLabel}
      style-class="ecl-file__download"
      id={this.downloadId}
      {...(this.downloadAttribute ? { download: true } : {})}
    >
      {this.downloadLabel} {this.meta}
      <ecl-icon
        theme={this.theme}
        icon="download-simple"
        family="phosphor"
        size="fluid"
        slot="icon-after"
      ></ecl-icon>
    </ecl-link>;

    return downloadMarkup;
  }

  render() {
    return (
      <div 
        class={this.getClass()}
        id={this.elId}
        data-ecl-file
      >
        <article class="ecl-file__container">
          <div class="ecl-file__info">
          { this.icon &&
            <div class="ecl-file__icon-box">
              <ecl-icon
                icon={this.icon}
                family="phosphor"
                size={this.theme === 'ec' ? '2xl' : 'm'}
                styleClass={`ecl-file__icon sc-ecl-file-${this.theme}`}
                theme={this.theme}
              ></ecl-icon>
            </div>
          }
          { this.image &&
            <ecl-picture
              image={this.image}
              imageAlt={this.imageAlt}
              imgClass={`ecl-file__image sc-ecl-file-${this.theme}`}
              styleClass={`ecl-file__picture sc-ecl-file-${this.theme}`}
            >
              <slot name="sources"></slot>
            </ecl-picture> 
          }
            <div class="ecl-file__content">
              {this.getLabels()}
              {this.getTitle()}
              <div class="ecl-file__description">
                <slot></slot>
              </div>
              {this.getDetailedMeta()}
            { this.taxonomies &&
              <div class="ecl-file__lists">
                <ecl-description-list
                  variant="inline"
                >
                  <ecl-description-list-term
                    style-class={`sc-ecl-file-${this.theme}`}
                  >
                    {this.taxonomiesLabel}
                  </ecl-description-list-term>
                  <ecl-description-list-definition
                    items={this.taxonomies}
                    type="taxonomy"
                    style-class={`sc-ecl-file-${this.theme}`}
                  >
                  </ecl-description-list-definition>
                </ecl-description-list>
              </div>
            }
            </div>
          </div>
          <footer class="ecl-file__footer">
            {this.getLanguage()}        
            <div class="ecl-file__action">
              <slot name="ecl-file-preview"></slot>
              {this.getDownload()}
            </div>
          </footer>
        </article>
        <slot name="file-translations"></slot>
      </div>
    );
  }
}
