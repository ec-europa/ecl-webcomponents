const getArgs = () => ({
  variant: 'default',
  fileTitle: 'State of the Union 2018 brochure',
  downloadLabel: 'Download',
  downloadLink: '/example.html',
  language: 'English',
  meta: '(16.2 MB - PDF)',
  ariaLabel: 'Download file State of the Union 2018 brochure',
});

const getArgTypes = () => ({
  variant: {
    type: { name: 'select' },
    options: ['default', 'thumbnail'],
    description: 'File variants',
  },
  fileTitle: {
    type: { name: 'string'},
    name: 'title of the file',
  },
  downloadLabel: {
    type: { name: 'string'},
    name: 'download link label',
    description: 'Label for the download button',
  },
  downloadLink: {
    type: { name: 'string'},
    name: 'download link',
    description: 'Link for the file download',
  },
  meta: {
    type: { name: 'string'},
    name: 'additional info',
    description: 'Meta information about the file',
  },
  language: {
    type: { name: 'string'},
    name: 'language of the file',
    description: 'Show the file language',
  },
  ariaLabel: {
    type: { name: 'string'},
    name: 'aria label of the element',
    description: 'To improve accessibility',
  }
});

export default {
  title: 'Components/file',
};


const TemplateWithTranslation = args =>
`<ecl-file
  variant="${args.variant}"
  theme="${args.theme}"
  file-title="${args.fileTitle}"
  download-link="${args.downloadLink}"
  download-label="${args.downloadLabel}"
  language="${args.language}"
  meta="${args.meta}"
  detail-meta='["Resource type", "Publication date"]'
  ecl-script
>
  <ecl-file-translations
    theme="${args.theme}"
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
</ecl-file>`;

export const FileWithTranslations = TemplateWithTranslation.bind({});
FileWithTranslations.storyName = 'File with translations';
FileWithTranslations.args = getArgs();
FileWithTranslations.argTypes = getArgTypes();
