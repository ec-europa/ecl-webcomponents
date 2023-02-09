const getArgs = () => {
  return {
    columns: '3',
  };
};

const getArgTypes = () => {
  return {
    columns: {
      type: { name: 'select' },
	    options: ['3', '4'],
	    table: {
	      description: "Number of columns"
	    },
	  },
  };
};

export default {
  title: 'Components/fact and figures',
};

const Template = (args) => 
`<ecl-fact-figures
  columns="${args.columns}"
  theme="${args.theme}"
>
  <ecl-fact-figures-item
    item-title="Lorem ipsum",
    value="00.0 million"
    icon="infographic"
    theme="${args.theme}"
  >
    <span slot="description">
      Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.
    </span>
  </ecl-fact-figures-item>

  <ecl-fact-figures-item
    item-title="Sed hendrerit",
    value="00.0 million"
    icon="spreadsheet"
    theme="${args.theme}"
  >
    <span slot="description">
      Turpis varius congue venenatis, erat dui feugiat felis.
    </span>
  </ecl-fact-figures-item>

  <ecl-fact-figures-item
    item-title="Donec suscipit interdum augue, ac dapibus eros finibus a.",
    value="00.0 million"
    icon="growth"
    theme="${args.theme}"
  >
    <span slot="description">
      Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.
    </span>
  </ecl-fact-figures-item>

  <ecl-fact-figures-item
    item-title="Aenean dapibus",
    value="00.0 million"
    icon="digital"
    theme="${args.theme}"
  >
    <span slot="description">
      Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.
    </span>
  </ecl-fact-figures-item>

  <ecl-fact-figures-item
    item-title="Aliquam faucibus nulla eget eleifend",
    value="00.0 million"
    icon="regulation"
    theme="${args.theme}"
  >
    <span slot="description">
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
    </span>
  </ecl-fact-figures-item>

  <ecl-fact-figures-item
    item-title="Aliquam faucibus nulla eget eleifend",
    value="00.0 million"
    icon="image"
    theme="${args.theme}"
  >
    <span slot="description">
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
    </span>
  </ecl-fact-figures-item>
</ecl-fact-figures>`;

export const FactFigures = Template.bind({});
FactFigures.storyName = 'default';
FactFigures.args = getArgs();
FactFigures.argTypes = getArgTypes();
