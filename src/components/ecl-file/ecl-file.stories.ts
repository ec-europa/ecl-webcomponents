const getArgs = () => ({
  labels: true,
  fileTitle: 'In-Depth Comprehensive Report on Emissions Standards, Their Impacts, and Future Projections in the European Union for the Year 2023 and Beyond',
  fileTitlePath: '',
  media: 'icon',
  downloadAttribute: false,
  downloadLabel: 'Download',
  downloadLink: '/example.html',
  previewLink: false,
  language: 'English',
  meta: '(16.2 MB - PDF)',
  ariaLabel: 'Download file State of the Union 2018 brochure',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem
    tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis.
    Donec maximus pharetra ex a ultricies.`,
});

const getArgTypes = () => ({
  color_mode: { table: { disable: true} },
  labels: {
    type: { name: 'boolean' },
    description: 'Show file labels',
  },
  description: {
    type: { name: 'string' },
    description: 'only for the thumbnail variant'
  },
  fileTitle: {
    type: { name: 'string' },
    name: 'file-title',
  },
  fileTitlePath: {
    name: 'file-title-path',
    type: { name: 'string' },
    description: 'href of the title, when is is a link'
  },
  media: {
    type: { name: 'select' },
    options: [
      'image',
      'icon',
    ],
  },
  downloadAttribute: {
    name: 'download-attribute',
    type: { name: 'boolean' },
    description: 'Whether you want a file download link or not',
  },
  downloadLabel: {
    type: { name: 'string' },
    name: 'download-label',
    description: 'Label for the download button',
  },
  downloadLink: {
    type: { name: 'string' },
    name: 'download-link',
    description: 'Link for the file download',
  },
  previewLink: {
    type: { name: 'boolean' },
    name: 'preview-link',
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
  file-title="${args.fileTitle}"
  file-title-path="${args.fileTitlePath}"
  download-link="${args.downloadLink}"
  preview-link="${args.previewLink}"
  download-label="${args.downloadLabel}"
  download-attribute=${args.downloadAttribute}
  language="${args.language}"
  icon="${args.media === 'icon' ? 'file-pdf' : ''}"
  meta="${args.meta}"
  image="${args.media === 'image' ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' : ''}"
  image-alt="thumbnail alt"
  detail-meta='["Resource type", "Publication date"]'
  aria-label="Download file State of the Union 2018 brochure"
  taxonomies-label="List"
  taxonomies='["Taxonomy item 1",{"label": "Taxonomy item 2", "path": "/example.html"}]'
  labels='${args.labels ? '[{"variant": "highlight", "label": "Highlight"}]' : ''}'
>
  ${args.description}
  ${args.previewLink ? 
  `<ecl-link
    slot="ecl-file-preview"
    path="/example.html"
    variant="standalone">Preview (placeholder)<span style="margin-inline-end: 24px"></span>
  </ecl-link>` : '' }
  <ecl-file-translations
    toggle-label="Translations"
    slot="file-translations"
    others
  >
    <ecl-file-translations-item
      language="bg"
      download-label="Download"
      download-link="/example.html"
      meta="(15.7 MB - PDF)"
      file-title="български"
      variant="${args.variant}"
      aria-label="Download file State of the Union 2018 brochure"
    >
    </ecl-file-translations-item>
    <ecl-file-translations-item
      language="es"
      download-label="Download"
      download-link="/example.html"
      meta="(15.98 MB - PDF)"
      file-title="español"
      variant="${args.variant}"
      aria-label="Download file State of the Union 2018 brochure"
    >
    </ecl-file-translations-item>
    <ecl-file-translations-item
      language="fr"
      download-label="Download"
      download-link="/example.html"
      meta="(15.98 MB - PDF)"
      file-title="français"
      variant="${args.variant}"
      aria-label="Download file State of the Union 2018 brochure"
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
