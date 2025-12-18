export default {
  title: 'Components/form/datepicker',
};

const getArgs = () => {
  return {
    inputId: 'ecl-datepicker-demo',
    defaultValue: '2025-10-11',
    required: true,
    disabled: false,
    invalid: false,
    hideLabel: false,
    label: 'Label',
    placeholder: 'DD-MM-YYYY',
  };
}

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
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
    hideLabel: {
      name: 'hide-label',
      control: { type: 'boolean' },
      description: 'Hide the label',
      table: {
        category: 'Content',
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
      name: 'input-id',
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
      name: 'default-value',
      type: { name: 'string' },
      description: 'Default value of the input',
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
    hide-label=${args.hideLabel}
    invalid-text="This is the error message"
    aria-label-optional="Aria label optional"
    aria-label-required="Aria label required"
  >
    <ecl-datepicker
      required=${args.required}
      disabled=${args.disabled}
      invalid=${args.invalid}
      input-id="${args.inputId}"
      data-value="${args.defaultValue}"
      required=${args.required}
      data-placeholder="${args.placeholder}"
    >
    </ecl-datepicker>
  </ecl-form-group>`;

export const Datepicker = Template.bind({});
Datepicker.storyName = 'default';
Datepicker.args = getArgs();
Datepicker.argTypes = getArgTypes();
