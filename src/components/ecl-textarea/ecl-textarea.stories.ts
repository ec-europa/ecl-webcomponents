const getArgs = () => {
  return {
    required: true,
    disabled: false,
    invalid: false,
    width: 'm',
    label: 'Label',
    textareaId: 'textarea-id',
    helperText: `This is the input helper text.`,
    requiredText: '*',
    invalidText: 'This is the error message',
    invalidIcon: 'error',
    optionalText: '(optional)',
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
      description: 'Size of the textarea',
      options: ['s', 'm', 'l'],
      table: {
        category: 'Styles',
      },
    },
    textareaId: {
      name: 'textarea-id',
      type: { name: 'string' },
      description: 'Id of the textarea',
      table: {
        category: 'Content',
      },
    },
  };
};

export default {
  title: 'Components/form/textarea',
};

const Template = (args) => 
  `<ecl-form-group
    theme="${args.theme}"
    helper-text="${args.helperText}"
    helper-id="helper-id"
    invalid=${args.invalid}
    invalid-text="${args.invalidText}"
    invalid-icon="${args.invalidIcon}"
    optional-text="${args.optionalText}"
    label="${args.label}"
    required=${args.required}
    disabled="${args.disabled}"
  >
    <ecl-textarea
      theme="${args.theme}"
      required=${args.required}
      invalid=${args.invalid}
      disabled=${args.disabled}
      name="ecl-textarea"
      width="${args.width}"
      textarea-id=${args.textareaId}
    >
    </ecl-textarea>
  </ecl-form-group>`;

export const Textarea = Template.bind({});
Textarea.storyName = 'default';
Textarea.args = getArgs();
Textarea.argTypes = getArgTypes();