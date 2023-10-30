import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    imagePosition: 'left',
    imageAlt: `Alternative text`,
    imageSize: 'large',
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
    },
    imagePosition: {
      name: 'image position',
      type: { name: 'select'},
      options: [
        'left',
        'right',
      ],
      description: 'Image position',
    },
    imageAlt: {
      name: "alternative text",
      type: { name: 'string'},
      description: 'Image alternative text',
    },
  };
};

export default {
  title: 'Components/content-item',
};

const Template = (args) => 
  `<ecl-content-item
    theme="${args.theme}"
    image-position="${args.imagePosition}"
    image-alt="${args.imageAlt}"
    image-size="${args.imageSize}"
  >
    <ecl-picture
      slot="picture"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-image2.jpg"
      data-ecl-picture-link
    >
      <source
        media="(min-width: 480px)"
        type="image/jpg"
        srcset="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      >
    </ecl-picture>
    <ecl-content-block
      slot="content-block"
      theme="${args.theme}"
      meta-primary='["PRIMARY META", "DD Month Year"]'
      meta-secondary='[{"label": "2018/10/22", "icon": "calendar"}, {"label": "Luxembourg", "icon": "location"}]'
      has-title
      has-description
      has-labels
      ecl-script
      has-lists
    >
      <ecl-label
        slot="labels"
        variant="highlight"
        theme="${args.theme}"
      >
        Highlight
      </ecl-label>
      <ecl-label
        slot="labels"
        variant="high"
        theme="${args.theme}"
      >
        High importance
      </ecl-label>
      <ecl-text tag="p" slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus,
        quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus
      </ecl-text>
      <ecl-link
        theme="${args.theme}"
        slot="title"
        path="${randomizedLink('/example.html')}"
        variant="standalone"
        data-ecl-title-link
      >
        Title
      </ecl-link>
      <ecl-link
        slot="links"
        theme="${args.theme}"
        variant="standalone"
        path="${randomizedLink('/example.html')}"
      >
        Primary Link 1
      </ecl-link>
      <ecl-link
        slot="links"
        theme="${args.theme}"
        variant="standalone"
        path="${randomizedLink('/example.html')}"
      >
        Primary Link 2
      </ecl-link>
      <ecl-description-list
        theme="${args.theme}"
        slot="lists"
      >
        <ecl-description-list-term
          theme="${args.theme}"
        >
          Standard text
        </ecl-description-list-term>
        <ecl-description-list-definition
          type="text"
          theme="${args.theme}"
        >
          Lorem ipsum dolor sit amet, <a href="/component-library/example.html" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis
        </ecl-description-list-definition>
        <ecl-description-list-term
          theme="${args.theme}"
        >
          Standalone links
        </ecl-description-list-term>
        <ecl-description-list-definition
          type="link"
          theme="${args.theme}"
          items='[{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}", "icon": "copy"},{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}", "icon": "download"}]'
        >
        </ecl-description-list-definition>
        <ecl-description-list-term
          theme="${args.theme}"
        >
          Links inline
        </ecl-description-list-term>
        <ecl-description-list-definition
          type="inline"
          theme="${args.theme}"
          items='[{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}"},{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}"}]'
        >
        </ecl-description-list-definition>
        <ecl-description-list-term
          theme="${args.theme}"
        >
          Taxonomy list
        </ecl-description-list-term>
        <ecl-description-list-definition
          type="taxonomy"
          theme="${args.theme}"
          items='["Taxonomy item 1",{"label": "Taxonomy item 2", "path": "${randomizedLink('/example.html')}"},"Taxonomy item 3"]'
        ></ecl-description-list-definition>
      </ecl-description-list>
    </ecl-content-block>
  </ecl-content-item>`;

export const ContentItem = Template.bind({});
ContentItem.storyName = 'default';
ContentItem.args = getArgs();
ContentItem.argTypes = getArgTypes();
