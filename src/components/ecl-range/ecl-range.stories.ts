const getArgs = () => {
  return {
    width: 'm',
    disabled: false,
    required: true,
    invalid: false,
    inputId: 'input-id',
    name: 'input-name',
    max: 30,
    min: 0,
    label: 'Range slider',
    defaultValue: 15,
    step: 1,
  };
};

const getArgTypes = () => {
  return {
    width: {
      type: { name: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Width of the input',
      table: {
        category: 'Styles',
      },
    },
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
    inputId: {
      name: 'Range id',
      type: { name: 'string' },
      description: 'Range variant',
      table: {
        category: 'Content',
      },
    },
    name: {
      type: { name: 'string' },
      description: 'Name attribute',
      table: {
        category: 'Content',
      },
    },
    label: {
      type: { name: 'string' },
      description: 'Form group label',
      table: {
        category: 'Content',
      },
    },
    defaultValue: {
      name: 'value',
      type: 'number',
      description: 'Default value of the input',
      table: {
        category: 'Content',
      },
    },
    min: {
      type: 'number',
      description: 'Minimum value',
      table: {
        type: { summary: 'number' },
        category: 'Range input',
      },
    },
    max: {
      type: 'number',
      description: 'Maximun value',
      table: {
        type: { summary: 'number' },
        category: 'Range input',
      },
    },
    step: {
      type: 'number',
      description: 'Maximun value',
      table: {
        type: { summary: 'number' },
        category: 'Range input',
      },
    },
  };
};

export default {
  title: 'Components/form/range',
};

const Template = args =>
`<ecl-form-group
  label="Range slider"
  required=${args.required}
  optional-text="(optional)"
  helper-text="This is the input helper text"
  invalid=${args.invalid}
  disabled=${args.disabled}
  invalid-text="This is an error message"
  theme="${args.theme}"
  aria-label-optional="Aria label optional"
  aria-label-required="Aria label required"
>
  <ecl-range
    theme="${args.theme}"
    input-id="${args.inputId}"
    default-value="${args.defaultValue}"
    label="${args.label}"
    required=${args.required}
    disabled=${args.disabled}
    invalid=${args.invalid}
    width="${args.width}"
    name="${args.name}"
    min=${args.min}
    max=${args.max}
    ecl-script
    step=${args.step}
    value-label="Value: "
  >

  </ecl-range>
</ecl-form-group>`;

export const Range = Template.bind({});
Range.storyName = 'default';
Range.args = getArgs();
Range.argTypes = getArgTypes();
