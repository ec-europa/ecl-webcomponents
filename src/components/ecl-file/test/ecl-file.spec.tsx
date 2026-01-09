import { newSpecPage } from '@stencil/core/testing';
import { EclFile } from '../ecl-file';
import { EclFileTranslations } from '../ecl-file-translations';
import { EclFileTranslationsItem } from  '../ecl-file-translation-item';

describe('ecl-file', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclFile, EclFileTranslations, EclFileTranslationsItem],
      html: `<ecl-file
        variant="default"
        el-id="file-download-test"
        file-title="State of the Union 2018 brochure"
        download-link="/example.html"
        download-label="Download"
        language="English"
        meta="(16.2 MB - PDF)"
        taxonomies-label="Taxonomy list"
        taxonomies='["Taxonomy item 1",{"label": "Taxonomy item 2", "path": "/example.html"},"Taxonomy item 3"]'
        detail-meta='["Resource type", "Publication date"]'
      >
        <ecl-file-translations
          translations-total="3"
          toggle-label="Other languages"
          others
        >
          <ecl-file-translations-item
            language="bg"
            download-label="Download"
            download-link="/example.html"
            meta="(15.7 MB - PDF)"
            file-title="български"
          >
          </ecl-file-translations-item>
          <ecl-file-translations-item
            language="es"
            download-label="Download"
            download-link="/example.html"
            meta="(15.98 MB - PDF)"
            file-title="español"
          >
          </ecl-file-translations-item>
          <ecl-file-translations-item
            language="fr"
            download-label="Download"
            download-link="/example.html"
            meta="(15.98 MB - PDF)"
            file-title="français"
          >
          </ecl-file-translations-item>
          <p slot="others">
            Looking for another language which is not on the list? <a href="/example.html" class="ecl-link">Find out why</a>.
          </p>
        </ecl-file-translations>
      </ecl-file>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with download attribute', async () => {
    const page = await newSpecPage({
      components: [EclFile],
      html: `
      <ecl-file
          variant="thumbnail"
          el-id="file-download-test"
          file-title="State of the Union 2018 brochure (download)"
          download-link="/example.html"
          download-label="Download"
          download-attribute
          language="English"
          meta="(16.2 MB - PDF)"
          detail-meta='["Resource type", "Publication date"]'
        ></ecl-file>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
