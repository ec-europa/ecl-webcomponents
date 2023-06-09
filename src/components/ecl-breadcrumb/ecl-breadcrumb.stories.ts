const getArgs = () => {
  return {
    variant: 'negative',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['default', 'negative'],
      description: "Breadcrumb variant",
    },
  };
};

export default {
  title: 'Components/Navigation/breadcrumb',
};

const Template = (args) => 
  `<ecl-breadcrumb
    variant="${args.variant}"
    theme="${args.theme}"
    ecl-script
   >
    <ecl-breadcrumb-item
      path="/example.html"
      theme="${args.theme}"
    >
      Home
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      ellipsis
      button-aria-label="Click to expand"
     >
     </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      path="/example.html"
      theme="${args.theme}"
    >
      About the European Commission
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      path="/example.html"
      theme="${args.theme}"
    >
      Organisational structure
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      path="/example.html"
      theme="${args.theme}"
    >
      How the Commission is organised
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      current-page
      theme="${args.theme}"
    >
      News
    </ecl-breadcrumb-item>
  </ecl-breadcrumb>`;

export const Breadcrumb = Template.bind({});
Breadcrumb.storyName = 'default';
Breadcrumb.args = getArgs();
Breadcrumb.argTypes = getArgTypes();