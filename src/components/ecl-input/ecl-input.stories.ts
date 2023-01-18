const getArgs = () => {
  return {
    type: 'text',
    width: 'm',
    disabled: false,
    required: true,
    invalid: false,
    inputId: 'input-id',
    name: 'input-name',
    max: 30,
    min: 0,
    label: '',
    placeholder: 'Placeholder text',
    defaultValue: '',
    step: 1,
  };
};

const getArgTypes = () => {
  return {
    type: {
      type: { name: 'select' },
      options: ['text', 'search', 'radio', 'checkbox', 'range'],
      description: 'Input type (text, radio, search, checkbox, range)',
      table: {
        category: 'Input type',
      },
    },
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
      name: 'Input id',
      type: { name: 'string' },
      description: 'Input variant',
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
    name: {
      type: { name: 'string' },
      description: 'Name attribute',
      table: {
        category: 'Content',
      },
    },
    label: {
      type: { name: 'string' },
      description: 'Checkbox/Radio label',
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
  title: 'Components/input-field',
};

const Template = args =>
`<ecl-form-group
  label="Label"
  required=${args.required}
  optional-text="(optional)"
  helper-text="This is the form group helper text."
  invalid=${args.invalid}
  disabled=${args.disabled}
  invalid-text="This is an error message"
  theme="${args.theme}"
>
  <ecl-input
    type="${args.type}"
    theme="${args.theme}"
    input-id="${args.inputId}"
    default-value="${args.type === 'range' ? args.defaultValue || 15 : args.defaultValue}"
    label="${(args.type === 'checkbox' || args.type === 'radio') ? (args.label || 'Label') : ''}"
    required=${args.required}
    disabled=${args.disabled}
    invalid=${args.invalid}
    width="${args.width}"
    placeholder="${args.placeholder}"
    helper-text="${args.type === 'checkbox' || args.type === 'radio' ? 'This is the input helper text' : '' }"
    name="${args.name}"
    min=${args.min}
    max=${args.max}
    ecl-script=${args.type === 'range'}
    step=${args.step}
    value-label="Value"
  >
  </ecl-input>
</ecl-form-group>`;

export const Input = Template.bind({});
Input.storyName = 'default';
Input.args = getArgs();
Input.argTypes = getArgTypes();
