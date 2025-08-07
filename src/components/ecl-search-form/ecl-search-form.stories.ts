const getArgs = () => {
  return {
    width: 'm',
    buttonLabel: 'Search',
    placeholder: 'Placeholder text',
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true }},
    buttonLabel: {
      name: 'button-label',
      type: { name: 'string' },
      description: 'Label of the button',
      table: {
        category: 'Content',
      },
    },
    placeholder: {
      type: { name: 'string' },
      description: 'Placeholder element',
      table: {
        category: 'Content',
      },
    },
  };
}


export default {
  title: 'Components/form/search-form',
};

const Template = args =>
`<ecl-search-form
    input-id="ecl-search-form"
    placeholder="${args.placeholder}"
    button-label="${args.buttonLabel}"
    button-aria-label="Search"
  >
</ecl-search-form>`;

export const SearchForm = Template.bind({});
SearchForm.storyName = 'default';
SearchForm.args = getArgs();
SearchForm.argTypes = getArgTypes();