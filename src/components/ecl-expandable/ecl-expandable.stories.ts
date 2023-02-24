export default {
  title: 'Components/expandable',
};

const Template = (args) =>
  `<ecl-expandable
    theme="${args.theme}"
    id="${args.id}"
    label-collapsed="${args.labelCollapsed}"
    label-expanded="${args.labelExpanded}"
    with-utils
    ecl-script
  >
    ${args.content}
  </ecl-expandable>`;

export const Expandable = Template.bind({});
Expandable.storyName = 'default';
Expandable.args = {
  withUtils: true,
  id: 'expandable-example',
  labelCollapsed: 'Expand',
  labelExpanded: 'Collapse',
  content: `<p class="ecl-u-type-paragraph-m">
    The EU is building an energy union that ensures Europe’s energy supply is safe,
    viable and accessible to all. In doing so, it can boost the economy and attract investments that can create new jobs
    opportunities.
  </p>`,
};
Expandable.argTypes = {
  id: {
    description: 'Id of the element',
  },
  labelCollapsed: {
    name: 'label-collapsed',
    control: { name: 'text'},
    description: 'Label that will appear when the content is collapsed',
  },
  labelExpanded: {
    name: 'label-expanded',
    control: { name: 'text'},
    description: 'Label that will appear when the content is expanded',
  },
  content: {
    name: 'content',
    description: 'Content inside the <ecl-expandable></expandable>',
  }
};