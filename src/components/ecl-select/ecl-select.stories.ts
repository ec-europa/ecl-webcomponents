const getArgs = () => {
  return {
    required: true,
    disabled: false,
    invalid: false,
    width: 'm',
    label: 'Select a country',
    selectId: 'select-id',
    helperText: `This is the input helper text.`,
    requiredText: '*',
    invalidText: 'This is the error message',
    invalidIcon: 'error',
    optionalText: '(optional)',
    multiple: false,
    multiplePlaceholder: 'Select an item',
    multipleSearchNoResultsText: 'No results found',
    multipleAllText: 'Select all',
    multipleClearAllText: 'Clear all',
    multipleCloseText: 'Close',
    multipleSearchText: 'Enter keyword',
  };
};

const getArgTypes = () => {
  return {
    required: {
      type: { name: 'boolean' },
      description: 'Required input',
      table: {
        category: 'States',
      },
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Disabled input',
      table: {
        category: 'States',
      },
    },
    invalid: {
      type: { name: 'boolean' },
      description: 'Invalid input',
      table: {
        category: 'States',
      },
    },
    label: {
      type: { name: 'string' },
      description: 'Legend of the form group',
      table: {
        category: 'Content',
      },
    },
    requiredText: {
      name: 'required-text',
      type: { name: 'string' },
      description: 'Text to show when required',
      table: {
        category: 'Content',
      },
    },
    optionalText: {
      name: 'optional-text',
      type: { name: 'string' },
      description: 'Text to show when optional',
      table: {
        category: 'Content',
      },
    },
    helperText: {
      name: 'helper-text',
      type: { name: 'string' },
      description: 'Helper text',
      table: {
        category: 'Content',
      },
    },
    invalidText: {
      name: 'invalid-text',
      type: { name: 'string' },
      description: 'Error message',
      table: {
        category: 'Content',
      },
    },
    invalidIcon: {
      name: 'invalid-icon',
      type: { name: 'string' },
      description: 'Error icon',
      table: {
        category: 'Content',
      },
    },
    width: {
      type: { name: 'select' },
      description: 'Size of the select element',
      options: ['s', 'm', 'l'],
      table: {
        category: 'Styles',
      },
    },
    multiple: {
      name: 'multiple',
      type: { name: 'boolean' },
      description: 'Multiple select element',
      table: {
        category: 'multiple select',
      },
    },
    multiplePlaceholder: {
      name: 'multiple-placeholder',
      table: {
        category: 'multiple select',
      },
    },
    multipleSearchNoResultsText: {
      name: 'multiple-search-no-results-text',
      table: {
        category: 'multiple select',
      },
    },
    multipleAllText: {
      name: 'multiple-all-text',
      table: {
        category: 'multiple select',
      },
    },
    multipleClearAllText: {
      name: 'multiple-clear-all-text',
      table: {
        category: 'multiple select',
      },
    },
    multipleCloseText: {
      name: 'multiple-close-text',
      table: {
        category: 'multiple select',
      },
    },
    multipleSearchText: {
      name: 'multiple-search-text',
      table: {
        category: 'multiple select',
      },
    },
  };
};

export default {
  title: 'Components/form/select',
};

const Template = (args) => 
  `<ecl-form-group
    helper-text="${args.helperText}"
    helper-id="helper-id"
    theme="${args.theme}"
    invalid=${args.invalid}
    invalid-text="${args.invalidText}"
    invalid-icon="${args.invalidIcon}"
    optional-text="${args.optionalText}"
    label="${args.label}"
    required=${args.required}
    disabled="${args.disabled}"
  >
    <ecl-select
      required=${args.required}
      invalid=${args.invalid}
      disabled=${args.disabled}
      multiple=${args.multiple}
      multiple-placeholder="${args.multiplePlaceholder}"
      multiple-search-text="${args.multipleSearchText}"
      multiple-close-text="${args.multipleCloseText}"
      multiple-search-no-results-text="${args.multipleSearchNoResultsText}"
      multiple-all-text="${args.multipleAllText}"
      multiple-clear-all-text="${args.multipleClearAllText}"
      ecl-script=${args.multiple}
      name="ecl-select"
      theme="${args.theme}"
      width=${args.width}
    > 
      <optgroup label="European countries">
        <option value=1>Belgium</option>
        <option value=2>France</option>
        <option value=3 disabled>Luxembourg</option>
        <option value=4>Germany</option>
        <option value=5 selected>Bulgaria</option>
        <option value=6>Italy</option>
        <option value=7>Romania</option>
        <option value=8>Greece</option>
        <option value=9>Hungary</option>
        <option value=10>Portugal</option>
      </optgroup>
      <optgroup label="Non European countries">
        <option value=11>China</option>
        <option value=11>Turkey</option>
      </optgroup>
    </ecl-select>
  </ecl-form-group>`;

export const Select = Template.bind({});
Select.parameters = {
  viewMode: 'story',
};
Select.storyName = 'default';
Select.args = getArgs();
Select.argTypes = getArgTypes();