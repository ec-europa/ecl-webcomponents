import { randomizedLink } from "../../utils/randomizedLink";

const getArgs = () => {
  return {
    imageZoom: false,
    labels: true,
    primaryMeta: true,
    secondaryMeta: true,
    lists: false,
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    imageZoom: {
      name: 'image-zoom',
      type: { name: 'boolean' },
      description: "Enable animation of the image",
    },
    labels: {
      type: { name: 'boolean' },
      description: 'Show the labels',
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
  };
};

export default {
  title: 'Components/card',
  globals: {
    viewport: { value: 'tablet' },
  },
};

const Template = (args) => 
  `<ecl-card
    image-alt="Image alternative"
    image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    image-zoom="${args.imageZoom}"
  >
    <ecl-content-block
      ${args.primaryMeta ?  `meta-primary='${JSON.stringify(["META1", "Meta2"])}'` : '' }
      ${args.secondaryMeta ? `meta-secondary='${JSON.stringify([
        { label: "2018/10/22", icon: "calendar" },
        { label: "Luxembourg", icon: "location" },
      ])}'` : '' }
      has-title
      has-description
      ${args.labels ? 'has-labels': '' }
      ${args.lists ? `has-lists` : '' }
      ecl-script
    >
      <ecl-link
        slot="title"
        path="${randomizedLink('/example')}"
        variant="standalone"
        data-ecl-title-link
      >
        Title
      </ecl-link>
      <ecl-label
        slot="labels"
        variant="highlight"
        theme="${args.theme}"
      >
        Highlighted
      </ecl-label>
      <ecl-label
        slot="labels"
        variant="high"
        theme="${args.theme}"
      >
        Call status: Upcoming
      </ecl-label>
      <ecl-description-list
        slot="lists"
      >
      <ecl-description-list-term>
        Standalone links
      </ecl-description-list-term>
      <ecl-description-list-definition
        type="link"
        items='[{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}", "icon": "copy"},{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}", "icon": "download"}]'
      >
      </ecl-description-list-definition>
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
    </ecl-description-list>
      <ecl-text theme="${args.theme}" tag="div" level="5" slot="description">Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.</ecl-text>
    </ecl-content-block>
  </ecl-card>`;

export const Card = Template.bind({});
Card.storyName = 'default';
Card.args = getArgs();
Card.argTypes = getArgTypes();
