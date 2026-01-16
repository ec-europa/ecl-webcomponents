const headers = [
  [
    { label: 'Country' },
    { label: 'Capital' },
    { label: 'Population' },
  ],
];

const headersMultiple = [
  [
    { label: 'Job title', rowspan: '2' },
    { label: 'EFSI finance approved by EIB', rowspan: '2' },
    { label: 'Extra information', colspan: '2' },
    { label: 'Location', rowspan: '2' },
  ],
  [
    { label: 'Organization', headers: 'table-id-header-3' },
    { label: 'Type of contract', headers: 'table-id-header-3' },
  ],
];

const rows = [
  {
    data: [
      { label: 'Italy', 'data-ecl-table-header': 'country' },
      { label: 'Rome', 'data-ecl-table-header': 'capital' },
      { label: '59M', 'data-ecl-table-header': 'population' },
    ],
  },
  {
    data: [
      { label: 'France', 'data-ecl-table-header': 'country' },
      { label: 'Paris', 'data-ecl-table-header': 'capital' },
      { label: '67M', 'data-ecl-table-header': 'population' },
    ],
  },
  {
    data: [
      { label: 'Germany', 'data-ecl-table-header': 'country' },
      { label: 'Berlin', 'data-ecl-table-header': 'capital' },
      { label: '83M', 'data-ecl-table-header': 'population' },
    ],
  },
];

const rowsMultiple = [
  {
    data: [
      {
        label: 'Administators in Competition Law',
        'data-ecl-table-header': 'Job title',
        headers: 'table-id-header-1',
      },
      {
        label: 'AD7',
        'data-ecl-table-header': 'EFSI finance approved by EIB',
        headers: 'table-id-header-2',
      },
      {
        label: 'European Commission',
        'data-ecl-table-header': 'Organization',
        'data-ecl-table-header-group': 'Extra information',
        group: true,
        headers: 'table-id-header-3 table-id-header-5',
      },
      {
        label: 'Permanent official',
        'data-ecl-table-header': 'Type of contract',
        group: true,
        headers: 'table-id-header-3 table-id-header-6',
      },
      {
        label:
          'Brussels (Belgium), Luxembourg (Luxembourg), Strasbourg (France)',
        'data-ecl-table-header': 'Location',
        headers: 'table-id-header-4',
      },
    ],
  },
  {
    data: [
      {
        label: 'Administators in Economic and Monetary Union Law',
        'data-ecl-table-header': 'Job title',
        headers: 'table-id-header-1',
      },
      {
        label: 'AD7',
        'data-ecl-table-header': 'EFSI finance approved by EIB',
        headers: 'table-id-header-2',
      },
      {
        label: 'European Commission',
        'data-ecl-table-header': 'Organization',
        'data-ecl-table-header-group': 'Extra information',
        group: true,
        headers: 'table-id-header-3 table-id-header-5',
      },
      {
        label: 'Permanent official',
        'data-ecl-table-header': 'Type of contract',
        group: true,
        headers: 'table-id-header-3 table-id-header-6',
      },
      {
        label:
          'Brussels (Belgium), Luxembourg (Luxembourg), Strasbourg (France)',
        'data-ecl-table-header': 'Location',
        headers: 'table-id-header-4',
      },
    ],
  },
  {
    data: [
      {
        label: 'Administators in Financial rules appliable to the EU budget',
        'data-ecl-table-header': 'Job title',
        headers: 'table-id-header-1',
      },
      {
        label: 'AD7',
        'data-ecl-table-header': 'EFSI finance approved by EIB',
        headers: 'table-id-header-2',
      },
      {
        label: 'European Commission',
        'data-ecl-table-header': 'Organization',
        'data-ecl-table-header-group': 'Extra information',
        group: true,
        headers: 'table-id-header-3 table-id-header-5',
      },
      {
        label: 'Permanent official',
        'data-ecl-table-header': 'Type of contract',
        group: true,
        headers: 'table-id-header-3 table-id-header-6',
      },
      {
        label:
          'Brussels (Belgium), Luxembourg (Luxembourg), Strasbourg (France)',
        'data-ecl-table-header': 'Location',
        headers: 'table-id-header-4',
      },
    ],
  },
  {
    data: [
      {
        label: 'Corporate Support Officer',
        'data-ecl-table-header': 'Job title',
        headers: 'table-id-header-1',
      },
      {
        label: 'FG IV',
        'data-ecl-table-header': 'EFSI finance approved by EIB',
        headers: 'table-id-header-2',
      },
      {
        label: 'European Commission',
        'data-ecl-table-header': 'Organization',
        'data-ecl-table-header-group': 'Extra information',
        group: true,
        headers: 'table-id-header-3 table-id-header-5',
      },
      {
        label: 'Permanent official',
        'data-ecl-table-header': 'Type of contract',
        group: true,
        headers: 'table-id-header-3 table-id-header-6',
      },
      {
        label: 'Prague (Czech Republic)',
        'data-ecl-table-header': 'Location',
        headers: 'table-id-header-4',
      },
    ],
  },
  {
    data: [
      {
        label: 'Policy Officer - Clean Energy For All Europeans',
        'data-ecl-table-header': 'Job title',
        headers: 'table-id-header-1',
      },
      {
        label: 'FG II, FG III, FG IV',
        'data-ecl-table-header': 'EFSI finance approved by EIB',
        headers: 'table-id-header-2',
      },
      {
        label: 'EU-LISA',
        'data-ecl-table-header': 'Organization',
        'data-ecl-table-header-group': 'Extra information',
        group: true,
        headers: 'table-id-header-3 table-id-header-5',
      },
      {
        label: 'Seconded National Expert (SNE)',
        'data-ecl-table-header': 'Type of contract',
        group: true,
        headers: 'table-id-header-3 table-id-header-6',
      },
      {
        label: 'Vigo (Spain)',
        'data-ecl-table-header': 'Location',
        headers: 'table-id-header-4',
      },
    ],
  },
];


export default {
  title: 'Components/Table',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => `
  <ecl-table
    caption="Population of selected EU countries"
    zebra
    color-mode="${args.color_mode}"
    headers='${JSON.stringify(headers)}'
    rows='${JSON.stringify(rows)}'
  ></ecl-table>
`;

export const Default = Template.bind({});
Default.storyName = 'default';

const SortableTemplate = (args) => `
  <ecl-table
    caption="Sortable table example"
    label-sort-ascending="Sort ascending"
    label-sort-descending="Sort descending"
    label-sort-default="Sort default"
    sortable
    color-mode="${args.color_mode}"
    headers='${JSON.stringify(headers)}'
    rows='${JSON.stringify(rows)}'
  ></ecl-table>`;

export const Sortable = SortableTemplate.bind({});

const MultipleTemplate = (args) => `
  <ecl-table
    caption="Multiple headers table example"
    color-mode="${args.color_mode}"
    headers='${JSON.stringify(headersMultiple)}'
    rows='${JSON.stringify(rowsMultiple)}'
  ></ecl-table>`;

export const Multiple = MultipleTemplate.bind({});
MultipleTemplate.storyName = 'multiple headers';

const SimpleTemplate = (args) => `
  <ecl-table
    caption="Simple table"
    simple
    color-mode="${args.color_mode}"
    headers='${JSON.stringify(headers)}'
    rows='${JSON.stringify(rows)}'
  ></ecl-table>`;

export const Simple = SimpleTemplate.bind({});

