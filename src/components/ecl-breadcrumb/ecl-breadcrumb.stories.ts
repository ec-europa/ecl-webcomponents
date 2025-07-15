import { randomizedLink } from "../../utils/randomizedLink";

export default {
  title: 'Components/Navigation/breadcrumb',
};

const Template = () => 
  `<ecl-breadcrumb
    min-items-left="1"
    min-items-right="2"
    ecl-script="true"
    navigation-text="Breadcrumb"
    ellipsis-label="Expand breadcrumb"
  >
    <ecl-breadcrumb-item
      path="${randomizedLink('/example.html')}"
    >
      Home
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
