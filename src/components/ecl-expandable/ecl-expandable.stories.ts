export default {
  title: 'Components/expandable',
};

const Template = (args) =>  `<ecl-expandable
                              theme="${args.theme}"
                              id="${args.id}"
                              label-collapsed="${args.labelCollapsed}"
                              label-expanded="${args.labelExpanded}"
                              ecl-script
                            >
                              ${args.content}
                            </ecl-expandable>`;

export const Expandable = Template.bind({});
Expandable.storyName = 'default';
Expandable.args = {
  theme: 'ec',
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
  theme: {
    type: 'select',
    options: ['ec', 'eu'], 
    description: 'Ec or EU theme'
  },
  labelCollapsed: {
    name: 'label-collapsed',
  },
  labelExpanded: {
    name: 'label-expanded',
  },
  content: {
    name: 'content',
    description: 'Content inside the <ecl-expandable></expandable>',
  }
};