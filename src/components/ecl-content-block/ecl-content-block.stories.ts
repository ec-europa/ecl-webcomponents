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
};

const Template = (args) => 
  `<ecl-content-block
    theme="${args.theme}"
    meta-primary='${args.metaPrimary}'
    meta-secondary='${args.metaSecondary}'
    has-title
    has-description
    has-lists
    has-labels
    has-links
    has-secondary-links
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
    <ecl-text tag="p" slot="description">${args.description}</ecl-tag>
    <ecl-link
      theme="${args.theme}"
      slot="title"
      path="/example.html"
      variant="standalone"
    >
      ${args.title}
    </ecl-link>
    <ecl-link
      slot="links"
      theme="${args.theme}"
      variant="standalone"
      path="/example.html"
    >
      Primary Link 1
    </ecl-link>
    <ecl-link
      slot="links"
      theme="${args.theme}"
      variant="standalone"
      path="/example.html"
    >
      Primary Link 2
    </ecl-link>
    <ecl-link
      slot="links"
      theme="${args.theme}"
      variant="standalone"
      path="/example.html"
    >
      Primary Link 3
    </ecl-link>
    <ecl-link
      slot="links"
      theme="${args.theme}"
      variant="standalone"
      path="/example.html"
    >
      Primary Link 4
    </ecl-link>
    <ecl-link
      slot="links-secondary"
      theme="${args.theme}"
      variant="standalone"
      path="/example.html"
    >
      Secondary Link 1
    </ecl-link>
    <ecl-link
      slot="links-secondary"
      theme="${args.theme}"
      variant="standalone"
      path="/example.html"
    >
      Secondary Link 2
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
        Lorem ipsum dolor sit amet, <a href="/component-library/example" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis
      </ecl-description-list-definition>
      <ecl-description-list-term
        theme="${args.theme}"
      >
        Standalone links
      </ecl-description-list-term>
      <ecl-description-list-definition
        type="link"
        theme="${args.theme}"
        items='[{"label": "Lorem ipsum dolor sit amet", "path": "/example.html", "icon": "copy"},{"label": "Lorem ipsum dolor sit amet", "path": "/example.html", "icon": "download"}]'
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
        items='[{"label": "Lorem ipsum dolor sit amet", "path": "/example.html"},{"label": "Lorem ipsum dolor sit amet", "path": "/example.html"}]'
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
        items='["Taxonomy item 1",{"label": "Taxonomy item 2", "path": "/example.html"},"Taxonomy item 3"]'
      ></ecl-description-list-definition>
    </ecl-description-list>
  </ecl-content-block>`;

export const ContentBlock = Template.bind({});
ContentBlock.storyName = 'default';
ContentBlock.args = getArgs();
ContentBlock.argTypes = getArgTypes();
