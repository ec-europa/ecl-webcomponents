const getArgs = () => ({
  image: true,
  column: 2,
  border: true,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.
    Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus`,
});

const getArgTypes = () => ({
  image: {
    control: { type: 'boolean' },
    description: 'Show image',
  },
  column: {
    control: { type: 'range', min: 2, max: 3, step: 1 },
    description: 'The number of column for the list (between 1 and 4)',
  },
  border: {
    control: { type: 'boolean' },
    description: 'Items with border',
  },
  description: {
    control: { type: 'string' },
    description: 'Item body',
  },
});

export default {
  title: 'Components/Navigation/navigation-list',
};

const Template = (args) => 
  `<ecl-navigation-list
    theme="${args.theme}"
    column="${args.column}"
  >
    <ecl-navigation-list-item
      theme="${args.theme}"
      image="${args.image ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' : ''}"
      image-alt="Alt text of the image"
      border=${args.border}
    >
      <ecl-content-block
        theme="${args.theme}"
        has-title
        has-description
        has-links
        has-secondary-links
      >
        <ecl-link
          theme="${args.theme}"
          slot="title"
          path="/example.html"
          variant="standalone"
        >
          Title 1
        </ecl-link>
        <p slot="description">${args.description}</p>
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
      </ecl-content-block>
    </ecl-navigation-list-item>
    <ecl-navigation-list-item
      theme="${args.theme}"
      image="${args.image ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg' : ''}"
      border=${args.border}
      image-alt="Alt text of the image"
    >
      <ecl-content-block
        theme="${args.theme}"
        has-title
        has-description
        has-links
        has-secondary-links
      >
        <ecl-link
          theme="${args.theme}"
          slot="title"
          path="/example.html"
          variant="standalone"
        >
          Title 2
        </ecl-link>
        <p slot="description">${args.description}</p>
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
      </ecl-content-block>
    </ecl-navigation-list-item>
    <ecl-navigation-list-item
      theme="${args.theme}"
      image="${args.image ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg' : ''}"
      border=${args.border}
      image-alt="Alt text of the image"
    >
      <ecl-content-block
        theme="${args.theme}"
        has-title
        has-description
        has-links
        has-secondary-links
      >
        <ecl-link
          theme="${args.theme}"
          slot="title"
          path="/example.html"
          variant="standalone"
        >
          Title 3
        </ecl-link>
        <p slot="description">${args.description}</p>
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
      </ecl-content-block>
    </ecl-navigation-list-item>
    <ecl-navigation-list-item
      theme="${args.theme}"
      image="${args.image ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg' : ''}"
      border=${args.border}
      image-alt="Alt text of the image"
    >
      <ecl-content-block
        theme="${args.theme}"
        has-title
        has-description
        has-links
        has-secondary-links
      >
        <ecl-link
          theme="${args.theme}"
          slot="title"
          path="/example.html"
          variant="standalone"
        >
          Title 4
        </ecl-link>
        <p slot="description">${args.description}</p>
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
      </ecl-content-block>
    </ecl-navigation-list-item>
    <ecl-navigation-list-item
      theme="${args.theme}"
      image="${args.image ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg' : ''}"
      border=${args.border}
      image-alt="Alt text of the image"
    >
      <ecl-content-block
        theme="${args.theme}"
        has-title
        has-description
        has-links
        has-secondary-links
      >
        <ecl-link
          theme="${args.theme}"
          slot="title"
          path="/example.html"
          variant="standalone"
        >
          Title 5
        </ecl-link>
        <p slot="description">${args.description}</p>
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
      </ecl-content-block>
    </ecl-navigation-list-item>
  </ecl-navigation-list>`;

export const NavigationList = Template.bind({});
NavigationList.storyName = 'default';
NavigationList.args = getArgs();
NavigationList.argTypes = getArgTypes();
