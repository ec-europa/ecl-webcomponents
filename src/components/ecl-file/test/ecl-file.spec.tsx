import { newSpecPage } from '@stencil/core/testing';
import { EclFile } from '../ecl-file';
import { EclFileTranslations } from '../ecl-file-translations';
import { EclFileTranslationsItem } from  '../ecl-file-translation-item';

describe('ecl-file', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclFile, EclFileTranslations, EclFileTranslationsItem],
      html: `<ecl-file
        variant="default"
        theme="ec"
        file-title="State of the Union 2018 brochure"
        download-link="/example.html"
        download-label="Download"
        language="English"
        meta="(16.2 MB - PDF)"
        detail-meta='["Resource type", "Publication date"]'
        ecl-script
      >
        <ecl-file-translations
          theme="ec"
          translations-total="3"
          toggle-label="Other languages"
          others
        >
          <ecl-file-translations-item
            language="bg"
            download-label="Download"
            download-link="/example.html"
            meta="(15.7 MB - PDF)"
            fileTitle="български"
          >
          </ecl-file-translations-item>
          <ecl-file-translations-item
            language="es"
            download-label="Download"
            download-link="/example.html"
            meta="(15.98 MB - PDF)"
            fileTitle="español"
          >
          </ecl-file-translations-item>
          <ecl-file-translations-item
            language="fr"
            download-label="Download"
            download-link="/example.html"
            meta="(15.98 MB - PDF)"
            fileTitle="français"
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
});
