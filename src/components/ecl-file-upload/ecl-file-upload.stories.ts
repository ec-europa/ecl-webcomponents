const getArgs = () => {
  return {
    disabled: false,
    required: true,
    invalid: false,
    inputId: 'input-id',
    name: 'input-name',
    label: 'Label',
    placeholder: 'Placeholder text',
    multiple: false,
    buttonReplaceLabel: 'Replace file',
    buttonChooseLabel: 'Choose file',
  };
};

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
    inputId: {
      name: 'FileUpload id',
      type: { name: 'string' },
      description: 'FileUpload variant',
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
      description: 'Form group label',
      table: {
        category: 'Content',
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

export default {
  title: 'Components/form/file-upload',
};

const Template = args =>
`<ecl-form-group
  label="${args.label}"
  required=${args.required}
  optional-text="(optional)"
  helper-text="This is the input's helper text."
  invalid=${args.invalid}
  disabled=${args.disabled}
  invalid-text="This is an error message"
  theme="${args.theme}"
  aria-label-optional="Aria label optional"
  aria-label-required="Aria label required"
>
  <ecl-file-upload
    type="file"
    theme="${args.theme}"
    input-id="${args.inputId}"
    label="${args.label}"
    required=${args.required}
    disabled=${args.disabled}
    invalid=${args.invalid}
    placeholder="${args.placeholder}"
    helper-text="${args.type === 'checkbox' || args.type === 'radio' ? 'This is the input helper text' : '' }"
    name="${args.name}"
    ecl-script
    button-choose-label="${args.multiple ? 'Choose files' : args.buttonChooseLabel}"
    button-replace-label="${args.buttonReplaceLabel}"
    multiple="${args.multiple}"
  >

  </ecl-file-upload>
</ecl-form-group>`;

export const FileUpload = Template.bind({});
FileUpload.storyName = 'default';
FileUpload.args = getArgs();
FileUpload.argTypes = getArgTypes();
