import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    title: 'Title',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus,
                  quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus`,
    metaPrimary:  '["PRIMARY META", "DD Month Year"]',
    metaSecondary: '[{"label": "2018/10/22", "icon": "calendar"}, {"label": "Luxembourg", "icon": "location"}]',
  };
};

const getArgTypes = () => {
  return {
    title: {
      type: { name: 'string'},
      description: 'Title of the content block',
    },
    description: {
      type: { name: 'string'},
      description: 'Description',
    },
    metaPrimary: {
      name: "Primary meta",
      type: { name: 'string'},
      description: 'Primary meta element',
    },
    metaSecondary: {
      name: 'Secondary meta',
      type: { name: 'string'},
      description: 'Secondary meta element',
    },
  };
};

export default {
  title: 'Components/content-block',
  parameters: {
    badges: [
      'updated',
    ],  
  },
};

const Template = (args) => 
  `<ecl-content-block
    meta-primary='${args.metaPrimary}'
    meta-secondary='${args.metaSecondary}'
    has-title
    has-description
    has-lists
    has-labels
    has-links
    has-secondary-links
    ecl-script
  >
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
    </ecl-label>
    <ecl-link
      slot="title"
      path="${randomizedLink('/example.html')}"
      variant="standalone"
    >
      Title
    </ecl-link>
    <ecl-text tag="div" slot="description">${args.description}</ecl-text>
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
    <ecl-link
      slot="links"
      variant="standalone"
      path="${randomizedLink('/example.html')}"
    >
      Primary Link 3
    </ecl-link>
    <ecl-link
      slot="links"
      variant="standalone"
      path="${randomizedLink('/example.html')}"
    >
      Primary Link 4
    </ecl-link>
    <ecl-link
      slot="links-secondary"
      variant="standalone"
      path="${randomizedLink('/example.html')}"
    >
      Secondary Link 1
    </ecl-link>
    <ecl-link
      slot="links-secondary"
      variant="standalone"
      path="${randomizedLink('/example.html')}"
    >
      Secondary Link 2
    </ecl-link>
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
  </ecl-content-block>`;

export const ContentBlock = Template.bind({});
ContentBlock.storyName = 'default';
ContentBlock.args = getArgs();
ContentBlock.argTypes = getArgTypes();
