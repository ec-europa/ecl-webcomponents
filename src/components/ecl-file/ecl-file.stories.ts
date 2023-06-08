const getArgs = () => ({
  labels: false,
  variant: 'thumbnail',
  fileTitle: 'State of the Union 2018 brochure',
  downloadLabel: 'Download',
  downloadLink: '/example',
  language: 'English',
  meta: '(16.2 MB - PDF)',
  ariaLabel: 'Download file State of the Union 2018 brochure',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem
    tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis.
    Donec maximus pharetra ex a ultricies.`,
});

const getArgTypes = () => ({
  labels: {
    type: { name: 'boolean' },
    description: 'Show file labels',
  },
  variant: {
    type: { name: 'select' },
    options: ['default', 'thumbnail'],
    description: 'File variants',
  },
  description: {
    type: { name: 'string' },
    description: 'only for the thumbnail variant'
  },
  fileTitle: {
    type: { name: 'string' },
    name: 'title of the file',
  },
  downloadLabel: {
    type: { name: 'string' },
    name: 'download link label',
    description: 'Label for the download button',
  },
  downloadLink: {
    type: { name: 'string' },
    name: 'download link',
    description: 'Link for the file download',
  },
  meta: {
    type: { name: 'string' },
    name: 'additional info',
    description: 'Meta information about the file',
  },
  language: {
    type: { name: 'string' },
    name: 'language of the file',
    description: 'Show the file language',
  },
  ariaLabel: {
    type: { name: 'string' },
    name: 'aria label of the element',
    description: 'To improve accessibility',
  },
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
  image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
  image-alt="thumbnail alt"
  detail-meta='["Resource type", "Publication date"]'
  ecl-script
  taxonomies-label="Taxonomy list"
  taxonomies='["Taxonomy item 1",{"label": "Taxonomy item 2", "path": "/example"},"Taxonomy item 3"]'
  labels='${args.labels || args.variant === 'thumbnail' ? '[{"variant": "highlight", "label": "Highlight"}, {"variant": "medium", "label": "Medium"}]' : ''}'
>
  ${args.variant === 'thumbnail' ? args.description : ''}
  <ecl-file-translations
    theme="${args.theme}"
    toggle-label="Other languages"
    others
    slot="file-translations"
  >
    <ecl-file-translations-item
      language="bg"
      download-label="Download"
      download-link="/example"
      meta="(15.7 MB - PDF)"
      file-title="български"
      variant="${args.variant}"
      theme="${args.theme}"
    >
    </ecl-file-translations-item>
    <ecl-file-translations-item
      language="es"
      download-label="Download"
      download-link="/example"
      meta="(15.98 MB - PDF)"
      file-title="español"
      variant="${args.variant}"
      theme="${args.theme}"
    >
    </ecl-file-translations-item>
    <ecl-file-translations-item
      language="fr"
      download-label="Download"
      download-link="/example"
      meta="(15.98 MB - PDF)"
      file-title="français"
      variant="${args.variant}"
      theme="${args.theme}"
    >
    </ecl-file-translations-item>
    <p slot="others">
      Looking for another language which is not on the list? <a href="/example" class="ecl-link">Find out why</a>.
    </p>
  </ecl-file-translations>
</ecl-file>`;


export const FileWithTranslations = TemplateWithTranslation.bind({});
FileWithTranslations.storyName = 'File with translations';
FileWithTranslations.args = getArgs();
FileWithTranslations.argTypes = getArgTypes();
