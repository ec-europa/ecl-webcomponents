export default {
  title: 'Components/form/search-form',
};

const Template = args =>
`<ecl-search-form
    theme="${args.theme}"
    input-id="ecl-search-form"
    width="m"
    placeholder="Placeholder text"
    button-label="Search"
    button-aria-label="Search"
  >
</ecl-search-form>`;

export const SearchForm = Template.bind({});
SearchForm.storyName = 'default';
