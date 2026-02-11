import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    imagePosition: 'left',
    imageAlt: `Alternative text`,
    imageSize: 'large',
    imageZoom: false,
    divider: false,
    event: false,
    primaryMeta: true,
    secondaryMeta: true,
    labels: true,
    lists: true,
  };
};

const getArgTypes = () => {
  return {
    imageSize: {
      name: 'image size',
      type: { name: 'select'},
      options: [
        'large',
        'small',
      ],
      description: 'Size of the image',
      if: { arg: 'event', truthy: false },
    },
    imagePosition: {
      name: 'image-position',
      type: { name: 'select'},
      options: [
        'left',
        'right',
        'top',
      ],
      description: 'Image position',
      if: { arg: 'event', truthy: false },
    },
    imageAlt: {
      name: "alternative text",
      type: { name: 'string'},
      description: 'Image alternative text',
      if: { arg: 'event', truthy: false },
    },
    imageZoom: {
      name: 'image-zoom',
      type: { name: 'boolean' },
      description: 'Animate the image on hover',
      if: { arg: 'event', truthy: false },
    },
    event: {
      type: { name: 'boolean' },
      description: 'Show a date block instead of the media',
    },
    labels: {
      type: { name: 'boolean' },
      description: 'Show labels',
    },
    primaryMeta: {
      name: 'primary meta',
      type: { name: 'boolean' },
      description: 'Show primary meta',
    },
    secondaryMeta: {
      name: 'secondary meta',
      type: { name: 'boolean' },
      description: 'Show secondary meta',
    },
    lists: {
      type: { name: 'boolean' },
      description: 'Show lists',
    },
    divider: {
      type: { name: 'boolean' },
      description: 'Show/hide a divider'
    },
  };
};

export default {
  title: 'Components/content-item',
};

const Template = (args) => {
  let sidebar = '';
  if (args.event) {
    sidebar = `
      <ecl-date-block
        variant="ongoing"
        day="26"
        slot="sidebar"
        month="Sep"
        month-full="September"
        year="2022"
        date-time="2019-09-26"
      ></ecl-date-block>`;
  } else {
    sidebar = `
      <ecl-picture
      slot="sidebar"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
      data-ecl-picture-link
    >
      <source
        media="(min-width: 480px)"
        type="image/jpg"
        srcset="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      >
    </ecl-picture>
    `;
  }
  return `
    <ecl-content-item
      image-position="${args.imagePosition}"
      image-alt="${args.imageAlt}"
      image-size="${args.imageSize}"
      image-zoom="${args.imageZoom}"
      divider="${args.divider}"
      color-mode="${args.color_mode}"
      event="${args.event}"
    >
      ${sidebar}
      <ecl-content-block
        slot="content-block"
        meta-primary='${args.primaryMeta ? '["PRIMARY META", "DD Month Year"]' : '' }'
        meta-secondary='${args.secondaryMeta ? '[{"label": "2018/10/22", "icon": "calendar"}, {"label": "Luxembourg", "icon": "location"}]' : '' }'
        has-title
        has-description
        has-labels="${args.labels}"
        has-lists="${args.lists}"
      >
      ${ args.labels ? `
        <ecl-label
          slot="labels"
          variant="highlight"
        >
          Highlight
        </ecl-label>
        <ecl-label
          slot="labels"
          variant="high"
        >
          High importance
        </ecl-label>` : '' 
      }
        <ecl-text tag="p" slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus,
          quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus
        </ecl-text>
        <ecl-link
          slot="title"
          path="${randomizedLink('/example.html')}"
          variant="standalone"
          data-ecl-title-link
        >
          Title
        </ecl-link>
        <ecl-link
          slot="links"
          variant="standalone"
          path="${randomizedLink('/example.html')}"
        >
          Primary Link 1
        </ecl-link>
        <ecl-link
          slot="links"
          variant="standalone"
          path="${randomizedLink('/example.html')}"
        >
          Primary Link 2
        </ecl-link>
      ${ args.lists ? 
        `<ecl-description-list
          slot="lists"
        >
          <ecl-description-list-term
          >
            Standard text
          </ecl-description-list-term>
          <ecl-description-list-definition
            type="text"
          >
            Lorem ipsum dolor sit amet, <a href="/component-library/example.html" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis
          </ecl-description-list-definition>
          <ecl-description-list-term
          >
            Standalone links
          </ecl-description-list-term>
          <ecl-description-list-definition
            type="link"
            items='[{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}", "icon": "copy"},{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}", "icon": "download"}]'
          >
          </ecl-description-list-definition>
          <ecl-description-list-term
          >
            Links inline
          </ecl-description-list-term>
          <ecl-description-list-definition
            type="inline"
            items='[{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}"},{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}"}]'
          >
          </ecl-description-list-definition>
          <ecl-description-list-term
          >
            Taxonomy list
          </ecl-description-list-term>
          <ecl-description-list-definition
            type="taxonomy"
            items='["Taxonomy item 1",{"label": "Taxonomy item 2", "path": "${randomizedLink('/example.html')}"},"Taxonomy item 3"]'
          ></ecl-description-list-definition>
        </ecl-description-list>` : ''
      }
      </ecl-content-block>
    </ecl-content-item>`;
};

export const ContentItem = Template.bind({});
ContentItem.storyName = 'default';
ContentItem.args = getArgs();
ContentItem.argTypes = getArgTypes();
