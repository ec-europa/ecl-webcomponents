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
    multiple: false,
    buttonReplaceLabel: 'Replace file',
    buttonChooseLabel: 'Choose file',
  };
};

const getArgTypes = () => {
  return {
    type: {
      type: { name: 'select' },
      options: ['text', 'search', 'radio', 'checkbox', 'range', 'file'],
      description: 'Input type (text, radio, search, checkbox, range, file)',
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
    multiple: {
      type: 'boolean',
      desription: 'Multiple files upload',
      table: {
        type: { summary: 'boolean' },
        category: 'File upload input',
      },
    },
    buttonReplaceLabel: {
      name: 'button-replace-label',
      type: 'string',
      description: 'Label for the replace button',
      table: {
        type: { summary: 'string' },
        category: 'File upload input',
      },
    },
    buttonChooseLabel: {
      name: 'button-choose-label',
      type: 'string',
      description: 'Label for the button',
      table: {
        type: { summary: 'string' },
        category: 'File upload input',
      },
    },
  };
};

const getHelperText = (args) => {
  if (args.type === 'file') {
    return `This is the input's helper text.
      Only txt doc docx pdf odt rtf files.
      Maximum size is 5 MB.
      Encrypted documents and those containing macros are not accepted.`;
  }
  return 'This is the input helper text';
};

export default {
  title: 'Components/input-field',
};

const Template = args =>
`<ecl-form-group
  label="Label"
  required=${args.required}
  optional-text="(optional)"
  helper-text="${getHelperText(args)}"
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
    ecl-script=${args.type === 'range' || args.type === 'file'}
    step=${args.step}
    value-label="Value"
    button-choose-label="${args.multiple ? 'Choose files' : args.buttonChooseLabel}"
    button-replace-label="${args.buttonReplaceLabel}"
    multiple="${args.multiple}"
  >

  </ecl-input>
</ecl-form-group>`;

export const Input = Template.bind({});
Input.storyName = 'default';
Input.args = getArgs();
Input.argTypes = getArgTypes();
