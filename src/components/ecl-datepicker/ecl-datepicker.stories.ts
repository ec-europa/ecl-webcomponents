export default {
  title: 'Components/form/datepicker',
};

const getArgs = () => {
  return {
    inputId: 'ecl-datepicker',
    defaultValue: '11-10-2021',
    required: true,
    disabled: false,
    invalid: false,
    label: 'Label',
    placeholder: 'DD-MM-YYYY',
    dateFormat: 'DD-MM-YYYY',
    yearRange: 40,
  };
}

const getArgTypes = () => {
  return {
    disabled: {
      type: { name: 'boolean' },
      description: 'Disabled input',
      table: {
        category: 'States',
      },
    },
    required: {
      type: { name: 'boolean' },
      description: 'Required input',
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
      description: 'Label',
      table: {
        category: 'Content',
      },
    },
    inputId: {
      name: 'Input id',
      type: { name: 'string' },
      description: 'Input id',
      table: {
        category: 'Content',
      },
    },
    placeholder: {
      type: { name: 'string' },
      description: 'Placeholder text',
      table: {
        category: 'Content',
      },
    },
    defaultValue: {
      name: 'value',
      type: { name: 'string' },
      description: 'Default value of the input',
      table: {
        category: 'Content',
      },
    },
    dateFormat: {
      name: 'format for the date',
      type: { name: 'string' },
      description: 'You can use any valid date format',
      table: {
        category: 'Content',
      },
    },
    yearRange: {
      name: 'range of years to be considered',
      type: { name: 'number' },
      table: {
        category: 'Content',
      },
    },
  };
}

const Template = args =>
  `<ecl-form-group
    label="${args.label}"
    required=${args.required}
    optional-text=" (optional)"
    helper-text="This is the input's helper text."
    invalid=${args.invalid}
    disabled=${args.disabled}
    invalid-text="This is the error message"
    theme="${args.theme}"
  >
    <ecl-datepicker
      theme="${args.theme}"
      required=${args.required}
      disabled=${args.disabled}
      invalid=${args.invalid}
      input-id="${args.inputId}"
      default-value="${args.defaultValue}"
      placeholder="${args.placeholder}"
      date-format="${args.dateFormat}"
      year-range="${args.yearRange}"
    >
    </ecl-datepicker>
  </ecl-form-group>`;

export const Datepicker = Template.bind({});
Datepicker.storyName = 'default';
Datepicker.args = getArgs();
Datepicker.argTypes = getArgTypes();
