import { randomizedLink } from "../../utils/randomizedLink";

export default {
  title: 'Components/Navigation/breadcrumb',
  parameters: {
    badges: [
      'updated',
    ],  
  },
};

const Template = () => 
  `<ecl-breadcrumb
    ecl-script
  >
    <ecl-breadcrumb-item
      path="${randomizedLink('/example.html')}"
    >
      Home
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      ellipsis="true"
      button-aria-label="Show more breadcrumb items"
    >
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      path="${randomizedLink('/example.html')}"
    >
      Parent Page label
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      path="${randomizedLink('/example.html')}"
    >
      Parent Page label
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      path="${randomizedLink('/example.html')}"
    >
      Parent Page label
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      path="${randomizedLink('/example.html')}"
    >
      Parent Page label
    </ecl-breadcrumb-item>
    <ecl-breadcrumb-item
      current-page
    >
      Current Page label
    </ecl-breadcrumb-item>
  </ecl-breadcrumb>`;

export const Breadcrumb = Template.bind({});
Breadcrumb.storyName = 'default';
Breadcrumb.argTypes = {
  color_mode: { table: { disable: true } },
};
