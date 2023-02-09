const getArgs = () => {
  return {
    variant: 'negative',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['default', 'megative'],
      description: "Breadcrumb variant",
    },
  };
};

export default {
  title: 'Components/breadcrumb',
};

const Template = (args) => 
`<ecl-breadcrumb
  variant="${args.variant}"
  theme="${args.theme}"
  ecl-script
 >
  <ecl-breadcrumb-item
    path="/example.html"
    variant="negative"
    theme="${args.theme}"
  >
    Home
  </ecl-breadcrumb-item>
  <ecl-breadcrumb-item
    style-class="ecl-breadcrumb__segment--ellipsis"
    ellipsis
    button-aria-label="Click to expand"
   >
   </ecl-breadcrumb-item>
  <ecl-breadcrumb-item
    variant="negative"
    path="/example.html"
    theme="${args.theme}"
  >
    About the European Commission
  </ecl-breadcrumb-item>
  <ecl-breadcrumb-item
    variant="negative"
    path="/example.html"
    theme="${args.theme}"
  >
    Organisational structure
  </ecl-breadcrumb-item>
  <ecl-breadcrumb-item
    variant="negative"
    path="/example.html"
    theme="${args.theme}"
  >
    How the Commission is organised
  </ecl-breadcrumb-item>
  <ecl-breadcrumb-item
    variant="negative"
    current-page
    style-class="ecl-breadcrumb__current-page"
    theme="${args.theme}"
  >
    News
  </ecl-breadcrumb-item>
</ecl-breadcrumb>`;

export const Breadcrumb = Template.bind({});
Breadcrumb.storyName = 'default';
Breadcrumb.args = getArgs();
Breadcrumb.argTypes = getArgTypes();